<template>
    <table class="table"><slot></slot></table>
</template>
<style lang="less" scoped>
.table{
    margin : 15px 0px 0px ;
    padding : 0px ;
    border : 1px solid @border-color ;
    border-collapse : collapse ;
    width : 100% ;
    color : rgb(0, 0, 0) ;
    font-size : 14px ;
    background-color : rgb(253, 252, 248) ;
    margin-top: -1px;
    margin-bottom: 8px;
}
</style>
