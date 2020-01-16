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
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
    return parseInt(list[i].innerHTML)
  
}