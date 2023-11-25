let gameOver = false;
let toggle = true;
const arr = [0,1,2,3,4,5,6,7,8];

const mainEl = document.querySelector('.main');
for (let index = 0; index < 9; index++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `${index}`;
    cell.insertAdjacentHTML('afterbegin', `
    <div class="cross none">
    <svg xmlns="http://www.w3.org/2000/svg" height="10em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
</div>
<div class="circle none">
    <svg xmlns="http://www.w3.org/2000/svg" height="9em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
</div>
    `);
    mainEl.append(cell);   
}

const cellEl = document.querySelectorAll('.cell');
const rezultEl = document.querySelector('.rezult__text');

cellEl.forEach((cell, index) => cell.addEventListener('click', e => {
    const itemCross = cell.querySelector('.cross');
    const itemCircle = cell.querySelector('.circle');

    if (toggle){        
        if (arr[index]!=='Circle' && arr[index]!=='Cross' && !gameOver){            
            arr[index] = 'Cross';
            itemCross.classList.toggle('none');
            toggle = !toggle;
        }
       
    }else{        
        if (arr[index]!=='Cross' && arr[index]!=='Circle' && !gameOver){            
            arr[index] = 'Circle';
            itemCircle.classList.toggle('none');
            toggle = !toggle;
        }       
    }
    //логика 
    if (!gameOver) {  
    if(arr[0] === arr[1] && arr[2] === arr[1]){
        rezultEl.textContent = `${arr[0]} WIN`;
        colorCell(0, 1, 2);           
    }
    if(arr[3] === arr[4] && arr[4] === arr[5]){
        rezultEl.textContent = `${arr[3]} WIN`; 
        colorCell(3, 4, 5);
    }

    if(arr[6] === arr[7] && arr[7] === arr[8]){
        rezultEl.textContent = `${arr[6]} WIN`; 
        colorCell(6, 7, 8);
    }
    if(arr[0] === arr[3] && arr[6] === arr[3]){
        rezultEl.textContent = `${arr[0]} WIN`;
        colorCell(0, 3, 6);
    }
    if(arr[1] === arr[4] && arr[4] === arr[7]){
        rezultEl.textContent = `${arr[1]} WIN`; 
        colorCell(1, 4, 7);
    }
    if(arr[2] === arr[5] && arr[5] === arr[8]){
        rezultEl.textContent = `${arr[2]} WIN`;
        colorCell(2, 5, 8); 
    }
    if(arr[0] === arr[4] && arr[8] === arr[4]){
        rezultEl.textContent = `${arr[0]} WIN`; 
        colorCell(0, 4, 8);
    }
    if(arr[2] === arr[4] && arr[4] === arr[6]){
        rezultEl.textContent = `${arr[2]} WIN`;
        colorCell(2, 4, 6); 
    }
}
}));

const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', e => reset());

function reset(){
    const crossEl = document.querySelectorAll('.cross');
    const circleEl = document.querySelectorAll('.circle');
    
    crossEl.forEach(cross => {
        if (!cross.classList.contains('none')){
            cross.classList.toggle('none');
        }
    });
    circleEl.forEach(cross => {
        if (!cross.classList.contains('none')){
            cross.classList.toggle('none');
        }
    });
    arr.forEach((el, index) =>{ 
        arr[index] = index;        
    });
    rezultEl.textContent = ''; 

    cellEl.forEach((item) => {
        if (item.classList.contains('redCell'))
        { item.classList.toggle('redCell')}
    });
    if (gameOver) {gameOver = !gameOver;}  
}

function colorCell(...cells){
    cells.forEach((item) => {
    document.getElementById(`${item}`).classList.add('redCell'); 
    })
    gameOver = !gameOver;
}