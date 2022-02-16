const makeBg = ()=>{
    const red= Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const color = `rgb(${red},${green},${blue})`
    return color;
}

const changeBg = function() {
    const bg = document.getElementsByClassName('main-body')[0];
    bg.style.backgroundColor = makeBg();
}

document.getElementById('change-color-btn').addEventListener('click', changeBg);
