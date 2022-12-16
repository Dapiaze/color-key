let keyWASD = document.querySelector(".key-WASD");
let blockWASD= document.querySelector(".block-WASD");
let gamescreen= document.querySelector("#game-screen");
const keyEvent =(event)=>{
    let key= event.key.toUpperCase();
    keyPressAdd(key);
    setTimeout(keyPressRemove, 200);
}
const keyPressAdd =(key)=>{
    if(key =='W'){
        keyWASD.children[0]= keyWASD.children[0].classList.add('key-press');
        blockChangeColor(0);
    }
    else if( key== 'A'){
        keyWASD.children[1]= keyWASD.children[1].classList.add('key-press');
        blockChangeColor(1);
    }
    else if( key== 'S'){
        keyWASD.children[2]= keyWASD.children[2].classList.add('key-press');
        blockChangeColor(2);
    }
    else if( key== 'D'){
        keyWASD.children[3]= keyWASD.children[3].classList.add('key-press');
        blockChangeColor(3);
    }
}
const keyPressRemove =()=>{
    for(let cont= 0; cont<keyWASD.children.length;cont++){
        keyWASD.children[cont]= keyWASD.children[cont].classList.remove('key-press');
    }
}
const blockChangeColor=(num)=>{
    if(blockWASD.children[num].className=='azure-box'){
        blockWASD.children[num].classList.remove('azure-box');
        blockWASD.children[num].classList.add('aqua-box');
    }
    else if(blockWASD.children[num].className=='aqua-box'){
        blockWASD.children[num].classList.remove('aqua-box');
        blockWASD.children[num].classList.add('lightgreen-box');
    }
    else if(blockWASD.children[num].className=='lightgreen-box'){
        blockWASD.children[num].classList.remove('lightgreen-box');
        blockWASD.children[num].classList.add('coral-box');
    }
    else if(blockWASD.children[num].className=='coral-box'){
        blockWASD.children[num].classList.remove('coral-box');
        blockWASD.children[num].classList.add('azure-box');
    }       
}
addEventListener('keydown',keyEvent);

/*  Author: Tiago Dapiaze // Github: @Dapiaze  */