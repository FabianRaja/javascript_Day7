//Print the total population of countries using reduce function
let a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload=function(){
     const data=JSON.parse(a.response);
     let b=data.reduce((accumulator,value,index,actualArray)=>{
         return accumulator+=(value.population);
     },0)
     console.log("Total Population: "+b);
}

