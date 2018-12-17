function sliderUU() {
    sliderTime = 2000;  //時間可更改
    slider = document.getElementById("slider");
    sliderList = document.getElementById("sliderList");
    sliderItem = sliderList.getElementsByClassName("sliderItem");
    sliderBtn = document.getElementById("sliderBtn");
    rightBtn = document.getElementById("rightBtn");
    leftBtn = document.getElementById("leftBtn");
    var endX, endX, deltaX;


    //加入點按事件
    rightBtn.addEventListener("click", sliderNext, false);
    leftBtn.addEventListener("click", sliderPrev, false);
    sliderBtnItem = sliderBtn.getElementsByTagName('li');

    //讓全部item並且全部往後位移 產生小圓球
    for (var item = 0; item < sliderItem.length; item++) {
        sliderItem[item].style.transform = 'translateX(' + item + '00%)';
        sliderBtn.innerHTML += "<li value=" + item + "></li>";
    }

    //將小圓球全部加入按鈕事件
    for (var itemBtn = 0; itemBtn < sliderBtnItem.length; itemBtn++) {
        sliderBtnItem[itemBtn].onclick = sliderOO;
    }

    var sliderCount = 0;  //計算圖片是第幾張
    sliderinterval = window.setInterval(sliderNext, sliderTime); //設定時間事件

    //加一
    function sliderNext() {
        if (sliderCount < sliderBtnItem.length - 1) {
            sliderCount++;
        } else {
            sliderCount = 0;
        }
        sliderBtnChange();
    }

    //減一
    function sliderPrev() {
        if (sliderCount > 0) {
            sliderCount--;
        } else {
            sliderCount = sliderBtnItem.length - 1;
        }
        sliderBtnChange();
    }
    //小球的function
    function sliderOO() {
        sliderCount = this.value;
        sliderBtnChange();
    }

    //item改變的function
    function sliderBtnChange() {
        for (var oo = 0; oo < sliderBtnItem.length; oo++) {
            sliderBtnItem[oo].style.backgroundColor = "rgba(0, 0, 0, .33)";
        }
        sliderList.style.transform = 'translateX(-' + sliderCount + '00%)';
        sliderBtnItem[sliderCount].style.backgroundColor = "cadetblue";
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slider.addEventListener('mouseover', function () {
        sliderinterval = clearInterval(sliderinterval);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slider.addEventListener('mouseout', function () {
        sliderinterval = window.setInterval(sliderNext, sliderTime);
    });

    slider.addEventListener("touchstart", function (e) {
        sliderinterval = clearInterval(sliderinterval);
        var touch = e.touches[0];
        startX = touch.pageX;
    });

    //加入手機滑動一直滑阿滑
    slider.addEventListener("touchmove", function (e) {

        var touch = e.touches[0];
        endX = touch.pageX;
    });

    slider.addEventListener("touchend", function (e) {
        deltaX = startX - endX;
        if (endX != '') {
            if (deltaX > 35) {
                sliderNext();
            } else if (deltaX < -35) {
                sliderPrev();
            }
        }
        endX = '';
    });


}