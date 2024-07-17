const userItem = document.getElementById('user')
const myForm =document.getElementById('myForm')
function getUser() {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/cities')
    .then(res => res.json())
    .then(users =>{
        let x=0
          users.data.map(item=>{
          userItem.innerHTML += `<li class='item'><h1 class="header__title"><span> ${++x}</span>${item.name}</h1> <h1 class="header__title">${item.text}</h1>
          <img class="header__img" src=${'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'}${item.image_src} alt=""></li>`
         })
    })
}
getUser();

const addCategory = document.getElementById('addCategory');
addCategory.addEventListener('click', function (e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('name_en',document.getElementById('name_en').value)
    formData.append('name_ru',document.getElementById('name_ru').value)
    formData.append('images',document.getElementById('images').fies[0])
})