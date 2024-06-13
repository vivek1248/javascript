let str =" ";
let buttons=document.querySelectorAll('#keyboard');
buttons.forEach(function(b){
  b.addEventListener('click',function(i)
{
    if(i.target.innerHTML==="=")
    {
     str=eval(str);
     let output=document.querySelector('#output-value')
        output.innerHTML=str;
    }
    else if(i.target.innerHTML==="C"){
        str=" ";
        document.querySelector('#output-value').innerHTML=str
    }
    else if(i.target.innerHTML==="CE"){
        str=str.slice(0,-1);
        document.querySelector('#output-value').innerHTML=str
    }  
    else{
        str=str+i.target.id;
        console.log(str)
        let output=document.querySelector('#output-value')
        output.innerHTML=str;
    }
})
})

