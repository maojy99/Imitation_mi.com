
/*-------------------搜索框-------------------*/
var searchText = document.querySelector('.search-text'),
    searchBtn = document.querySelector('.search-btn');
var searchBox = document.querySelector('.search-box');


searchText.onfocus = function(){
    searchText.classList.add('searchBoder');
    searchBtn.classList.add('searchBoder');
    searchBox.classList.add('displayBlock')
}
searchText.onblur = function(){
    searchText.classList.remove('searchBoder');
    searchBtn.classList.remove('searchBoder');
    searchBox.classList.remove('displayBlock')
}
/*-------------------搜索框-------------------*/

/*-------------------header菜单栏切换-------------------*/

var headerItem = document.querySelectorAll('.header-item');
var headerItemMenu = document.querySelectorAll('.header-item-menu');

for(var i = 0; i < headerItem.length; i++){
    headerItem[i].index = i;
    
    headerItem[i].onmouseover = function(){
        for(var j = 0; j < headerItemMenu.length; j++){
            headerItemMenu[j].style.display = 'none';
        }
        headerItemMenu[this.index].style.display = 'block';
        headerItemMenu[this.index].style.borderTop = '1px solid #e0e0e0';
        headerItemMenu[this.index].classList.add('menuHeight');
    }
    headerItem[i].onmouseout = function(){
        headerItemMenu[this.index].classList.remove('menuHeight');
        headerItemMenu[this.index].style.border = 'none';
    }
}

/*-------------------header菜单栏切换-------------------*/



/*--------------------banner菜单切换-------------------*/
var asideItem = document.querySelectorAll('.aside-item');
var asideMenu = document.querySelectorAll('.aside-menu');

for(var i = 0; i < asideItem.length; i++){
    asideItem[i].index = i;

    asideItem[i].onmouseover = function(){
        for(var j = 0; j < asideMenu.length; j++){
            asideMenu[j].style.display = 'none';
        }

        asideMenu[this.index].style.display = 'block';
    }
    asideItem[i].onmouseout = function(){

        asideMenu[this.index].style.display = 'none';
    }
}
/*--------------------banner菜单切换-------------------*/




/*--------------------------轮播图----------------------*/

// 获取所需元素
var images = document.querySelectorAll('.slide-item');
var spans = document.querySelectorAll('.follow span');
var left = document.querySelector('.slide-left');
var right = document.querySelector('.slide-right');

// 定义有参函数
function showImage(show){
    for(var i = 0; i < spans.length; i++){
        spans[i].index = i;
        images[i].index = i;
        images[i].style.zIndex = 100 - i;
        images[i].style.opacity = '0';
        spans[i].style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    }
    // 将传入参数下标值的图片显示出来
    images[show].style.opacity = '1';
    // 将传入参数下标值的圆点背景颜色改变
    spans[show].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
}
showImage(0);   // 初始化显示第一张图片和第一个圆点
   
var count = 1;  // 计数器

// 自动轮播函数
function imageMove(){
    // 如果count的值能将4整除，则将count重新赋值为0，也就是回到第一张图片，因为图片一共只有4张
    if(count % 4 == 0){
        count = 0;
    }
    showImage(count);   // 将count的值传给函数，通过count的值来决定让哪张图显示
    count++;            // count++，使图片显示发生改变
}

// 每过两秒调用一次自动轮播函数，并将其赋值给imageInitailMove,方便后续进行暂停自动轮播
var imageInitailMove = setInterval('imageMove()',4000);

// 左键切换图片功能
left.onclick = function(){
    // 先清除定时器，关闭自动轮播功能
    clearInterval(imageInitailMove);

    // 判断是否轮播至最左侧，如果轮播至最左侧，就让其变为最右侧图片显示
    if(count == 0){
        count = 4;
    }
    count--;    // 如果没有轮播至最左侧，就显示左侧的图片
    showImage(count);   // 调用函数
    imageInitailMove = setInterval('imageMove()',4000);     // 重新开启定时器
}

