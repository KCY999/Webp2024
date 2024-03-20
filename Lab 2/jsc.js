var container = document.getElementById("container");
window.onload = function(){
    document.getElementById("container").innerHTML = generateRandomString(Math.floor(Math.random() * 3)); // or 2
}

const generateRandomString =
    (num) => {
      const characters =
          'abcdefghijklmnopqrstuvwxyz';
      let result1 = '';
      const charactersLength = characters.length;
      for (let i = 0; i < num; i++) {
        result1 +=
            characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result1;
    }


    
window.addEventListener("keyup",function(e){
    console.log(e.key);
    var str = container.textContent;

    if(e.key == str.charAt(0) )
    str = str.substring(1);

    if(e.key == "escape"){
        container.textContent = '';
    }
    else{
        let i;
        for(i=1;i<=1+Math.floor(Math.random() * 2);i++)
        str += e.key;
    }

    container.textContent = str;

});