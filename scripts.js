'use strict';
var tot;
var tot1;
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

}

Room.prototype.cookieC= function () {
  return Math.ceil (this.customers*this.avgCookie);
};
Room.prototype.follw= function() {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (let index = 0; index < this.result.length; index++) {
    var li = document.createElement('li');
    li.textContent = this.result[index];
    ul.appendChild(li);
  }

};
Room.prototype.follw2= function () {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var tot=0;
  var table1 = document.createElement('table');
  table1.setAttribute('border', '1');
  var tr1 = document.createElement('tr');
  var td1=  document.createElement('td');
  tr1.append(td1);
  td1.textContent = this.header;
  for (let index1 =1; index1 < 15; index1++) {
    var td2 = document.createElement('td');
    this.randomNUM(),
    tr1.append(td2);
    td2.textContent =this.cookieC();
    tot= tot + this.cookieC();


  }
  
  var td3 = document.createElement('td');
  tr1.append(td3);
  td3.textContent =tot;
  table1.appendChild(tr1);
  article.appendChild(table1);

};

Room.prototype.randomNUM= function () {
  this.customers= generateRandomcustomer(this. max,this.min);

};
var Seattle= new Room(23,65,6.3,10,0,[],'Seattle');
var Tokyo= new Room(3,24,1.2,10,0,[],'Tokyo');
var paris= new Room(20,38,2.3,10,0,[] ,'paris');
var Dubai= new Room(11,38,3.7,10,0,[],'Dubai');
var lima= new Room(2,16,4.6,10,0,[] ,'lima');



headerdetail();
Seattle.randomNUM();
Seattle.cookieC();
Seattle.result.push(Seattle.cookieC());
Seattle.follw();
Seattle.follw2();

Tokyo.randomNUM(),
Tokyo.cookieC(),
Tokyo.result.push(Tokyo.cookieC());
Tokyo.follw();
Tokyo.follw2();

Dubai.randomNUM(),
Dubai.cookieC(),
Dubai.result.push(Dubai.cookieC());
Dubai.follw();
Dubai.follw2();

paris.randomNUM(),
paris.cookieC(),
paris.result.push(paris.cookieC());
paris.follw2();
paris.follw();

lima.randomNUM(),
lima.cookieC(),
lima.result.push(lima.cookieC());
lima.follw();
lima.follw2();


// footertot(lima.follw2());
function generateRandomcustomer(max1, min1){
  var generatedCustomer = Math.floor((Math.random()*(max1-min1))+min1);
  return generatedCustomer;
}
function headerdetail() {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var th1  = document.createElement('th');
  tr.append(th1);
  th1.textContent = 0;
  for (let index1 = 6; index1 < 20; index1++) {
    var th2 = document.createElement('th');
    tr.append(th2);
    th2.textContent = index1+' am ';


  }
  var th3 = document.createElement('th');
  tr.append(th3);
  th3.textContent = 'totle';
  table.appendChild(tr);
  article.appendChild(table);


}
function footertot() {
  var parentElement = document.getElementById('cookielist');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var table3 = document.createElement('table');
  var tr6 = document.createElement('tr');
  var td6  = document.createElement('td');
  tr6.append(td6);
  td6.textContent ='totle' ;
  for (let index1 =1; index1 < 15; index1++) {
    var td7  = document.createElement('td');
    td7.textContent =totr;
    tr6.append(td7);
  
  }

  var td8  = document.createElement('td');
  tr6.append(td8);
  td8.textContent =tot1 ;
  table3.appendChild(tr6);
  article.appendChild(table3);

}
