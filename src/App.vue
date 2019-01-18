<template>
    <div @mousewheel="onMouseWheel" 
        @touchstart="onTouchstart" 
        @touchmove="onTouchmove" 
        @touchend="onTouchend">
        <Background>
            <span id="home"></span>
            <Home 
                v-bind="app"
            ></Home>
            <Menu :menu="menu">
                <span id="menu"></span>
                <router-view/>
            </Menu>
        </Background>
    </div>
</template>
<script>
import app from './app.js'

var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;

var Ease = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOut: function(t, b, c, d) {
        return -c *(t /= d)*(t-2) + b;
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t-2) - 1) + b;
    }
}

export default {
    data(){
        return {
            isScrolling: false,
            app,
            menu: [{
                title: '文档控件',
                children: [{
                    title: '主页',
                    path: '#/',
                }, {
                    title: '基础文档控件',
                    path: '#/Base',
                }, {
                    title: '进阶文档控件',
                    children: [{
                        title: '源代码展示控件',
                        path: '#/Advances/Code',
                    }, {
                        title: '属性说明书',
                        path: '#/Advances/Instructions',
                    }, {
                        title: 'Vue的props说明书',
                        path: '#/Advances/Props',
                    }, {
                        title: 'Vue的Demo展示',
                        path: '#/Advances/Demo',
                    }]
                }]
            },]
        }
    },
    methods: {
        onMouseWheel(event){
            if(this.isScrolling){
                event.preventDefault()
                event.stopPropagation()
                return
            } else {
                if ((isFirefox && event.detail > 0) || (!isFirefox && event.wheelDelta < 0)) {
                    if(window.scrollY < window.innerHeight){
                        this.showMenu()
                        event.preventDefault()
                        event.stopPropagation()
                    }
                } else {
                    if(window.scrollY <= window.innerHeight){
                        this.showHome()
                        event.preventDefault()
                        event.stopPropagation()
                    }
                }
            }
        },
        showHome(){
            if(this.isScrolling){
                return
            }

            this.animationScroll(window.scrollY, -window.scrollY)
        },
        showMenu(){
            if(this.isScrolling){
                return
            }

            this.animationScroll(window.scrollY, window.innerHeight - window.scrollY)
        },
        animationScroll(beginningValue, changeValue, duration = 20){

            this.isScrolling = true
            let time = 0
            let cb = ()=> {
                time++
                let value = Ease.easeInOut(time, beginningValue, changeValue, duration)
                window.scrollTo(0, value)
                if(time < duration){
                    requestAnimationFrame(cb)
                } else {
                    this.isScrolling = false
                }
            }

            cb()
        },
        onTouchstart(event){
            this._pageX = event.touches[0].pageX
            this._pageY = event.touches[0].pageY
        },
        onTouchmove(event){
            if(this.isScrolling){
                event.preventDefault()
                event.stopPropagation()
                return
            }
            if(event.touches[0].pageX - this._pageX < 10){
                if(event.touches[0].pageY - this._pageY > 10){
                    if(window.scrollY <= window.innerHeight){
                        this.showHome()
                        event.preventDefault()
                        event.stopPropagation()
                    }
                } else if(event.touches[0].pageY - this._pageY < -10){
                   if(window.scrollY < window.innerHeight){
                        this.showMenu()
                        event.preventDefault()
                        event.stopPropagation()
                    }
                }
            }
        },
        onTouchend(event){
            this._pageX = undefined
            this._pageY = undefined
        }
    },
}
</script>
<style>
html, body{
    padding: 0;
    margin: 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
*{
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: none;
    -webkit-touch-callout: none;
    box-sizing: border-box;
}
*::-webkit-scrollbar{
    width:4px
}
*::-webkit-scrollbar-thumb{
    background:hsla(0,0%,53%,.4);
    border-radius:4px;
}
*::-webkit-scrollbar-track{
    background: transparent;
}
*:hover::-webkit-scrollbar-thumb{
    background:hsla(0,0%,53%,.4)
}
*:hover::-webkit-scrollbar-track{
    background:hsla(0,0%,53%,.1)
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