// 右键切换图片功能
right.onclick = function(){
    // 先清除定时器
    clearInterval(imageInitailMove);
    // 因为方向与自动轮播相同，所以直接调用
    imageMove();
    // 重新开启定时器
    imageInitailMove = setInterval('imageMove()',4000);
}

// 为小圆点添加切换功能
for(var i = 0; i < spans.length; i++){
    spans[i].onclick = function(){
        clearInterval(imageInitailMove);
        // 通过获取圆点的index值，来决定显示那张图片，圆点的index值为自己的位置
        count = this.index;
        showImage(count);
        imageInitailMove = setInterval('imageMove()',4000);
    }
}


//  当鼠标放入banner图时，停止自动轮播
for(var i = 0; i < images.length; i++){
    images[i].onmouseover = function(){
        clearInterval(imageInitailMove);
    }
    images[i].onmouseout = function(){
        imageInitailMove = setInterval('imageMove()',4000);
    }
}

/*--------------------------轮播图----------------------*/



/*--------------------------小米闪购----------------------*/

var falshSaleBtnLeft = document.querySelector('.l_jt');
var falshSaleBtnRight = document.querySelector('.r_jt');
var falshSaleList = document.querySelector('.flashsale ul');

// 自动轮播
function showFalsh(){
    var disX = document.defaultView.getComputedStyle(falshSaleList,null).transform;
    var disValue = parseFloat(disX.substring(7).split(',')[4]);

    if(disValue == 0){
        falshSaleBtnLeft.style.background = 'url(image/商品页左箭头.png) no-repeat 12px 6px';
        falshSaleBtnLeft.style.backgroundSize = '12px 14px';
        falshSaleList.style.transform = 'translateX(-' + 992 + 'px)';
    }else if(disValue == -992){
        falshSaleList.style.transform = 'translateX(-' + 1984 + 'px)';
    }else if(disValue == -1984){
        falshSaleList.style.transform = 'translateX(-' + 2232 + 'px)';
        falshSaleBtnRight.style.background = 'url(image/商品页右箭头暗色.png) no-repeat 12px 6px';
        falshSaleBtnRight.style.backgroundSize = '12px 14px';
    }else if(disValue == -2232){
        falshSaleList.style.transform = 'translateX('+ 0 + 'px)';
        falshSaleBtnRight.style.background = 'url(image/商品页右箭头.png) no-repeat 12px 6px';
        falshSaleBtnRight.style.backgroundSize = '12px 14px';
        falshSaleBtnLeft.style.background = 'url(image/商品页左箭头暗色.png) no-repeat 12px 6px';
        falshSaleBtnLeft.style.backgroundSize = '12px 14px';
    }
}

    falshSaleBtnLeft.style.background = 'url(image/商品页左箭头暗色.png) no-repeat 12px 6px';
    falshSaleBtnLeft.style.backgroundSize = '12px 14px';

    var falshSaleMove = setInterval('showFalsh()',2000);


// 右键切换
falshSaleBtnRight.onclick = function(){
    var disX = document.defaultView.getComputedStyle(falshSaleList,null).transform;
    var disValue = parseFloat(disX.substring(7).split(',')[4]);

    falshSaleBtnLeft.style.background = 'url(image/商品页左箭头.png) no-repeat 12px 6px';
    falshSaleBtnLeft.style.backgroundSize = '12px 14px';

    if(disValue == 0){
        falshSaleList.style.transform = 'translateX(-' + 992 + 'px)';
    }else if(disValue == -992){
        falshSaleList.style.transform = 'translateX(-' + 1984 + 'px)';
    }else if(disValue == -1984){
        falshSaleList.style.transform = 'translateX(-' + 2232 + 'px)';
        falshSaleBtnRight.style.background = 'url(image/商品页右箭头暗色.png) no-repeat 12px 6px';
        falshSaleBtnRight.style.backgroundSize = '12px 14px';
    }
}

