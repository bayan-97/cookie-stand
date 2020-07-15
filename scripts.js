'use strict';
var Seattle={
  min:23,
  max:65,
  avgCookie:6.3,
  customers:10
  ,sum:0,
  cookieC: function () {
    return Math.ceil (this.customers*this.avgCookie);

  },
  result:[],

  follw: function () {
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

  }, follw2: function () {
    var parentElement = document.getElementById('cookielist');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h3=document.createElement('h3');
    article.appendChild(h3);
    h3.textContent='seattle';
    var ul = document.createElement('ul');
    article.appendChild(ul);
    var tot=0;
    for (let index = 0; index < 1; index++) {
      for (let index1 = 6; index1 < 13; index1++) {
        var li = document.createElement('li');
        Seattle.bayan(),
        li.textContent= index1+' am '+ Seattle.cookieC();

        tot= tot + Seattle.cookieC();
        ul.appendChild(li);
      }for (let index2 = 0; index2 < 1; index2++) {
        for (let i1 = 1; i1 < 9; i1++) {

          li = document.createElement('li');
          Seattle.bayan(),
          li.textContent=i1+' am '+ Seattle.cookieC();
          tot= tot + Seattle.cookieC();
          ul.appendChild(li);
        }
      }
      li.textContent= 'totle'+ tot;
      ul.appendChild(li);
    }
  }
  ,
  bayan: function() {
    Seattle.customers= generateRandomcustomer(Seattle.max, Seattle.min);

  }


};

var Tokyo={
  min:3,
  max:24,
  avgCookie:1.2,
  customers:10
  ,
  cookieC: function () {
    return Math.ceil (this.customers*this.avgCookie);

  },
  result:[],

  follw: function () {
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

  }, follw2: function () {
    var parentElement = document.getElementById('cookielist');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h3=document.createElement('h3');
    article.appendChild(h3);
    h3.textContent='tokyo';
    var ul = document.createElement('ul');
    article.appendChild(ul);
    var tot=0;
    for (let index = 0; index < 1; index++) {
      for (let index1 = 6; index1 < 13; index1++) {
        var li = document.createElement('li');
        Tokyo.bayan(),
        li.textContent= index1+' am '+ Tokyo.cookieC();

        tot= tot + Tokyo.cookieC();
        ul.appendChild(li);
      }for (let index2 = 0; index2 < 1; index2++) {
        for (let i1 = 1; i1 < 9; i1++) {
          li = document.createElement('li');
          Tokyo.bayan(),
          li.textContent=i1+' am '+ Tokyo.cookieC();
          tot= tot +Tokyo.cookieC();
          ul.appendChild(li);
        }
      }
      li.textContent= ' totale'+ tot;
      ul.appendChild(li);

    }} ,
  bayan: function() {
    Tokyo.customers= generateRandomcustomer(Tokyo.max, Tokyo.min);

  }

};

var paris={
  min:20,
  max:38,
  avgCookie:2.3,
  customers:10
  ,
  cookieC: function () {
    return Math.ceil (this.customers*this.avgCookie);
  },
  result:[],

  follw: function () {
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

  }, follw2: function () {
    var parentElement = document.getElementById('cookielist');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h3=document.createElement('h3');
    article.appendChild(h3);
    h3.textContent='paris';
    var ul = document.createElement('ul');
    article.appendChild(ul);
    var tot=0;
    for (let index = 0; index < 1; index++) {
      for (let index1 = 6; index1 < 13; index1++) {
        var li = document.createElement('li');
        paris.bayan(),
        li.textContent= index1+' am '+ paris.cookieC();

        tot= tot + paris.cookieC();
        ul.appendChild(li);
      }
    }
    for (let index2 = 0; index2 < 1; index2++) {
      for (let i1 = 1; i1 < 9; i1++) {
        li = document.createElement('li');
        paris.bayan(),
        li.textContent=i1+' am '+ paris.cookieC();
        tot= tot + paris.cookieC();
        ul.appendChild(li);
      }
    }

    li.textContent= ' totle '+ tot;
    ul.appendChild(li);

  } ,
  bayan: function() {
    paris.customers= generateRandomcustomer(paris.max, paris.min);

  }

};

