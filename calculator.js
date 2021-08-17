document.getElementById('keyboard').addEventListener('click',function(event){
    let paraout=document.getElementById('output-value');
    let parahis=document.getElementById('history-value');
    var parameter=document.getElementById('box2');
    let a=parseInt(event.target.innerHTML);
    let str=event.target.innerHTML;
   if(a>=0 && a<=9)
   {
       paraout.innerText+=event.target.innerHTML;
   } 
   else if(str=='%' || str=='-'|| str=='+'||str=='*' || str=='/')
   {
       parahis.innerText=paraout.innerText;
       paraout.innerText='';
       parameter.innerText=str;
   }
   else if(str=='C')
   {
       paraout.innerText='';
       parahis.innerText='';
   }
   else if(str=='CE')
   {
       var str1=paraout.innerText;
       var str2 = str1.slice(0, -1);
       paraout.innerText=str2;  
   }
   else if(str=='=')
   {
       let y=parseFloat(paraout.innerText);
       let x=parseFloat(parahis.innerText);
        if(parameter.innerText=='+')
       {
           paraout.innerText=x+y;
           parahis.innerText=x+y;
       }
       if(parameter.innerText=='-')
       {
           paraout.innerText=x-y;
           parahis.innerText=x-y;	
       }
       if(parameter.innerText=='*')
       {
           paraout.innerText=x*y;
           parahis.innerText=x*y;
       }
       if(parameter.innerText=='/')
       {
           paraout.innerText=x/y;
           parahis.innerText=x/y;
       }
       if(parameter.innerText=='%')
       {
           paraout.innerText=x%y;
           parahis.innerText=x%y;
       }
   }
})