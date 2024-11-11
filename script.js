let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let containerDom = document.querySelector('.container');
let listItemDom = document.querySelector('.container .list');
let thumbnailDom = document.querySelector('.container .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}
prevDom.onclick = function() {
    showSlider('prev');
}
let timeRunning = 3000;
let runTimeout;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.container .list .item');
    let itemThumbnail = document.querySelectorAll('.container .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        containerDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        containerDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        containerDom.classList.remove('next');
        containerDom.classList.remove('prev');
    }, timeRunning)
}