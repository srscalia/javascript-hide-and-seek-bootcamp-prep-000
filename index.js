function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');
  for (let i=0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML)+n;
  }
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node');
  let nextNode = grandNode.children[0];
  while (nextNode) {
    let grandNode = nextNode;
    let nextNode = grandNode.children[0];
  }
  return grandNode;
}