var lima={
  min:2,
  max:16,
  avgCookie:4.6,
  customers:10
  ,
  cookieC: function () {
    return Math.ceil (this.customers*this.avgCookie);
  },
  result:[],

  follw: function () {
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

  }, follw2: function () {
    var parentElement = document.getElementById('cookielist');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h3=document.createElement('h3');
    article.appendChild(h3);
    h3.textContent='lima';
    var ul = document.createElement('ul');
    article.appendChild(ul);
    var tot=0;
    for (let index = 0; index < 1; index++) {
      for (let index1 = 6; index1 < 13; index1++) {
        var li = document.createElement('li');
        lima.bayan(),
        li.textContent= index1+' am '+ lima.cookieC();

        tot= tot + lima.cookieC();
        ul.appendChild(li);
      }
    }for (let index2 = 0; index2 < 1; index2++) {
      for (let i1 = 1; i1 < 9; i1++) {
        var li = document.createElement('li');
        lima.bayan(),
        li.textContent=i1+' am '+ lima.cookieC();
        tot= tot + lima.cookieC();
        ul.appendChild(li);
      }
      li.textContent= ' totle '+ tot;
      ul.appendChild(li);

    }
  },
  bayan: function() {
    lima.customers= generateRandomcustomer(lima.max, lima.min);

  }

};
var Dubai={
  min:11,
  max:38,
  avgCookie:3.7,
  customers:10
  ,
  cookieC: function () {
    return Math.ceil (this.customers*this.avgCookie);
  },
  result:[],

  follw: function () {
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

  }, follw2: function () {
    var parentElement = document.getElementById('cookielist');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h3=document.createElement('h3');
    article.appendChild(h3);
    h3.textContent='Dubai';
    var ul = document.createElement('ul');
    article.appendChild(ul);
    var tot=0;
    for (let index = 0; index < 1; index++) {
      for (let index1 = 6; index1 < 13; index1++) {
        var li = document.createElement('li');
        Dubai.bayan(),
        li.textContent= index1+' am '+ Dubai.cookieC();

        tot= tot + Dubai.cookieC();
        ul.appendChild(li);
      }
    }
    for (let index2 = 0; index2 < 1; index2++) {
      for (let i1 = 1; i1 < 9; i1++) {
        var li = document.createElement('li');
        Dubai.bayan(),
        li.textContent=i1+ ' am '+ Dubai.cookieC();
        tot= tot + Dubai.cookieC();
        ul.appendChild(li);
      }
      li.textContent= 'totale'+ tot;
      ul.appendChild(li);

    }} ,
  bayan: function() {
    Dubai.customers= generateRandomcustomer(Dubai.max, Dubai.min);

  }

};















Seattle.bayan();
Seattle.cookieC();
Seattle.result.push(Seattle.cookieC());
// Seattle.follw();
Seattle.follw2();

Tokyo.bayan(),
Tokyo.cookieC(),
Tokyo.result.push(Tokyo.cookieC());
// Tokyo.follw();
Tokyo.follw2();

Dubai.bayan(),
Dubai.cookieC(),
Dubai.result.push(Dubai.cookieC());
// Dubai.follw();
Dubai.follw2();

paris.bayan(),
paris.cookieC(),
paris.result.push(paris.cookieC());
// paris.follw();
paris.follw2();

lima.bayan(),
lima.cookieC(),
lima.result.push(lima.cookieC());
// lima.follw();
lima.follw2();

function generateRandomcustomer(max, min){
  var generatedCustomer = Math.floor((Math.random()*(max-min))+min);
  return generatedCustomer;
}
