<template>
    <li class="li"><slot></slot></li>
</template>
<style scoped>
.li{
    line-height: 1.6em;
    margin: 1.2em 0 -1.2em;
    padding-bottom: 1.2em;
    position: relative;
    z-index: 1;
    font-size: 14px;
    color: #34495e;
    list-style: none;
}
.li::before{
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 10px 0 10px;
    border-radius: 20px;
    background-color: #34495e;
    vertical-align: middle;
}
</style>
