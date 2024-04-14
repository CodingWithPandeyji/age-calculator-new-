const btn=document.querySelector(" div.container button");
const input=document.querySelector(" div.container input");
const h2=document.querySelector("div.container h2");

var date=new Date(input.value);


btn.addEventListener("click",()=>{
    
    
    

    var date=new Date(input.value);
    

   
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear;
    // console.log(day);

    var current=new Date();

    var age=current.getFullYear()-date.getFullYear();
    if (current.getMonth() < date.getMonth() || 
    (current.getMonth() === date.getMonth() && 
     current.getDate() < date.getDate())) 
     {
    age--;
   

}


    h2.textContent="Your age is "+ age +" years old";



})