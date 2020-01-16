function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function deepestChild(){
  var doku = {};
  doku = document.getElementById('grand-node').querySelector('div');
  return doku.length;
}