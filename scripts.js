 'use strict'
var tot1=0;
var tot2=0;
var tot=0;
var workHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var cookeshour1=[];
var placescook=[];
function Room(min,max,avgCookie,header){
  var hed=[];
  hed.push(header);
  this.header=hed;
  this.min=min;
  this.max=max;
  this.customers=10;
  this.avgCookie=avgCookie;
  this.cusmerperhor=[];
  this.cokperhor=[];

   placescook.push(this);


}

Room.prototype.cookieC= function () {
  tot=0
  for (let i9 = 0; i9 < this.cusmerperhor.length; i9++) {
  var numbercooki=Math.ceil (this.cusmerperhor[i9] *this.avgCookie);
   this.cokperhor.push( numbercooki);
   tot=tot+numbercooki
  }
  
};

var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var table1 = document.createElement('table');
  table1.setAttribute('border', '5px','solid','black');
  table1.setAttribute('width', '100%');
  headerdetail()
  
Room.prototype.follw2= function () {
  var tr1 = document.createElement('tr');
  var td1=  document.createElement('td');
  tr1.appendChild(td1);
  td1.textContent = this.header;
  // tot=0
  for (let index1 =0; index1 < this.cokperhor.length; index1++) {

    var td2 = document.createElement('td');
    
    
    td2.textContent =this.cokperhor[index1];
    tr1.appendChild(td2);
    // tot= tot+this.cookieC();
    // this.sum.push(tot);
  

  }




  var td3 = document.createElement('td');
  tr1.appendChild(td3);
  td3.textContent =tot;
  table1.appendChild(tr1);
  article.appendChild(table1);

};

Room.prototype.randomNUM= function () {
  for (let i0 = 0; i0 < workHours.length; i0++) {
    this.customers= generateRandomcustomer(this. max,this.min);
   this.cusmerperhor.push(this.customers)
  }
 

};
var Seattle= new Room(23,65,6.3,'Seattle');
var Tokyo= new Room(3,24,1.2,'Tokyo');
var paris= new Room(20,38,2.3 ,'paris');
var Dubai= new Room(11,38,3.7,'Dubai');
var lima= new Room(2,16,4.6,'lima');



for (let i5 = 0; i5 < placescook.length; i5++) {
  placescook[i5].randomNUM();
placescook[i5].cookieC();
placescook[i5].follw2();

}





function generateRandomcustomer(max1, min1){
  var generatedCustomer = Math.floor((Math.random()*(max1-min1))+min1);
  return generatedCustomer;
}
  function  headerdetail () {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var tr = document.createElement('tr');
  var th1  = document.createElement('th');
  th1.textContent ="name location";

  tr.appendChild(th1);
  for (let index1 = 0; index1 < workHours.length; index1++) {
    var th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = workHours[index1];


  }
  var th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily Location Total';
  table1.appendChild(tr);
  article.appendChild(table1);


  
}
footertot()
function footertot() {
  var tr6 = document.createElement('tr');
  var td6  = document.createElement('td');
  tr6.appendChild(td6);
  td6.textContent ='totle' ;
  tot2=0;
  for (let index1 =0; index1 < workHours.length; index1++) {
    var td7 = document.createElement('td');
    tot1=0
    for (let index = 0; index <placescook.length; index++) {
      
     
      tot1=tot1+ placescook[index].cokperhor[index1]
      
  
     
    }
   
  
  tot2=tot2+tot1
  tr6.appendChild(td7);
  td7.textContent =tot1
  table1.appendChild(tr6);

}
var td8  = document.createElement('td');
tr6.appendChild(td8);
td8.textContent =tot2 ;
table1.appendChild(tr6);
article.appendChild(table1);
}
var cookielistuser= document.getElementById("cookielistuser")
cookielistuser.addEventListener('submit', function(){
  
  event.preventDefault();
 
  
  var usermin = Number(event.target.Min.value) ;
  var usermax =Number(event.target.Max.value) ;
  var useravergcookie = Number( event.target.Avgcookies.value) ;
  var userlocation = event.target.Location.value;

  
  var newlocation = new Room(
       usermin,
       usermax,
       useravergcookie,
       userlocation ,
  )
   
  
  if((usermax-usermin)>0) {
      table1.removeChild(table1.lastChild)
    newlocation.randomNUM();
    newlocation.cookieC();
    newlocation.follw2();
    footertot();
  
    
  } else {
    alert("please min number less than max")
  }
    
  
});