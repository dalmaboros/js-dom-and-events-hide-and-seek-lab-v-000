function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
};

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  };
};

function deepestChild() {
  let outerDiv = document.getElementById('grand-node');
  let innerDiv = outerDiv.children[0];

  while (innerDiv) {
    outerDiv = innerDiv;
    innerDiv = outerDiv.children[0];
  };

  return outerDiv;
};
