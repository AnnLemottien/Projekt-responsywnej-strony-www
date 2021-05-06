let sliderIndex = 0;
slider();

function slider(){
    let i;
    let sliderItems = document.getElementsByClassName('item');

    for(i=0;i<sliderItems.length;i++){
        sliderItems[i].classList.remove('slide');
        sliderItems[i].classList.remove('slide-out');
        sliderItems[i].className += ' slide-out';
    }

    sliderIndex++;

    if(sliderIndex > sliderItems.length){
        sliderIndex = 1;
    }

    sliderItems[sliderIndex - 1].classList.remove('slide-out');
    sliderItems[sliderIndex - 1].className += ' slide';

    setTimeout(slider, 5000);
}