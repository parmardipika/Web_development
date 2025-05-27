function sum(n){
    let s=0;
    for(let i=1;i<=n;i++)
    {
        s+=i;

    }
    return s;
}

sum(5);
function sumi(n1,n2){

    
    return n1+n2;
}

sumi(5);

function multi(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
    
}
let greet=function(a,b){
    return function() { // Return a new function that performs the addition
        console.log(a + b);
    };
}
multi(greet(2,3),2);