

const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector('.generate');
const clearbtn = document.querySelector('.clear');

let pixelgrid = 16;
let piexeltodraw = pixelgrid * pixelgrid;
let pixelmeasure = 800 / pixelgrid;


clearbtn.addEventListener('click',function (container) {
   clear(gridContainer);
});

function clear (container) {
    console.log(container)
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function creategrid () {
    for (let i = 0; i < piexeltodraw; i++) {
        let div = document.createElement('div');
        div.style.width = `${pixelmeasure}px`
        div.style.height = `${pixelmeasure}px`;
        div.classList.add('div-item');
        gridContainer.appendChild(div);
    }
};

function getUserInput () {
    let input = '';
    do {
        input = parseInt(prompt("Enter a grid between 1 and 100 : "));
    }while(!input)
     if(input <=0) {
        return 1;
    } else if(input>100) {
        return 100;
    }else {
        return input;
    }
};

btn.addEventListener('click',function(){
     pixelgrid = getUserInput();
     piexeltodraw = pixelgrid * pixelgrid;
     pixelmeasure = 800 / pixelgrid;
     clear(gridContainer)
     creategrid()
     drawcolor()
});

function drawcolor () {
    let griditems = document.querySelectorAll('.div-item') 
        for(let item of griditems) {
            item.classList.add('div-item:hover');
            
        }
    
}

drawcolor()
creategrid();

// creategrid(numberofpixel)


 

