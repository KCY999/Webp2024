function changeText(event){
    console.log(event.target);
    event.target.innerText = event.target.innerText + ' clicked';
}
const styleAug = {color:'red', fontSize: '100px'};


function SayHello(){
    return (
        <>
            <div>
                <h1 style={styleAug} onClick={changeText}>hello CGU</h1>
            </div>
        </>
    );
}

export default SayHello;
