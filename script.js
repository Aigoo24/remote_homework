window.onload = () => {
    let fullName =document.getElementById('fill-name');
    let userName =document.getElementById('your-username');
    let emailInput =document.getElementById('email-input');
    let passwordInput =document.getElementById('password-input');
    let repeatPasswordInput =document.getElementById('repeat-password-input');
    let agree =document.getElementById('agree');

    fullName.onkeydown = (e) =>{
        let number = parseInt(e.key)
        if(number){
            return false;
        }
    }

    userName.onkeydown = (e) =>{
        if(e.key === "." || e.key === ","){
            return false;
        }
    }

    // dhdwhdi
    agree.onchange = (e)=> {
        if(e.target.checked){
            console.log("Согласен")
        }
        else{
            console.log("Не согласен")
        }
    }

    //проверка срыисшр
    document.getElementById('button').onclick = function (){
        if(!fullName.value) {
            alert('Заполните поле Full name');
            return;
        }
        if(!userName.value) {
            alert('Заполните поле Your user name');
            return;
        }
        if(!emailInput.value) {
            alert('Заполните поле E-mail');
            return;
        }
        if(!passwordInput.value) {
            alert('Заполните поле password');
            return;
        }
        if(!repeatPasswordInput.value) {
            alert('Заполните поле Repeat Password');
            return;
        }

        if (passwordInput.value.length < 8){
            return alert("Пароль должен содержать не менее 8 символов.");
        }

        if (passwordInput.value !== repeatPasswordInput.value) {
            return alert('Пароли не совпадают');
        }

        if(!agree.checked){
            return alert('Чекбокс не выбран');
        }

        document.getElementById('popup').style.display = 'flex';
        let inputs = document.getElementsByClassName('form-input');
        for (let i = 0; i < inputs.length ; i++) {
            inputs[i].value = "";
        }
        agree.removeAttribute('checked');
        agree.checked = false;



    }
    function login(){
        document.getElementById('popup').style.display = 'none';
        document.getElementsByClassName('form-title')[0].innerText = 'Log in to the system';
        repeatPasswordInput.remove();
        fullName.remove();
        document.getElementsByClassName('block-check')[0].remove();
        emailInput.remove();
        document.getElementById('button').textContent = 'Sign In';
        //document.getElementById('button').after('id', 'newButton');
        document.getElementById('btn-acc').remove();
        let labels = document.getElementsByClassName('label');
        for (let i = 0; i < labels.length; i++) {
            labels[i].remove();
        }
        document.getElementById('button').onclick = null;
        document.getElementById('button').onclick = function (){
            if(!userName.value) {
                alert('Заполните поле Your user name');
                return;
            }
            if(!passwordInput.value) {
                return alert('Заполните поле password');
            }
            alert(`Добро пожаловать, ${userName.value}!`);
        }

    }
    document.getElementById('button-popup').onclick = ()=>{
        login();
    }
    document.getElementById('btn-acc').onclick = ()=>{
        login();
    }




}

console.log("Сообщение от первого разработчика в mytask");
