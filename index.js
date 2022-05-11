// 
const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(e)=>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((currElem) => currElem.classList.remove('p-btn-active'));
    p_btn_clicked.classList.add('p-btn-active');

    // To find data num values 
    btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((currElem)=> currElem.classList.add('p-image-not-active'));

    img_active.forEach((currElem)=> currElem.classList.remove('p-image-not-active'));

     
})

