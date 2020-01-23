const colorBtn = document.querySelector('.color-btn');
const bodyBck = document.querySelector('body')
const text = document.getElementById('text');

const colors = ['red', 'green','blue', 'yellow', 'purple', 'pink'];

colorBtn.addEventListener('click', colorChanger);


function colorChanger() {

        let num = Math.floor((Math.random())*5 + 1)
        bodyBck.style.backgroundColor = colors[num]; 
        text.textContent = colors[num];  

}

  
