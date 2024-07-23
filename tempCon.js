let celsius=document.getElementById("celsius");
let fahrenhiet=document.getElementById("fahrenhiet");

celsius.oninput= () =>{
    let output=(parseFloat(celsius.value)*9)/5 +32;
    fahrenhiet.value=output.toFixed(2);
}

fahrenhiet.oninput= () =>{
    let output=((parseFloat(fahrenhiet.value)-32)*5)/9 ;
    celsius.value=output.toFixed(2);
}