const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',check_boxes);
check_boxes();
function check_boxes(){
    const trigger_bottom = window.innerHeight / 5*4;
    boxes.forEach(box =>{
        const box_top = box.getBoundingClientRect().top;
        if(box_top<trigger_bottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}