'use strict';
var tot1=0;
var tot2=0;
var tot;
var workHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
// var places= [];
// var hours = [];

var cookeshour1=[];

function Room(min,max,avgCookie,customers,sum,result,header){
  // var res =[];
  var hed=[];

  // res.push(result);
  hed.push(header);
  this.header=hed;
  this.min=min;
  this.max=max;
  this.customers=customers;
  this.avgCookie=avgCookie;
  this.sum=sum;
  this.result=result;
  this.cookeshour=[];
  this.cookeshour1=[];

  // places.push(this);


}

Room.prototype.cookieC= function () {
  return Math.ceil (this.customers*this.avgCookie);
};
// Room.prototype.follw= function() {
//   var parentElement = document.getElementById('cookielist');
//   var article = document.createElement('article');
//   parentElement.appendChild(article);
//   var ul = document.createElement('ul');
//   article.appendChild(ul);

//   for (let index = 0; index < this.result.length; index++) {
//     var li = document.createElement('li');
//     li.textContent = this.result[index];
//     ul.appendChild(li);
//   }

// };

Room.prototype.follw2= function () {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var tot;
  var table1 = document.createElement('table');
  table1.setAttribute('border', '5px','solid','black');
  table1.setAttribute('width', '100%');
  table1.setAttribute('border-collapse', 'collapse');


  var tr1 = document.createElement('tr');
  var td1=  document.createElement('td');
  tr1.appendChild(td1);
  td1.textContent = this.header;
  for (let index1 =0; index1 < workHours.length; index1++) {

    var td2 = document.createElement('td');
    this.randomNUM(),
    tr1.appendChild(td2);
    td2.textContent =this.cookieC();
    tot= this.cookieC();
    // console.log(this.cookieC());
    this.sum.push(tot);
    // console.log(this.sum.push(tot));



  }




  var td3 = document.createElement('td');
  tr1.appendChild(td3);
  td3.textContent =tot;
  table1.appendChild(tr1);
  article.appendChild(table1);

};

Room.prototype.randomNUM= function () {
  this.customers= generateRandomcustomer(this. max,this.min);

};
var Seattle= new Room(23,65,6.3,10,[],[],'Seattle');
var Tokyo= new Room(3,24,1.2,10,[],[],'Tokyo');
var paris= new Room(20,38,2.3,10,[],[] ,'paris');
var Dubai= new Room(11,38,3.7,10,[],[],'Dubai');
var lima= new Room(2,16,4.6,10,[],[] ,'lima');
var placescook=[Seattle,Tokyo,paris,Dubai,lima];


headerdetail();
Seattle.randomNUM();
Seattle.cookieC();
Seattle.result.push(Seattle.cookieC());
// Seattle.follw();
Seattle.follw2();


Tokyo.randomNUM(),
Tokyo.cookieC(),
Tokyo.result.push(Tokyo.cookieC());
// Tokyo.follw();
Tokyo.follw2();

Dubai.randomNUM(),
Dubai.cookieC(),
Dubai.result.push(Dubai.cookieC());
// Dubai.follw();
Dubai.follw2();

paris.randomNUM(),
paris.cookieC(),
paris.result.push(paris.cookieC());
// paris.follw();
paris.follw2();


lima.randomNUM(),
lima.cookieC(),
lima.result.push(lima.cookieC());
// lima.follw();
lima.follw2();


footertot();
console.log(cookeshour1);
function generateRandomcustomer(max1, min1){
  var generatedCustomer = Math.floor((Math.random()*(max1-min1))+min1);
  return generatedCustomer;
}
function headerdetail() {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var table = document.createElement('table');
  table.setAttribute('width', '100%');
  var tr = document.createElement('tr');
  var th1  = document.createElement('th');
  tr.appendChild(th1);
  for (let index1 = 0; index1 < workHours.length; index1++) {
    var th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = workHours[index1];


  }
  var th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily Location Total';
  table.appendChild(tr);
  article.appendChild(table);


}
function footertot() {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var table3 = document.createElement('table');

  table3.setAttribute('border', '5px','solid','black');
  table3.setAttribute('border-collapse', 'collapse');
  table3.setAttribute('width', '100%');
  var tr6 = document.createElement('tr');
  var td6  = document.createElement('td');
  tr6.appendChild(td6);
  td6.textContent ='totle' ;
  for (let index1 =0; index1 < workHours.length; index1++) {
    for (let index = 0; index <placescook.length; index++) {
      placescook[index].randomNUM();
      tot1=tot1+ placescook[index].cookieC();
      cookeshour1.push(placescook[index].cookieC());
      var check=true;
    }
    while (check) {
      var td7 = document.createElement('td');
      tr6.appendChild(td7);
      td7.textContent = cookeshour1[0] + cookeshour1[1] +cookeshour1[2] +cookeshour1[3]+cookeshour1[4] ;

      for(var i= 0; i < cookeshour1.length; i++){
        // eslint-disable-next-line no-undef
        cookeshour1.pop(i);
      }
      check=false;
    }

    // var td7 = document.createElement('td');
    // tr6.apendchild(td7);
    // td7.textContent = cookeshour1[0] + cookeshour1[1] +cookeshour1[2] +cookeshour1[3] ;
    tot2=tot2+tot1;
  }

  var td8  = document.createElement('td');
  tr6.appendChild(td8);
  td8.textContent =tot2 ;
  table3.appendChild(tr6);
  article.appendChild(table3);

}
console.log(cookeshour1);
