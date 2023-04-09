const container = document.querySelector('.container');
const range = document.getElementById('range-input');
const resetBtn = document.querySelector('button');

// const parentDiv = document.createElement('div');

function draw(){
    this.classList.add('pen');

}

function reset(){
    range.value = range.defaultValue;
    container.textContent = '';
}

resetBtn.addEventListener('click', reset);

function selector(){

  return  createDivs(range.value);
}

range.addEventListener('change', selector)

function createDivs(user){
    const numSquares = user;
    const squareSize = Math.floor(container.clientWidth/numSquares);

    
    for(let i = 0; i < user*user; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = squareSize + 'px';
        div.style.height = squareSize + 'px';
        div.addEventListener('mouseover', draw)
        container.appendChild(div);  

        
        
    }
}

//createDivs(user);




