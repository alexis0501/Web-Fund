
function like(btn) {
    var span = btn.parentNode.querySelector("span"); 
    var Likecount = parseInt(span.innerText); 
    Likecount++; 
    span.innerText = Likecount; 
}