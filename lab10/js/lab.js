// Lab 10 - javaScript for the Web
// Author: Gabriel Specht
// Date: 5/15/2025

function generateRandomText() {
    const text = "The great wonder of the vegetable kingdom is a very curious unknown species of Sensitive. It is a dwarf plant. The leaves are like a narrow segment of a sphere, consisting of two parts, like the cap of a spring purse, the concave part outwards, each of which falls back with indented edges (like an iron spring fox-trap); upon anything touching the leaves, or falling between them, they instantly close like a spring trap, and confine any insect or anything that falls between them. It bears a white flower. To this surprising plant I have given the name of Fly trap Sensitive.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    //get random index to start slicing text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //generate the random text
    return text.slice(randStart, randStart + randLen);
}

$("#make-convo").click(function(){
    //get new text
    let newText = generateRandomText();
    //append a dew div to output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
