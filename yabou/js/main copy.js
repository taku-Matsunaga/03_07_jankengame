// じゃんけん判定

const results = ['グー','チョキ','パー'];
let  first1 = 0;

function win(){
  // if(document.getElementById('judgement').textContent == '勝ち'){
    document.getElementById('first1_blue').style.display = 'none';
    document.getElementById('enemy_first1').setAttribute('src', 'img/blue.png');
    document.getElementById('first1_choiceList').style.display = 'none';
  // }
}

function lose(){
  document.getElementById('first1_red').style.display = 'none';
  document.getElementById('myteam_first1').setAttribute('src', 'img/red.png');
  document.getElementById('first1_choiceList').style.display = 'none';
}

function first1True(){
  first1 = 1;
}

function dnfirst1(){
  document.getElementById('first1_choiceList').style.display = 'none';
  document.getElementById('first2_choiceList').style.display = 'block';
}


function battleGu(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand').innerHTML = 'コンピュータの手:' + results[rand];
  if(rand == 0){
    document.getElementById('judgement').innerHTML = '引き分け';
  }else if(rand == 1){
    document.getElementById('judgement').innerHTML = '勝ち';
    win();  
    dnfirst1();
  }else{
    document.getElementById('judgement').innerHTML = '負け';
    lose();
    dnfirst1();
  }

};

function battleCho(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand').innerHTML = 'コンピュータの手:' + results[rand];
  if(rand == 0){
    document.getElementById('judgement').innerHTML = '負け';
    lose();
    dnfirst1();
  }else if(rand == 1){
    document.getElementById('judgement').innerHTML = '引き分け';
  }else{
    document.getElementById('judgement').innerHTML = '勝ち';
    win();
    dnfirst1();
  }
};

function battlePar(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand').innerHTML = ('コンピュータの手:' + results[rand]);
  if(rand == 0){
    document.getElementById('judgement').innerHTML = '勝ち';
    win();
    dnfirst1();
  }else if(rand == 1){
    document.getElementById('judgement').innerHTML = '負け';
    lose();
    dnfirst1();
  }else{
    document.getElementById('judgement').innerHTML = '引き分け';
  }
};

// document.getElementById('gu_btn').addEventListener('click', battleGu, false);
// document.getElementById('cho_btn').addEventListener('click', battleCho, false);
// document.getElementById('par_btn').addEventListener('click', battlePar, false);
document.getElementById('gu_btn').onclick = function (){
  battleGu();
  first1True();
}
document.getElementById('cho_btn').onclick = function(){
  battleCho();
  first1True();
}
document.getElementById('par_btn').onclick = function(){
  battlePar();
  first1True();
}


// first2

// じゃんけん判定

const results2 = ['グー','チョキ','パー'];
let first2 = 0;

function win2(){
  // if(document.getElementById('judgement').textContent == '勝ち'){
    document.getElementById('first2_blue').style.display = 'none';
    document.getElementById('enemy_first2').setAttribute('src', 'img/blue.png');
    document.getElementById('first2_choiceList').style.display = 'none';
  // }
}

function lose2(){
  document.getElementById('first2_red').style.display = 'none';
  document.getElementById('myteam_first2').setAttribute('src', 'img/red.png');
  document.getElementById('first2_choiceList').style.display = 'none';
}

function first2True(){
  first2 = 1;
}

function dnfirst2(){
  document.getElementById('first2_choiceList').style.display = 'none';
  document.getElementById('first3_choiceList').style.display = 'block';
}


function battleGu2(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand2').innerHTML = 'コンピュータの手:' + results2[rand];
  if(rand == 0){
    document.getElementById('judgement2').innerHTML = '引き分け';
  }else if(rand == 1){
    document.getElementById('judgement2').innerHTML = '勝ち';
    win2();
    dnfirst2();  
  }else{
    document.getElementById('judgement2').innerHTML = '負け';
    lose2();
    dnfirst2();
  }

};

