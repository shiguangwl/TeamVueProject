<template>
  <router-view/>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  border-radius: 3.5px;
  background-color: rgba(50,50,50,.1);
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to right,#0acffe 0,#495aff 100%);
  -webkit-box-shadow: inset 0 0 10px rgb(0 0 0 / 20%);
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
*{
  padding: 0px;
  margin: 0px;
  box-sizing:border-box !important;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

@font-face {
  font-family: 'MFShangYa';
  src: url('./assets/font/MFShangYa.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HYTiaoTiao';
  src: url('./assets/font/HYTiaoTiao.ttf?20201105') format('truetype');
  font-weight: normal;
  font-style: normal;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body,ul,li,ol,dl,dd,h1,h2,h3,h4,h5,h6,input,p{ margin:0;}
ul,ol { padding:0;}
img { border:none;}
.clear{zoom:1;}
.clear:after{display:block; content:"";clear:both; visibility:hidden; height:0;}   /*清除浮动*/
a{text-decoration:none;color: #595959;}
li{list-style:none;}

$UPUI-BG: #FFFFFF;
$UPUI-B20: #F2FBFF;
$UPUI-B30: #CCECFF;
$UPUI-B50: #1B9AEE;
$UPUI-G10: #F7F7F7;
$UPUI-G20: #F0F0F0;
$UPUI-G60: #8C8C8C;
$UPUI-G80: #262626;
$UPUI-O20: #FFF7E6;
$UPUI-O50: #FA8C15;
$UPUI-GN20: #EDFFED;
$UPUI-GN50: #15AD31;
</style>
