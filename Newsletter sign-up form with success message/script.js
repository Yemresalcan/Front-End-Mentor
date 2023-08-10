/* take the input value and check if it is a valid email address*/

const emailInput= document.getElementById('email');
const errorMsg= document.getElementsByClassName('errorMsg')[0];
const submitBtn= document.getElementById('submitBtn');
const dismissBtn= document.getElementById('dismissBtn');

const thanksMsg= document.getElementsByClassName('thanksMsg')[0];
const container = document.getElementsByClassName('container')[0];

/*email address listen*/
emailInput.addEventListener('keyup',()=>{
    if(emailInput.value == '' ){
        errorMsg.classList.remove('show')
        emailInput.classList.remove('invalid');
        return;

    }
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const email= emailInput.value;
    if(regEx.test(email)){
        errorMsg.classList.remove('show');
        emailInput.classList.remove('invalid');
    }
}
   
);
/*Subnit  button listener*/
submitBtn.addEventListener('click',()=>{
    const regEx= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const email= emailInput.value;
    if(regEx.test(email)){
        errorMsg.classList.remove('show');
        emailInput.classList.remove('invalid');
        container.classList.add('showOff');
        thanksMsg.classList.add('show');
    }else {
        errorMsg.classList.remove('show');
        emailInput.classList.add('invalid');
    }
});

dismissBtn.addEventListener('click',()=>{
    emailInput.value='';
    container.classList.remove('showOff');
    thanksMsg.classList.remove('show');
})