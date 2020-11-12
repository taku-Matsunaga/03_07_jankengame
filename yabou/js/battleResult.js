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
let startJudge = 0;
let checkPlace = 0

function checkPrefecture() {
  let checkPlaceData = JSON.stringify(checkPlace);
  localStorage.setItem('checkPlace', checkPlaceData);
}


if (localStorage.getItem('startCheck')) {
  let startGetData = localStorage.getItem('startCheck');
  startJudge = JSON.parse(startGetData);
}
if (localStorage.getItem('checkPlace')) {
  let checkGetData = localStorage.getItem('checkPlace');
  checkPlace = JSON.parse(checkGetData);
}

let refWin = ref.match(/win/);
let refLose = ref.match(/lose/);
let refDraw = ref.match(/draw/);

console.log(ref);
console.log(refWin);
console.log(refLose);
console.log(refDraw);
console.log(startJudge);

// let placeData = [
//   { name: 'kyushu', securePlace : 1, resultData: 1, checkPlace: 0},
//   { name: 'osaka', securePlace : 1, resultData: 1, checkPlace: 0},
//   { name: 'odawara', securePlace : 0, resultData: 0, checkPlace: 0},
//   { name: 'edo', securePlace : 0, resultData: 0, checkPlace: 0},
//   {counting: 0},
// ];

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

