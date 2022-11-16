let keyWASD = document.querySelector(".key-WASD");
console.log(keyWASD.children);
const keyEvent =(event)=>{
    let key= event.key.toUpperCase();
    keyPressAdd(key);
    setTimeout(keyPressRemove, 200);
}
addEventListener('keydown',keyEvent);
const keyPressAdd =(key)=>{
    if(key =='W'){
        keyWASD.children[0]= keyWASD.children[0].classList.add('key-press');
    }
    else if( key== 'A'){
        keyWASD.children[1]= keyWASD.children[1].classList.add('key-press');
    }
    else if( key== 'S'){
        keyWASD.children[2]= keyWASD.children[2].classList.add('key-press');
    }
    else if( key== 'D'){
        keyWASD.children[3]= keyWASD.children[3].classList.add('key-press');
    }
}
const keyPressRemove =()=>{
    for(let cont= 0; cont<keyWASD.children.length;cont++){
        keyWASD.children[cont]= keyWASD.children[cont].classList.remove('key-press');
    }
}


