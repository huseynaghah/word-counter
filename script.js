
let words = 0;
let letters = 0;
let sentences = 0;
//words = data.split(" ").length;
//console.log(words);
document.getElementById('textarea1').addEventListener("input", function () {
    const data = document.getElementById('textarea1').value;
    words = data.replace(/\s+/g, ' ').trim().split(" ").filter(function (n) { return n != '' }).length;
    document.getElementById("words").innerText = words;
    const regex =/[a-zA-Z0-9]/g;
    console.log(letters)

    letters = data.match(regex)?.length;
    if ( letters === undefined){
        letters = 0;}
    document.getElementById("letters").innerText = letters;
    const sym = /[.!?]/;
    sentences = data.split(sym).length -1;
    document.getElementById("sentences").innerText = sentences;
})