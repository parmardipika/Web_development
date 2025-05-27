const max=prompt("Enter the max number");

const num=Math.floor(Math.random()*10)+1;
let n=prompt("guess the num: or type Quit for quitting it");

while(true){
    
    if(n=="Quit"){
        break;
    }
    if(n==num){
        alert("right");
        break;
    }
    else if(num>n){
       n= prompt("guess was small! try again")
    }
    else if(num<n){
        n=prompt("guess was large! try again")
    }
    
        //ya ise n ke equal lr de aur const n ko loop se bahar likhe
    

}