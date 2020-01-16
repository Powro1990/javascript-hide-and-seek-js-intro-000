function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function deepestChild(){
  var doku = document.getElementById('grand-node').querySelectorAll('div');
  return doku[doku.length-1];
}

function increaseRankBy(n){
  var list = document.getElementById('app').querySelector("ul.ranked-list");
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (praseInt(list[i].innerHTML)+ n)
  }
}