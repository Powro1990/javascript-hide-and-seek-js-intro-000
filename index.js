function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function deepestChild(){
  var doku = document.getElementById('grand-node').querySelectorAll('div');
  var test;
  return
}

function increaseRankBy(n){
  var list = document.querySelectorAll('ul.ranked-list li');
 for(var i = 0; i < list.length; i++){
   list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n);
 }
}