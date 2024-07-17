const togglePassword = document
.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
this.classList.toggle('bi-eye');
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit',function(event){
    event.preventDefault();
    const phone_number = document.getElementById('phone_number').value;
    const password = document.getElementById('password').value;
    const formData = new FormData();
    formData.append('phone_number', phone_number);
    formData.append('password',password);
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin',{
        method:'POST',
        body:formData,
    }).then(res=>res.json()).then(res=>{
        if(res.success){
            alert("Muafaqiyatni Kirdingiz Tabriklayman")
            localStorage.setItem('access_token',res.data.tokens.access_Token.token)
            document.location.href('category.html')
        }else{
            alert("Login yoki parol notugri")
        }
    }).catch(err=>{
        console.log(err);
    })
 
})