function battleCho2(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand2').innerHTML = 'コンピュータの手:' + results[rand];
  if(rand == 0){
    document.getElementById('judgement2').innerHTML = '負け';
    lose2();
    dnfirst2();
  }else if(rand == 1){
    document.getElementById('judgement2').innerHTML = '引き分け';
  }else{
    document.getElementById('judgement2').innerHTML = '勝ち';
    win2();
    dnfirst2();
  }
};

function battlePar2(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand2').innerHTML = ('コンピュータの手:' + results[rand]);
  if(rand == 0){
    document.getElementById('judgement2').innerHTML = '勝ち';
    win2();
    dnfirst2();
  }else if(rand == 1){
    document.getElementById('judgement2').innerHTML = '負け';
    lose2();
    dnfirst2();
  }else{
    document.getElementById('judgement2').innerHTML = '引き分け';
  }
};

document.getElementById('gu_btn2').onclick = function (){
  battleGu2();
  first2True();
}
document.getElementById('cho_btn2').onclick = function(){
  battleCho2();
  first2True();
}
document.getElementById('par_btn2').onclick = function(){
  battlePar2();
  first2True();
}


// first3

// じゃんけん判定

const results3 = ['グー','チョキ','パー'];
let first3 = 0;

function win3(){
  // if(document.getElementById('judgement').textContent == '勝ち'){
    document.getElementById('first3_blue').style.display = 'none';
    document.getElementById('enemy_first3').setAttribute('src', 'img/blue.png');
    document.getElementById('first3_choiceList').style.display = 'none';
  // }
}

function lose3(){
  document.getElementById('first3_red').style.display = 'none';
  document.getElementById('myteam_first3').setAttribute('src', 'img/red.png');
  document.getElementById('first3_choiceList').style.display = 'none';
}

function first3True(){
  first3 = 1;
}

function dnfirst3(){
  document.getElementById('first3_choiceList').style.display = 'none';
  document.getElementById('first1_choiceList').style.display = 'block';
}


function battleGu3(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand3').innerHTML = 'コンピュータの手:' + results2[rand];
  if(rand == 0){
    document.getElementById('judgement3').innerHTML = '引き分け';
  }else if(rand == 1){
    document.getElementById('judgement3').innerHTML = '勝ち';
    win3();  
    dnfirst3();
  }else{
    document.getElementById('judgement3').innerHTML = '負け';
    lose3();
    dnfirst3();
  }

};

function battleCho3(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand3').innerHTML = 'コンピュータの手:' + results[rand];
  if(rand == 0){
    document.getElementById('judgement3').innerHTML = '負け';
    lose3();
    dnfirst3();
  }else if(rand == 1){
    document.getElementById('judgement3').innerHTML = '引き分け';
  }else{
    document.getElementById('judgement3').innerHTML = '勝ち';
    win3();
    dnfirst3();
  }
};

function battlePar3(){
  let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

  document.getElementById('com_hand3').innerHTML = ('コンピュータの手:' + results[rand]);
  if(rand == 0){
    document.getElementById('judgement3').innerHTML = '勝ち';
    win3();
    dnfirst3();
  }else if(rand == 1){
    document.getElementById('judgement3').innerHTML = '負け';
    lose3();
    dnfirst3();
  }else{
    document.getElementById('judgement3').innerHTML = '引き分け';
  }
};

document.getElementById('gu_btn3').onclick = function (){
  battleGu3();
  first3True();
  if(document.getElementById('judgement3').textContent !== '引き分け'){
    secondStage();
  }
}
document.getElementById('cho_btn3').onclick = function(){
  battleCho3();
  first3True();
  if(document.getElementById('judgement3').textContent !== '引き分け'){
    secondStage();
  }
}
document.getElementById('par_btn3').onclick = function(){
  battlePar3();
  first3True();
  if(document.getElementById('judgement3').textContent !== '引き分け'){
    secondStage();
  }
}

