function array(arr,n){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}

arr=[2,3,4,5,6,7];

array(arr,4);

str="abcdabcdefgggh";
function extract(str){
    ans="";
for(let i=0;i<str.length;i++)
{
    if(ans.indexOf(str[i])==-1)
    {
        ans+=str[i];
        
    }
}
return ans;
}
extract(str);

function namep(country){
    len=0;
    namei="";
    for(let i=0;i<country.length;i++)
    {
        if(country[i].length>len)
        {
            len=country[i].length;
            namei=country[i];

        }

    }
    return namei;
}

namep( ["Australia", "Germany", "United States of America"]);
    

stri="abjdnIeiodnu";
function vowels(stri){
    count=0;
    stri=stri.toLowerCase();
    for(let i=0;i<stri.length;i++)
    {
        if(stri[i]=='a'||stri[i]=='e'||stri[i]=='i'||stri[i]=='o'||stri[i]=='u')
        {
            count++;
        }

    }
    return count;
}
vowels(stri);

start=100;
end=200;
function gener(start,end){
    let diff=end-start;
    let num=Math.floor(Math.random()*diff)+start;
    return num;
}
gener(start,end);