<template>
    <div class="menu" :class="{close: showToggle}">
        <!-- 侧拉菜单 -->
        <aside class="menu-aside" :class="{fixed: fixed}">
            <div class="menu-nav">
                <ul class="menu-nav_list">
                    <li class="menu-nav_item" v-for="(menu1, index1) in menu" :key="index1">
                        <a class="menu-nav_link" v-if="menu1.path" :href="menu1.path">{{menu1.title}}</a>
                        <p class="menu-nav_link" v-else>{{menu1.title}}</p>
                        <ul class="menu-nav_list" v-if="menu1.children && menu1.children.length > 0">
                            <li class="menu-nav_item" v-for="(menu2, index2) in menu1.children" :key="index2">
                                <a class="menu-nav_link" v-if="menu2.path" :href="menu2.path">{{menu2.title}}</a>
                                <p class="menu-nav_link" v-else>{{menu2.title}}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 菜单显示隐藏的切换按钮 -->
            <div class="menu-toggle">
                <svg @click="toggle" class="menu-toggle_btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 128l0 128 1024 0 0-128-1024 0zm0 380.16l0 128 1024 0 0-128-1024 0zm0 384l0 128 1024 0 0-128-1024 0z" p-id="1991"></path>
                </svg>
            </div>
        </aside>
        <!-- 主要内容 -->
        <div class="menu-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 菜单信息，是一个数组，具体配置如下：
        // 数组中，属性path是链接地址；title是链接的名称；children下一级链接，最多支持两级链接。如：
        // [{
        //     path : '/',
        //     title : '一级链接',
        //     children :[
        //         {
        //             path: '/#'
        //             title : '二级链接',
        //         },
        //     ]
        // }],
        menu: {
            type: Array,
            isRequired: true
        }
    },
    data() {
        return {
            fixed: false,
            showToggle: false
        }
    },
    methods:{
        toggle(){
            this.showToggle = !this.showToggle
        }
    },
    mounted(){
        window.onscroll = ()=> {
            let rect = this.$el.getBoundingClientRect()
            if(rect.top <= 0){
                this.fixed = true
            } else {
                this.fixed = false
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .menu{
        height: 100vh;
        width: 100%;    
        position: relative;
    }
    .menu-aside{
        width: 300px;
        height: 100vh;
        border-right: 1px solid rgba(0,0,0,.07);
        overflow-y: scroll;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        transition: transform .25s ease-out;
        z-index: 3;
        transition: all .3s;
        background-color: rgba(255, 255, 255, .9);
    }
    .menu-aside.fixed{
        position: fixed;
    }
    .close > .menu-aside{
        width: 0;
        overflow-y: visible;
    }
    .menu-aside::-webkit-scrollbar-thumb{
        background:transparent;
    }
    .menu-nav_list{
        list-style: none;
        margin: 0 0 0 15px;
        padding: 0;
    }
    .menu-nav_item{
        margin: 6px 0;
    }
    .menu-nav_item a{
        color: #505d6b;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: none;
        display: block;
        list-style: none;
    }
    p.menu-nav_link{
        color: #364149;
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: none;
        display: block;
        list-style: none;
    }
    a.menu-nav_link{
        color: #505d6b;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: none;
        display: block;
        list-style: none;
    }
    a.menu-nav_link:hover{
        text-decoration: underline;
    }
    .menu-toggle{
        box-sizing: border-box;
        background-color: transparent;
        background-color: hsla(0,0%,100%,.8);
        border: 0;
        outline: none;
        padding: 10px;
        position: absolute;
        bottom: -40px;
        left: 0;
        text-align: center;
        transition: all .3s;
        width: 100%;
        min-width: 40px;
        z-index: 4;
        transition-timing-function: ease-in-out;
    }
    .fixed .menu-toggle{
        bottom: 0;
        left: 0;
    }
    .menu-toggle_btn{
        height: 18px;
        width: 18px;
        cursor: pointer;
    }
    .menu-content{
        position: absolute;
        width: calc(100% - 300px);    
        height: auto;
        top: 0;
        left: 300px;
        transition: all .3s;
    }
    .close > .menu-content{
        width: 100%; 
        left: 0;   
    }

    @media screen and (max-width: 500px) {
        .menu-content{
            width: 100%; 
            left: 0;   
        }
        .close > .menu-content{
            width: 100%; 
            left: 0; 
        }
        .menu-aside{
            width: 0;
            overflow-y: visible;
        }
        .close > .menu-aside{
            width: 300px;
            overflow-y: scroll;
        }
    }
</style>
