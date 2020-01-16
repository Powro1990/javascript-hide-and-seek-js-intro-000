function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}
console.log(document.querySelector('#grand-node div div div div'))

function deepestChild(){
  var doku = {};
  doku = document.getElementById('grand-node').querySelector('div');
  return doku
}