// 左侧切换
falshSaleBtnLeft.onclick = function(){
    var disX = document.defaultView.getComputedStyle(falshSaleList,null).transform;
    var disValue = parseFloat(disX.substring(7).split(',')[4]);

    falshSaleBtnRight.style.background = 'url(image/商品页右箭头.png) no-repeat 12px 6px';
    falshSaleBtnRight.style.backgroundSize = '12px 14px';

    if(disValue == -2232){
        falshSaleList.style.transform = 'translateX(-' + 1984 + 'px)';
    }else if(disValue == -1984){
        falshSaleList.style.transform = 'translateX(-' + 992 + 'px)';
    }else if(disValue == -992){
        falshSaleList.style.transform = 'translateX(' + 0 + 'px)';
        falshSaleBtnLeft.style.background = 'url(image/商品页左箭头暗色.png) no-repeat 12px 6px';
        falshSaleBtnLeft.style.backgroundSize = '12px 14px';
    }
}

/*--------------------------小米闪购----------------------*/


// --------------------------倒计时-----------------------*/

var t = document.querySelectorAll('.time div');

function countTime(){
    // 获取当前时间
    var date = new Date();
    // 获取自1970年1月1日至今所度过的毫秒数
    var now = date.getTime();

    var endDate = new Date('2021-09-01 0:0:0');
    var end = endDate.getTime();

    var leftTime = end - now;

    var h, m, s;
    if(leftTime >= 0){
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);
    }
    if(h < 10){
        h = '0' + h;
    }
    if(m < 10){
        m = '0' + m;
    }
    if(s < 10){
        s = '0' + s;
    }
    t[0].innerHTML = h;
    t[1].innerHTML = m;
    t[2].innerHTML = s;

    setTimeout(countTime,1000);
}

countTime();

// --------------------------倒计时-----------------------*/



// --------------------------回到顶部-----------------------*/

var toTop = document.querySelector('#to-top');  // 获取按钮

// 当页面下滑至距顶部854px的位置时，出现“返回顶部按钮”
function scrollFun(){
    if(document.body.scrollTop > 854 || document.documentElement.scrollTop > 854){
        toTop.classList.add('according');
    }else{
        toTop.classList.remove('according');
    }
}

window.onscroll = function(){
    scrollFun();
}


// 点击回到顶部
function topFun(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

toTop.onclick = function(){
    topFun();
}

// --------------------------回到顶部-----------------------*/


// --------------------------商品页面切换-----------------------*/


var comThree = document.querySelector('.commodity_three');
var comFour = document.querySelector('.commodity_four');
var comFive = document.querySelector('.commodity_five');
var comSix = document.querySelector('.commodity_six');
var comSeven = document.querySelector('.commodity_seven');


function commodityToggle(btn){
    var comBtn = btn.querySelectorAll('.commodity-btn');    // 获取该分区所有分类按钮
    var comItem = btn.querySelectorAll('.commodity-item');  // 获取该分区所有分类商品页

    for(var i = 0; i < comBtn.length; i++){
        comBtn[i].index = i;    //添加自定义属性

        // 默认设置第一个显示
        for(var j = 0; j < comBtn.length; j++){
            comItem[j].classList.add('displayNone');
        }
        comItem[0].classList.remove('displayNone'); 
        comBtn[0].classList.add('check-btn');  

        // 鼠标滑过切换
        comBtn[i].onmouseover = function(){
            for(var j = 0; j < comBtn.length; j++){
                comItem[j].classList.add('displayNone');
                comBtn[j].classList.remove('check-btn');
            }
            comItem[this.index].classList.remove('displayNone');
            comBtn[this.index].classList.add('check-btn');

        }
    }
}
commodityToggle(comThree);
commodityToggle(comFour);
commodityToggle(comFive);
commodityToggle(comSix);
commodityToggle(comSeven);

// --------------------------商品页面切换-----------------------*/


// --------------------------侧边栏APP二维码-----------------------*/

var sideApp = document.querySelector('#side-app');
var checkSideApp = document.querySelectorAll('#sidebar a')[0];

checkSideApp.onmouseover = function(){
    sideApp.style.display = 'block';
}
checkSideApp.onmouseout = function(){
    sideApp.style.display = 'none';
}