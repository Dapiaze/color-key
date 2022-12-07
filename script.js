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
        checkBlockPos(0);
    }
    else if( key== 'A'){
        keyWASD.children[1]= keyWASD.children[1].classList.add('key-press');
        checkBlockPos(1);
    }
    else if( key== 'S'){
        keyWASD.children[2]= keyWASD.children[2].classList.add('key-press');
        checkBlockPos(2);
    }
    else if( key== 'D'){
        keyWASD.children[3]= keyWASD.children[3].classList.add('key-press');
        checkBlockPos(3);
    }
}
const keyPressRemove =()=>{
    for(let cont= 0; cont<keyWASD.children.length;cont++){
        keyWASD.children[cont]= keyWASD.children[cont].classList.remove('key-press');
    }
}
const checkBlockPos=(num)=>{
    console.log('BLOCK POSITION:');
    console.log('x:'+(blockWASD.children[num].getBoundingClientRect().x) +'y:'+(blockWASD.children[num].getBoundingClientRect().x-gamescreen.getBoundingClientRect().x));
    return blockWASD.children[num].getBoundingClientRect();
}
addEventListener('keydown',keyEvent);
