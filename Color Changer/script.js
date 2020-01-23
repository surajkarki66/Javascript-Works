const colorBtn = document.querySelector('.color-btn');
const discoBtnOn = document.querySelector('.disco-btn-on');
const text = document.getElementById('text');
colorBtn.addEventListener('click', colorChanger);
discoBtnOn.addEventListener('click', initDisco);
const disco = () => {

setInterval(function(){
        var x = Math.round( Math.random() * 255 );
        var y = Math.round( Math.random() * 255 );
        var z = Math.round( Math.random() * 255 );
        var bg = "background:rgb("+x+", "+y+", "+z+");";
        var element = document.querySelector('body');
        element.style = bg;
        text.textContent = "Colors: " + "RGB " + "(" + x + "," + y + "," + z + ")";   

    }, 300);

}

function colorChanger() {
      
        var x = Math.round( Math.random() * 255 );
        var y = Math.round( Math.random() * 255 );
        var z = Math.round( Math.random() * 255 );
        var bg = "background:rgb("+x+", "+y+", "+z+");";
        var element = document.querySelector('body');
        element.style = bg;
        text.textContent = "Colors: " + "RGB " + "(" + x + "," + y + "," + z + ")";   

}


function initDisco() {
        disco();
}

    