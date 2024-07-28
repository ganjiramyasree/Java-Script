var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomSource="./"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomSource2="./"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player1 wins";
  }
  else if(randomNumber2>randomNumber1)
    {
      document.querySelector("h1").innerHTML="Player2 wins";
    }
    else{
      document.querySelector("h1").innerHTML="Tie";
    }