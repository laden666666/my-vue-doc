<template>
    <div class="home">
        <div class="home-main">
            <p class="home-logo" v-if="logo">
                <img :src="logo" class="home-logo_image">
            </p>
            <div class="home-name">
                <span class="home-name_value">{{name}}</span>
                <div class="home-version" v-if="version">
                    <span class="home-version_value">{{version}}</span>
                </div>
            </div>
            <p class="home-subhead" v-if="subhead">{{subhead}}</p>
            <pre class="home-describe" v-if="describe">{{describe}}</pre>

            <div class="home-buttons">
                <button class="home-button">测试</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    props: {
        name: {
            type: String,
            isRequired: true,
        },
        version: {
            type: String,
        },
        subhead: {
            type: String,
        },
        describe: {
            type: String,
        },
        logo: {
            type: String,
        },
    }
}
</script>
<style scoped>
.home{
    height: 100vh;
    margin: 0 16px;
    text-align: center;
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
}
.home-main{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.home-logo{
    line-height: 1.5rem;
    margin: 1em 0;
}
.home-logo_image{

}
.home-name{
    color: #34495e;
    font-size: 2.2rem;
    font-weight: 300;
    margin: .625rem 0 2.5rem;
    position: relative;
    display: flex;
    justify-content: center
}
.home-version{
    position: relative;
}
.home-version_value{
    bottom: -.2rem;
    left: .1rem;
    font-size: 1rem;
    position: absolute;
}
.home-subhead{
    line-height: 1.5rem;
    margin: 1em 0;
    font-size: 1.3rem;
    text-align: center;
}
.home-describe{
    line-height: 1.8;
    list-style-type: none;
    margin: 1em auto;
    max-width: 500px;
    padding: 0;
    font-size: 14px;
    color: #34495e;
}
.home-buttons{
    -webkit-font-smoothing : antialiased ;
    -webkit-tap-highlight-color : rgba(0, 0, 0, 0) ;
    text-size-adjust : none ;
    box-sizing : border-box ;
    line-height : 1.5rem ;
    margin : 1em 0px ;
    color : rgb(52, 73, 94) ;
    font-size : 15px ;
    text-align : center ;
}
.home-button{
    -webkit-font-smoothing : antialiased ;
    -webkit-tap-highlight-color : rgba(0, 0, 0, 0) ;
    text-size-adjust : none ;
    box-sizing : border-box ;
    text-decoration-line : none ;
    border : 1px solid #42b983;
    color: #42b983;
    border-radius : 2rem ;
    display : inline-block ;
    font-size : 1.05rem ;
    letter-spacing : 0.1rem ;
    margin : 0.25rem 0.5rem ;
    padding : 0.3em 1rem ;
    transition : all 0.15s ease ;
    background-color: transparent;
    cursor: pointer;
    outline: none;
}
.home-button:hover{
    background-color: #42b983;
    border : 1px solid #42b983;
    color: #fff;
}
</style>
