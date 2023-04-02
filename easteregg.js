

//påskägg 2, skriv in en sifferföljd och en modal popup öppnas

let inputs = "";

function easterFun (evt){
const pressedWord= evt.key;
inputs+= pressedWord;
inputs=inputs.slice(-4);
if(inputs==="2508"){
easterPopup();
inputs="";
}
}
document.querySelector("body").addEventListener("keydown",easterFun);

function easterPopup (){
  const newModal=document.createElement("div");
  newModal.className="surprisemodal";

  const message=document.createElement("h1");
  message.innerHTML="Glad Påsk!!!";
  message.className="surprise";

  document.body.appendChild(newModal);
  newModal.appendChild(message);  
  newModal.style.display="block";

  window.onclick= function (evt){
    if(evt.target==newModal){
      newModal.style.display="none";
    }
  }
  return newModal;
}



