'use strict';

//add an envent handler
let button = document.querySelector('.btn');

button.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');


    let className = document.body.className
    if(className =='light-theme'){
        this.textContent = 'Dark'
    }else{
        this.textContent = 'Light'
    
    }
    console.log('current class name:' + className)

});

