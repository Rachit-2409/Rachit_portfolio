let btn = document.getElementById('search_button');
let query_box = document.querySelector('.query_box');
let query = document.getElementById('query');


btn.addEventListener('click',()=>{
    query_box.classList.toggle('hide')
})

