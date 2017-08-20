var elems = [],
    container = document.querySelector('.backgroundtexture'),
    items;

function generate (rounds) {
  var rnds = rounds;
  while (rnds > 0) {
    var div = document.createElement('div');
    div.classList.add('crossline');
    container.appendChild(div);
    elems.push(div);
    --rnds;
  }
  items = elems.length - 1;
  addClass();
}

function addClass () {
//    for(i=0;i<items;i++){
        elems[items].classList.add('crossanim');
//    }
    
    setTimeout(function () {
      --items;
      addClass();
    }, 100);
}

generate(60);