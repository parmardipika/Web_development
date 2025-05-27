const favmovie="Avatar";
let guess=prompt("Guess the movie:");
while(guess!=favmovie)
{
   if(guess=="quit")
   {
    console.log("you quit");
    break;
   }
   guess= prompt("wrong guess! again Guess the movie:");

}
if(guess==favmovie)
{
    prompt("Congrats!");
    console.log("Congrats!");
}

