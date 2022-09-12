function open_rules(){
    document.querySelector(".rules").style.visibility="visible";
    // create a black color behind the window
    let x=document.createElement("div");
    document.body.appendChild(x);
    x.style.width="100%";
    x.id="blackwindow";
    x.style.height="100%";
    x.style.top="0%";
    x.style.position="absolute";
    x.style.backgroundColor="rgba(0, 0, 0,0.5)";
}
function closerules(){
    document.querySelector(".rules").style.visibility="hidden";
    let x=document.getElementById("blackwindow");
    x.remove();
}