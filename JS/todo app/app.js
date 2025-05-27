let todo=[];

let input=prompt("please enter your request");
while(true)
{
    if(input=="quit")
    {
        console.log("quitting app");
        break;
    }
    else if(input=="list")
    {  
        console.log("______________");
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("______________");

    }
    else if(input=="add")
    {
       task= prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(input=="delete")
    {
        let idx=prompt("enter index to delete");
        todo.splice(idx,1);
        console.log("task deleted");

    }
    else{
        console.log("wrong reqest");
    }
    input=prompt("please enter your request");
    

}