// 2列目

function secondStage(){
  function resetText(){
    document.getElementById('com_hand').innerHTML = 'コンピュータの出した手は？';
    document.getElementById('judgement').innerHTML = '結果は？';
  }
  function resetText2(){
    document.getElementById('com_hand2').innerHTML = 'コンピュータの出した手は？';
    document.getElementById('judgement2').innerHTML = '結果は？';
  }
  function resetText3(){
    document.getElementById('com_hand3').innerHTML = 'コンピュータの出した手は？';
    document.getElementById('judgement3').innerHTML = '結果は？';
  }

  if(first1 == first2 && first2 == first3 && first1 == first3){
    // 左
    first1 = 0;
    first2 = 0;
    first3 = 0;

    if(document.getElementById('judgement').textContent == '勝ち'){
      document.getElementById('first1').insertAdjacentHTML('afterbegin', '<div class="textBox_container_list" id="second1_red"><img src="img/red.png" alt=""></div>');
      resetText();
    }else if(document.getElementById('judgement').textContent == '負け'){
      // const insertItem = '<div class="textBox_container_list" id="first2_blue"><img src="img/blue.png" alt=""></div>'
      const myTeam2 = document.createElement('div');
      // const myTeamImg = document.createTextNode('<img src="img/blue.png" alt="">');
      // myTeam2.appendChild(myTeamImg);
      myTeam2.setAttribute('id', 'second1_blue');
      const getChild = document.getElementById('first1_blue');
      document.getElementById('first1').insertBefore(myTeam2, getChild.nextSibling); 
      const img = document.createElement('img');
      img.src = 'img/blue.png';
      document.getElementById('second1_blue').appendChild(img);
      resetText();

    }else{
      console.log('error');
    }

    // 真ん中

    if(document.getElementById('judgement2').textContent == '勝ち'){
      document.getElementById('first2').insertAdjacentHTML('afterbegin', '<div class="textBox_container_list" id="second2_red"><img src="img/red.png" alt=""></div>');
      resetText2();
    }else if(document.getElementById('judgement2').textContent == '負け'){
      // const insertItem = '<div class="textBox_container_list" id="first2_blue"><img src="img/blue.png" alt=""></div>'
      const myTeam2_2 = document.createElement('div');
      // const myTeamImg = document.createTextNode('<img src="img/blue.png" alt="">');
      // myTeam2.appendChild(myTeamImg);
      myTeam2_2.setAttribute('id', 'second2_blue');
      const getChild = document.getElementById('first2_blue');
      document.getElementById('first2').insertBefore(myTeam2_2, getChild.nextSibling); 
      const img = document.createElement('img');
      img.src = 'img/blue.png';
      document.getElementById('second2_blue').appendChild(img);
      resetText2();
    }else{
      console.log('error');
    }

    // 右

    if(document.getElementById('judgement3').textContent == '勝ち'){
      document.getElementById('first3').insertAdjacentHTML('afterbegin', '<div class="textBox_container_list" id="second3_red"><img src="img/red.png" alt=""></div>');
      resetText3();
    }else if(document.getElementById('judgement3').textContent == '負け'){
      // const insertItem = '<div class="textBox_container_list" id="first2_blue"><img src="img/blue.png" alt=""></div>'
      const myTeam2_3 = document.createElement('div');
      // const myTeamImg = document.createTextNode('<img src="img/blue.png" alt="">');
      // myTeam2.appendChild(myTeamImg);
      myTeam2_3.setAttribute('id', 'second3_blue');
      const getChild = document.getElementById('first3_blue');
      document.getElementById('first3').insertBefore(myTeam2_3, getChild.nextSibling); 
      const img = document.createElement('img');
      img.src = 'img/blue.png';
      document.getElementById('second3_blue').appendChild(img);
      resetText3();
    }else{
      console.log('error');
    }
  }

}


