function rolldice(){
    //arvotaan satunaaislasku välillä 1-6 var randomnumber=
    Math.floor(math.random()*6)+ 1;
    //asetetaan uusi kuva img-elementille 
    var diceimage =
    document.getElementById('diceimage');
    diceimage.src ='./images/' + randomNumber + '.png';
}
