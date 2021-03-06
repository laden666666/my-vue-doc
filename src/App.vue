<template>
    <div id="app" @mousewheel="onMouseWheel" 
        @touchstart="onTouchstart" 
        @touchmove="onTouchmove" 
        @touchend="onTouchend">
        <Background :type="app.background" v-if="isHome">
            <span id="home"></span>
            <Home 
                v-bind="app"
                :version="version"
            ></Home>
            <Menu :menu="app.menu" key="1">
                <span id="menu"></span>
                <router-view/>
            </Menu>
        </Background>
        <Menu :menu="app.menu" key="2" v-else>
            <span id="menu"></span>
            <router-view/>
        </Menu>
        <!--PC和WAP自适应版-->
    </div>
</template>
<script>
import app from 'docs-src/app.json'
import debounce from 'lodash.debounce'
import appPackage from 'app-name/package.json'


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
            version: app.version || appPackage.version,
            app,
        }
    },
    computed: {
        isHome(){
            return this.$route.path === '/'
        }
    },
    methods: {
        onMouseWheel(event){
            if(!this.isHome){
                return
            }
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
            if(!this.isHome){
                return
            }
            this._pageX = event.touches[0].pageX
            this._pageY = event.touches[0].pageY
        },
        onTouchmove(event){
            if(!this.isHome){
                return
            }
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
            if(!this.isHome){
                return
            }
            this._pageX = undefined
            this._pageY = undefined
        }
    },
    mounted(){
        let scrollY = 0
        let scrollY2 = 0
        let scrollHandle1 = ()=>{
            if(scrollY2 != scrollY){
                scrollY2 = scrollY
            }
            scrollY = window.scrollY
        }
        let scrollHandle2 = debounce(()=>{
            if(!this.isScrolling && this.isHome){
                if (scrollY > 0 && scrollY < scrollY2 && scrollY < window.innerHeight) {
                    this.showHome()
                }
            }
        }, 20)

        window.addEventListener('scroll', scrollHandle1, {
            passive: true
        })
        window.addEventListener('scroll', scrollHandle2, {
            passive: true
        })
        this.$once('hook:beforeDestroy', function () {
            window.removeEventListener('scroll', scrollHandle1, {
                passive: true
            })
            window.removeEventListener('scroll', scrollHandle2, {
                passive: true
            })
        })
    },
}
</script>
<style>
html, body {
    padding: 0;
    margin: 0;
}
html, body, body code, body kbd, body pre, body samp {
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
</style>
