let button=document.getElementById('btn');
let lovevalue=document.getElementById('lovevalue');
let name1=document.getElementById('nameOne');
let name2=document.getElementById('nameTwo');
button.addEventListener("click",function() 
{
    if (name1.value.trim() === "") {
            alert("Your name is required!");
            lovevalue.remove=true;
            return false;
    }
    if (name2.value.trim() === "") {
            alert("Your Partner name is required!");
            lovevalue.remove=true;
            return false;
    }
    else
    {
        let lovedata=Math.random()*100;
        lovedata=Math.floor(lovedata);
        lovevalue.value=lovedata + " %"; 
    }
});