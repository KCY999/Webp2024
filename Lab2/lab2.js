var container = document.getElementById("container");

window.onload = function(){
    container.textContent = randStr(2);
    
}

function randStr(num){ // num is for 生幾個字
    const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const listLength = charList.length;

    let i;
    let result = '';
    for( i=1 ; i<=num ; i++ ){
        let randNum = Math.floor( Math.random() * listLength );  
        result += charList.charAt(randNum);
    }

    return result;
}

window.addEventListener("keyup",function(e){
    console.log(e.key);

    if( e.key.toLowerCase() == container.textContent.charAt(0).toLowerCase() ){
    container.textContent = container.textContent.substring(1);
    }

    let i;
    for(i=1;i<=Math.floor( 1 + Math.random() * 2 );i++)
    container.textContent += e.key;

});

