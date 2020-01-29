const sendBtn = document.querySelector('#button');
const cleatBtn = document.querySelector('#clear');
const messageContainer = document.querySelector('.full-message');
const inputMessage = document.getElementById('message');


const message = ()=> {
    let message = inputMessage.value;
    messageContainer.innerHTML = message;    

}

const clearMessage = ()=> {
    messageContainer.innerHTML = "";
}


sendBtn.addEventListener('click', message);
cleatBtn.addEventListener('click', clearMessage);
