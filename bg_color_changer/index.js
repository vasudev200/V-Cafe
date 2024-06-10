const boxs = document.querySelectorAll('.box');
const bodyc = document.querySelector('body');

boxs.forEach(function(box){ 
    console.log(box);
    box.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            bodyc.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            bodyc.style.backgroundColor = 'white'
        }
        if(e.target.id === 'blue'){
            bodyc.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            bodyc.style.backgroundColor = 'yellow';
        }
        if(e.target.id === 'white'){
            bodyc.style.backgroundColor = 'purple';
        }
        if(e.target.id === 'yellow'){
            bodyc.style.backgroundColor = 'green';
        }
    });
})