if (startJudge > 0) {
  let jsonGetData = localStorage.getItem('bigData');
  placeData = JSON.parse(jsonGetData);
  console.log('counting > 0');

  // checkPlace[0].before = 0;
  // checkPlace[1].before = 0;
  // checkPlace[2].before = 0;
  // checkPlace[3].before = 0;

  // console.log(placeData);

  // function jumpToKyushu(){
  //   document.getElementById('jumpKyushu').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[0].checkPlace = 1;
  //   }
  // };
  // function jumpToOsaka(){
  //   document.getElementById('jumpOsaka').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[1].checkPlace = 1;
  //   }
  // };
  // function jumpToOdawara(){
  //   document.getElementById('jumpOdawara').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[2].checkPlace = 1;
  //   }
  // };
  // function jumpToEdo(){
  //   document.getElementById('jumpEdo').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[3].checkPlace = 1;
  //   }
  // };

  // if(placeData[0].securePlace == 0){
  //   jumpToKyushu();
  // };
  // if(placeData[1].securePlace == 0){
  //   jumpToOsaka();
  // };
  // if(placeData[2].securePlace == 0){
  //   jumpToOdawara();
  // };
  // if(placeData[3].securePlace == 0){
  //   jumpToEdo();
  // };

  if (refWin) {

    if (checkPlace[1].prefecture > 0 && refWin[0] == "win" && checkPlace[1].before > 0) {
      document.getElementById('osaka').style.backgroundColor = 'blue';
      checkPlace[1].before = 0;
      placeData[1].securePlace = 1;
      checkPrefecture();
    };
    if (checkPlace[2].prefecture > 0 && refWin[0] == "win" && checkPlace[2].before == 1) {
      document.getElementById('odawara').style.backgroundColor = 'blue';
      checkPlace[2].before = 0;
      placeData[2].securePlace = 1;
      checkPrefecture();
    };
    if (checkPlace[3].prefecture > 0 && refWin[0] == "win" && checkPlace[3].before == 1) {
      document.getElementById('edo').style.backgroundColor = 'blue';
      checkPlace[3].before = 0;
      placeData[3].securePlace = 1;
      checkPrefecture();
    };
  };

  if (refLose) {

    if (checkPlace[0].prefecture > 0 && refLose[0] == "lose" && checkPlace[0].before == 1) {
      document.getElementById('kyushu').style.backgroundColor = 'red';
      checkPlace[0].before = 0;
      checkPlace[0].prefecture = 0;
      checkPrefecture();
    };
    if (checkPlace[1].prefecture > 0 && refLose[0] == "lose" && checkPlace[1].before == 1) {
      document.getElementById('osaka').style.backgroundColor = 'red';
      checkPlace[1].before = 0;
      checkPlace[1].prefecture = 0;
      checkPrefecture();
    };
    if (checkPlace[2].prefecture > 0 && refLose[0] == "lose" && checkPlace[2].before == 1) {
      document.getElementById('odawara').style.backgroundColor = 'red';
      checkPlace[2].before = 0;
      checkPlace[2].prefecture = 0;
      checkPrefecture();
    };
    if (checkPlace[3].prefecture > 0 && refLose[0] == "lose" && checkPlace[3].before == 1) {
      document.getElementById('edo').style.backgroundColor = 'red';
      checkPlace[3].before = 0;
      checkPlace[3].prefecture = 0;
      checkPrefecture();
    };
  };

  if (refDraw) {

    if (checkPlace[0].prefecture > 0 && refDraw[0] == "draw" && checkPlace[0].before == 1) {
      document.getElementById('kyushu').style.backgroundColor = 'red';
      checkPlace[0].before = 0;
      checkPlace[0].prefecture = 0;
      checkPrefecture();
    };
    if (checkPlace[1].prefecture > 0 && refDraw[0] == "draw" && checkPlace[1].before == 1) {
      document.getElementById('osaka').style.backgroundColor = 'red';
      checkPlace[1].before = 0;
      checkPlace[1].prefecture = 0;
      checkPrefecture();
    };
    if (checkPlace[2].prefecture > 0 && refDraw[0] == "draw" && checkPlace[2].before == 1) {
      document.getElementById('odawara').style.backgroundColor = 'red';
      checkPlace[2].before = 0;
      checkPlace[2].prefecture = 0;
      checkPrefecture();
    };
    if (checkPlace[3].prefecture > 0 && refDraw[0] == "draw" && checkPlace[3].before == 1) {
      document.getElementById('edo').style.backgroundColor = 'red';
      checkPlace[3].before = 0;
      checkPlace[3].prefecture = 0;
      checkPrefecture();
    };
  };

  // if (checkPlace[0].prefecture == 1 && checkPlace[1].prefecture == 1 && checkPlace[2].prefecture == 1 && checkPlace[3].prefecture == 1) {
  //   window.onload = function () {
  //     localStorage.clear();
  //     setTimeout(location.href = "/yabou/complete.html", 5000);
  //   }
  // };

  document.getElementById('jumpKyushu').onclick = function () {
    if (placeData[0].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[0].before = 1;
      checkPlace[0].prefecture = 1;
      checkPrefecture();
    };
  };
  document.getElementById('jumpOsaka').onclick = function () {
    if (placeData[1].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[1].before = 1;
      checkPlace[1].prefecture = 1;
      checkPrefecture();
    };
  };
  document.getElementById('jumpOdawara').onclick = function () {
    if (placeData[2].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[2].before = 1;
      checkPlace[2].prefecture = 1;
      checkPrefecture();
    };
  };
  document.getElementById('jumpEdo').onclick = function () {
    if (placeData[3].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[3].before = 1;
      checkPlace[3].prefecture = 1;
      checkPrefecture();
    };
  };

  placeData[4].counting = placeData[4].counting + 1;
  console.log(placeData);
  let jsonData = JSON.stringify(placeData);
  localStorage.setItem('bigData', jsonData);
  let startData = JSON.stringify(startJudge);
  localStorage.setItem('startCheck', startData);


}

