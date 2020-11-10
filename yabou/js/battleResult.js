// let kyushu = 1;
// let osaka = 1;
// let odawara = 0;
// let edo = 0;
// let ref = document.referrer;

// if( ref == 'yabou/win.html'){

//   if(kyushu == 1 && osaka == 1 && odawara == 0 && edo == 0){
//     document.getElementById('odawara').style.backgroundColor = 'blue';
//     odawara = 1;
//     setTimeout(location.href="/yabou/index.html", 3000);
//   }
//   if(kyushu == 1 && osaka == 1 && odawara == 1 && edo == 0){
//     document.getElementById('edo').style.backgroundColor = 'blue';
//     edo = 1;
//   }
//   if(kyushu == 1 && osaka == 0 && odawara == 0 && edo == 0){
//     document.getElementById('osaka').style.backgroundColor = 'blue';
//     osaka = 1;
//     setTimeout(location.href="/yabou/index.html", 3000);
//   }

// }else{
//   if(kyushu == 1 && osaka == 1 && odawara == 0 && edo == 0){
//     document.getElementById('osaka').style.backgroundColor = 'red';
//     osaka = 0;
//     setTimeout(location.href="/yabou/index.html", 3000);
//   }
//   if(kyushu == 1 && osaka == 1 && odawara == 1 && edo == 0){
//     document.getElementById('odawara').style.backgroundColor = 'red';
//     odawara = 0;
//     setTimeout(location.href="/yabou/index.html", 3000);
//   }
//   if(kyushu == 1 && osaka == 0 && odawara == 0 && edo == 0){
//     document.getElementById('kyushu').style.backgroundColor = 'red';
//     kyushu = 0;
//   }
// }

// setTimeout(location.href="/yabou/index.html", 5000);


let ref = document.referrer;

let placeData = [
  { name: 'kyushu', securePlace : 1, resultData: 1, checkPlace: 0},
  { name: 'osaka', securePlace : 1, resultData: 1, checkPlace: 0},
  { name: 'odawara', securePlace : 0, resultData: 0, checkPlace: 0},
  { name: 'edo', securePlace : 0, resultData: 0, checkPlace: 0},
  {counting: 0},
];

// let resultData = [
//   { kyushu : 1},
//   { osaka : 1},
//   { odawara : 0},
//   { edo : 0},
// ];

// let checkPlace = [
//   { kyushu : 0},
//   { osaka : 0},
//   { odawara : 0},
//   { edo : 0},
// ];

if(placeData[4].counting > 0){
  let jsonGetData = localStorage.getItem('bigData');
  placeData = JSON.parse(jsonGetData);
}
// console.log(placeData);


function jumpToKyushu(){
  document.getElementById('jumpKyushu').onclick = function(){
    location.href="/yabou/index.html";
    placeData[0].checkPlace = 1;
  }
};
function jumpToOsaka(){
  document.getElementById('jumpOsaka').onclick = function(){
    location.href="/yabou/index.html";
    placeData[1].checkPlace = 1;
  }
};
function jumpToOdawara(){
  document.getElementById('jumpOdawara').onclick = function(){
    location.href="/yabou/index.html";
    placeData[2].checkPlace = 1;
  }
};
function jumpToEdo(){
  document.getElementById('jumpEdo').onclick = function(){
    location.href="/yabou/index.html";
    placeData[3].checkPlace = 1;
  }
};

if(placeData[0].securePlace == 0){
  jumpToKyushu();
};
if(placeData[1].securePlace == 0){
  jumpToOsaka();
};
if(placeData[2].securePlace == 0){
  jumpToOdawara();
};
if(placeData[3].securePlace == 0){
  jumpToEdo();
};

if(placeData[1].checkPlace > 0 && ref == "http://127.0.0.1:5500/yabou/win.html"){
  document.getElementById('osaka').style.backgroundColor = 'blue';
  placeData[1].checkPlace = 0;
}else if(placeData[2].checkPlace > 0 && ref == "http://127.0.0.1:5500/yabou/win.html"){
  document.getElementById('odawara').style.backgroundColor = 'blue';
  placeData[2].checkPlace = 0;
}else if(placeData[3].checkPlace > 0 && ref == "http://127.0.0.1:5500/yabou/win.html"){
  document.getElementById('edo').style.backgroundColor = 'blue';
  placeData[3].checkPlace = 0;
}

console.log(placeData);
let jsonData = JSON.stringify(placeData);
localStorage.setItem('bigData', jsonData);
placeData[4].counting = placeData[4].counting + 1;

console.log(ref);
console.log(jsonData);