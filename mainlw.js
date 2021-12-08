window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const BtnNext = document.querySelector(".slider-next");
    const BtnPre = document.querySelector(".slider-pre");
    const dotItem = document.querySelector(".slider-dot-item");
    const sliderLength = sliderItems.length;
    const sliderItemsWidth = sliderItems[0].offsetWidth; 
    let positionX = 0;
    let index = 0;

    BtnNext.addEventListener("click", function () {
        handleChangeSlide(1);
    });
    BtnPre.addEventListener("click", function () {
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            positionX = positionX - sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } 
        else if (direction === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
});