// if(placeData[4].counting == 0){
if (startJudge == 0) {

  function checkPrefecture() {
    let checkPlaceData = JSON.stringify(checkPlace);
    localStorage.setItem('checkPlace', checkPlaceData);
  }

  let placeData = [{
      name: 'kyushu',
      securePlace: 1,
      resultData: 1,
    },
    {
      name: 'osaka',
      securePlace: 0,
      resultData: 0,
    },
    {
      name: 'odawara',
      securePlace: 0,
      resultData: 0,
    },
    {
      name: 'edo',
      securePlace: 0,
      resultData: 0,
    },
    {
      counting: 0
    },
  ];

  let checkPlace = [{
      name: 'kyushu',
      prefecture: 1,
      before: 0
    },
    {
      name: 'osaka',
      prefecture: 0,
      before: 0
    },
    {
      name: 'odawara',
      prefecture: 0,
      before: 0
    },
    {
      name: 'edo',
      prefecture: 0,
      before: 0
    },
    {
      counting: 0
    },
  ];

  // let jsonGetData = localStorage.getItem('bigData');
  // placeData = JSON.parse(jsonGetData);
  startJudge = 1;
  console.log('counting == 0');

  // console.log(placeData);


  // function jumpToKyushu(){
  //   document.getElementById('jumpKyushu').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[0].checkPlace = 1;
  //   }
  // };
  // function jumpToOsaka(){
  //   document.getElementById('jumpOsaka').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[1].checkPlace = 1;
  //   }
  // };
  // function jumpToOdawara(){
  //   document.getElementById('jumpOdawara').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[2].checkPlace = 1;
  //   }
  // };
  // function jumpToEdo(){
  //   document.getElementById('jumpEdo').onclick = function(){
  //     location.href="/yabou/index.html";
  //     placeData[3].checkPlace = 1;
  //   }
  // };

  // if(placeData[0].securePlace == 0){
  //   jumpToKyushu();
  // };
  // if(placeData[1].securePlace == 0){
  //   jumpToOsaka();
  // };
  // if(placeData[2].securePlace == 0){
  //   jumpToOdawara();
  // };
  // if(placeData[3].securePlace == 0){
  //   jumpToEdo();
  // };

  document.getElementById('jumpKyushu').onclick = function () {
    if (placeData[0].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[0].prefecture = 1;
      checkPlace[0].before = 1;
      checkPrefecture();
    };
  };
  document.getElementById('jumpOsaka').onclick = function () {
    if (placeData[1].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[1].prefecture = 1;
      checkPlace[1].before = 1;
      checkPrefecture();
    };
  };
  document.getElementById('jumpOdawara').onclick = function () {
    if (placeData[2].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[2].prefecture = 1;
      checkPlace[2].before = 1;
      checkPrefecture();
    };
  };
  document.getElementById('jumpEdo').onclick = function () {
    if (placeData[3].securePlace == 0) {
      location.href = "/yabou/index.html";
      checkPlace[3].prefecture = 1;
      checkPlace[3].before = 1;
      checkPrefecture();
    };
  };



  // if (checkPlace[1].prefecture > 0 && ref == "http://127.0.0.1:5500/yabou/win.html") {
  //   document.getElementById('osaka').style.backgroundColor = 'blue';
  //   checkPlace[1].prefecture = 0;
  // } else if (checkPlace[2].prefecture > 0 && ref == "http://127.0.0.1:5500/yabou/win.html") {
  //   document.getElementById('odawara').style.backgroundColor = 'blue';
  //   checkPlace[2].prefecture = 0;
  // } else if (checkPlace[3].prefecture > 0 && ref == "http://127.0.0.1:5500/yabou/win.html") {
  //   document.getElementById('edo').style.backgroundColor = 'blue';
  //   checkPlace[3].prefecture = 0;
  // }


  placeData[4].counting = placeData[4].counting + 1;
  let jsonData = JSON.stringify(placeData);
  localStorage.setItem('bigData', jsonData);
  let startData = JSON.stringify(startJudge);
  localStorage.setItem('startCheck', startData);

  console.log(ref);
  console.log(jsonData);
}

// 領地の色分け

if (placeData[0].securePlace == 1) {
  document.getElementById('kyushu').style.backgroundColor = 'blue';
} else {
  document.getElementById('kyushu').style.backgroundColor = 'red';
}

if (placeData[1].securePlace == 1) {
  document.getElementById('osaka').style.backgroundColor = 'blue';
} else {
  document.getElementById('osaka').style.backgroundColor = 'red';
}

if (placeData[2].securePlace == 1) {
  document.getElementById('odawara').style.backgroundColor = 'blue';
} else {
  document.getElementById('odawara').style.backgroundColor = 'red';
}

if (placeData[3].securePlace == 1) {
  document.getElementById('edo').style.backgroundColor = 'blue';
} else {
  document.getElementById('edo').style.backgroundColor = 'red';
}