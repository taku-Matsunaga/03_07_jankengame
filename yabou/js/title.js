'use strict';
// import {fadeIn, fadeOut} from './fade.js';

let timeCount = 0;

let addBlur = function(){
  document.getElementById('blurPoint').classList.add('blur');
}

setTimeout(addBlur, 5000);

let addImg = function(){
  document.getElementById('matsunagaImg').classList.add('matsunaga');
  document.getElementById('matsunagaImg').insertAdjacentHTML('afterbegin', "<img src='/yabou/img/matsunaga.jpg' alt=''>");
}

setTimeout(addImg, 7000);

let addTitle = function(){
  document.getElementById('matsunagaTitle').classList.add('titleMatsunaga');
  document.getElementById('matsunagaTitle').insertAdjacentHTML('afterbegin', "<div class='titleYabou'>松永の野望</div><div class='titleBtn'><a href='/yabou/japan.html'>Play</a></div>");
}

setTimeout(addTitle, 7000)

// $(function(){
//   setTimeout(function(){
//   $('.backSection').add(document.getElementById('blurPoint')).addClass('blur');
//   },3000)
// });