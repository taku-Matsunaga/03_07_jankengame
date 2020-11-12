  endingCount = 0;

  // じゃんけん判定

  const results = ['グー', 'チョキ', 'パー'];
  let first1 = 0;
  let resultTotal = 0;

  function win() {
    document.getElementById('enemy_first1').style.display = 'none';
    document.getElementById('first1_choiceList').style.display = 'none';
    resultTotal++;
    // }
  }

  function lose() {
    document.getElementById('myteam_first1').style.display = 'none';
    document.getElementById('first1_choiceList').style.display = 'none';
  }

  function first1True() {
    first1 = 1;
  }

  function dnfirst1() {
    document.getElementById('first1_choiceList').style.display = 'none';
    document.getElementById('first2_choiceList').style.display = 'block';
  }


  function battleGu() {
    let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand').innerHTML = 'コンピュータの手:' + results[rand];
    if (rand == 0) {
      document.getElementById('judgement').innerHTML = '引き分け';
    } else if (rand == 1) {
      document.getElementById('judgement').innerHTML = '勝ち';
      win();
      insertWin();
      dnfirst1();
    } else {
      document.getElementById('judgement').innerHTML = '負け';
      lose();
      insertLose();
      dnfirst1();
    }

  };

  function battleCho() {
    let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand').innerHTML = 'コンピュータの手:' + results[rand];
    if (rand == 0) {
      document.getElementById('judgement').innerHTML = '負け';
      lose();
      insertLose();
      dnfirst1();
    } else if (rand == 1) {
      document.getElementById('judgement').innerHTML = '引き分け';
    } else {
      document.getElementById('judgement').innerHTML = '勝ち';
      win();
      insertWin();
      dnfirst1();
    }
  };

  function battlePar() {
    let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand').innerHTML = ('コンピュータの手:' + results[rand]);
    if (rand == 0) {
      document.getElementById('judgement').innerHTML = '勝ち';
      win();
      insertWin();
      dnfirst1();
    } else if (rand == 1) {
      document.getElementById('judgement').innerHTML = '負け';
      lose();
      insertLose();
      dnfirst1();
    } else {
      document.getElementById('judgement').innerHTML = '引き分け';
    }
  };


  document.getElementById('gu_btn').onclick = function () {
    sound1();
    battleGu();
    first1True();
  }
  document.getElementById('cho_btn').onclick = function () {
    sound1();
    battleCho();
    first1True();
  }
  document.getElementById('par_btn').onclick = function () {
    sound1();
    battlePar();
    first1True();
  }
  document.getElementById('test_btn').onclick = function () {
    document.getElementById('judgement').innerHTML = '勝ち';
    win();
    insertWin();
    dnfirst1();
  }
  document.getElementById('test_btn_lose').onclick = function () {
    document.getElementById('judgement').innerHTML = '負け';
    lose();
    insertLose();
    dnfirst1();
  }


  // first2

  // じゃんけん判定

  const results2 = ['グー', 'チョキ', 'パー'];
  let first2 = 0;

  function win2() {
    document.getElementById('enemy_first2').style.display = 'none';
    document.getElementById('first2_choiceList').style.display = 'none';
    resultTotal++;
  }

  function lose2() {
    document.getElementById('myteam_first2').style.display = 'none';
    document.getElementById('first2_choiceList').style.display = 'none';
  }

  function first2True() {
    first2 = 1;
  }

  function dnfirst2() {
    document.getElementById('first2_choiceList').style.display = 'none';
    document.getElementById('first3_choiceList').style.display = 'block';
  }


  function battleGu2() {
    let rand2 = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand2').innerHTML = 'コンピュータの手:' + results2[rand2];
    if (rand2 == 0) {
      document.getElementById('judgement2').innerHTML = '引き分け';
    } else if (rand2 == 1) {
      document.getElementById('judgement2').innerHTML = '勝ち';
      win2();
      insertWin2()
      dnfirst2();
    } else {
      document.getElementById('judgement2').innerHTML = '負け';
      lose2();
      insertLose2();
      dnfirst2();
    }

  };

  function battleCho2() {
    let rand2 = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand2').innerHTML = 'コンピュータの手:' + results[rand2];
    if (rand2 == 0) {
      document.getElementById('judgement2').innerHTML = '負け';
      lose2();
      insertLose2();
      dnfirst2();
    } else if (rand2 == 1) {
      document.getElementById('judgement2').innerHTML = '引き分け';
    } else {
      document.getElementById('judgement2').innerHTML = '勝ち';
      win2();
      insertWin2();
      dnfirst2();
    }
  };

  function battlePar2() {
    let rand2 = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand2').innerHTML = ('コンピュータの手:' + results[rand2]);
    if (rand2 == 0) {
      document.getElementById('judgement2').innerHTML = '勝ち';
      win2();
      insertWin2();
      dnfirst2();
    } else if (rand2 == 1) {
      document.getElementById('judgement2').innerHTML = '負け';
      lose2();
      insertLose2();
      dnfirst2();
    } else {
      document.getElementById('judgement2').innerHTML = '引き分け';
    }
  };

  document.getElementById('gu_btn2').onclick = function () {
    sound2();
    battleGu2();
    first2True();
  }
  document.getElementById('cho_btn2').onclick = function () {
    sound2();
    battleCho2();
    first2True();
  }
  document.getElementById('par_btn2').onclick = function () {
    sound2();
    battlePar2();
    first2True();
  }
  document.getElementById('test_btn2').onclick = function () {
    document.getElementById('judgement2').innerHTML = '勝ち';
    win2();
    insertWin2();
    dnfirst2();
  }
  document.getElementById('test_btn_lose2').onclick = function () {
    document.getElementById('judgement2').innerHTML = '負け';
    lose2();
    insertLose2();
    dnfirst2();
  }


  // first3

  // じゃんけん判定

  const results3 = ['グー', 'チョキ', 'パー'];
  let first3 = 0;

  function win3() {
    document.getElementById('enemy_first3').style.display = 'none';
    document.getElementById('first3_choiceList').style.display = 'none';
    resultTotal++;
  }

  function lose3() {
    document.getElementById('myteam_first3').style.display = 'none';
    document.getElementById('first3_choiceList').style.display = 'none';
  }

  function first3True() {
    first3 = 1;
  }

  function dnfirst3() {
    document.getElementById('first3_choiceList').style.display = 'none';
    document.getElementById('first1_choiceList').style.display = 'block';
  }


  function battleGu3() {
    let rand3 = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand3').innerHTML = 'コンピュータの手:' + results2[rand3];
    if (rand3 == 0) {
      document.getElementById('judgement3').innerHTML = '引き分け';
    } else if (rand3 == 1) {
      document.getElementById('judgement3').innerHTML = '勝ち';
      win3();
      insertWin3();
      setTimeout(dnfirst3,3000);
    } else {
      document.getElementById('judgement3').innerHTML = '負け';
      lose3();
      insertLose3();
      setTimeout(dnfirst3,3000);
    }

  };

  function battleCho3() {
    let rand3 = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand3').innerHTML = 'コンピュータの手:' + results[rand3];
    if (rand3 == 0) {
      document.getElementById('judgement3').innerHTML = '負け';
      lose3();
      insertLose3();
      setTimeout(dnfirst3,3000);
    } else if (rand3 == 1) {
      document.getElementById('judgement3').innerHTML = '引き分け';
    } else {
      document.getElementById('judgement3').innerHTML = '勝ち';
      win3();
      insertWin3();
      setTimeout(dnfirst3,3000);
    }
  };

  function battlePar3() {
    let rand3 = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    document.getElementById('com_hand3').innerHTML = ('コンピュータの手:' + results[rand3]);
    if (rand3 == 0) {
      document.getElementById('judgement3').innerHTML = '勝ち';
      win3();
      insertWin3();
      setTimeout(dnfirst3,3000);
    } else if (rand3 == 1) {
      document.getElementById('judgement3').innerHTML = '負け';
      lose3();
      insertLose3();
      setTimeout(dnfirst3,3000);
    } else {
      document.getElementById('judgement3').innerHTML = '引き分け';
    }
  };

  document.getElementById('gu_btn3').onclick = function () {
    sound3();
    battleGu3();
    first3True();
    if (document.getElementById('judgement3').textContent !== '引き分け') {
      setTimeout(secondStage,3000);
    }
  }
  document.getElementById('cho_btn3').onclick = function () {
    sound3();
    battleCho3();
    first3True();
    if (document.getElementById('judgement3').textContent !== '引き分け') {
      setTimeout(secondStage,3000);
    }
  }
  document.getElementById('par_btn3').onclick = function () {
    sound3();
    battlePar3();
    first3True();
    if (document.getElementById('judgement3').textContent !== '引き分け') {
      setTimeout(secondStage,3000);

    }
  }

  document.getElementById('test_btn3').onclick = function () {
    document.getElementById('judgement3').innerHTML = '勝ち';
    win3();
    insertWin3();
    dnfirst3();
    if (document.getElementById('judgement3').textContent !== '引き分け') {
      setTimeout(secondStage,3000);
    }
  }
  document.getElementById('test_btn_lose3').onclick = function () {
    document.getElementById('judgement3').innerHTML = '負け';
    lose3();
    insertLose3();
    dnfirst3();
    if (document.getElementById('judgement3').textContent !== '引き分け') {
      setTimeout(secondStage,3000);
    }
  }

  // 2列目

  function secondStage() {
    function resetText() {
      document.getElementById('com_hand').innerHTML = 'コンピュータの出した手は？';
      document.getElementById('judgement').innerHTML = '結果は？';
    }

    function resetText2() {
      document.getElementById('com_hand2').innerHTML = 'コンピュータの出した手は？';
      document.getElementById('judgement2').innerHTML = '結果は？';
    }

    function resetText3() {
      document.getElementById('com_hand3').innerHTML = 'コンピュータの出した手は？';
      document.getElementById('judgement3').innerHTML = '結果は？';
    }
    console.log(resultTotal);
    // 全滅で敗北
    if (resultTotal > 0) {
      if (resultTotal !== 3) {


        // 5回で終了
        if (endingCount < 4) {
          endingCount++;

          if (first1 == first2 && first2 == first3 && first1 == first3) {
            // 左
            first1 = 0;
            first2 = 0;
            first3 = 0;
            resultTotal = 0;

            if (document.getElementById('judgement').textContent == '勝ち') {
              document.getElementById('first1_red').insertAdjacentHTML('afterbegin', "<img id='enemy_first1' src='img/red.png' alt=''>");
              resetText();
            } else if (document.getElementById('judgement').textContent == '負け') {
              document.getElementById('first1_blue').insertAdjacentHTML('afterbegin', "<img id='myteam_first1' src='img/blue.png' alt=''>");
              resetText();

            } else {
              console.log('error');
            }

            // 真ん中

            if (document.getElementById('judgement2').textContent == '勝ち') {
              document.getElementById('first2_red').insertAdjacentHTML('afterbegin', "<img id='enemy_first2' src='img/red.png' alt=''>");
              resetText2();
            } else if (document.getElementById('judgement2').textContent == '負け') {
              document.getElementById('first2_blue').insertAdjacentHTML('afterbegin', "<img id='myteam_first2' src='img/blue.png' alt=''>");
              resetText2();
            } else {
              console.log('error');
            }

            // 右

            if (document.getElementById('judgement3').textContent == '勝ち') {
              document.getElementById('first3_red').insertAdjacentHTML('afterbegin', "<img id='enemy_first3' src='img/red.png' alt=''>");
              resetText3();
            } else if (document.getElementById('judgement3').textContent == '負け') {
              document.getElementById('first3_blue').insertAdjacentHTML('afterbegin', "<img id='myteam_first3' src='img/blue.png' alt=''>");
              resetText3();
            } else {
              console.log('error');
            }
          }
        } else {
          console.log('end');
          setTimeout(location.href="/yabou/draw.html", 3000);
        }

      } else {
        console.log('win');
        setTimeout(location.href="/yabou/win.html", 3000);
      }

    } else {
      console.log('lose');
      setTimeout(location.href="/yabou/lose.html", 3000);
    }
  }

  function sound1(){
    document.getElementById('sound-file1').play();
  }

  function sound2(){
    document.getElementById('sound-file2').play();
  }

  function sound3(){
    document.getElementById('sound-file3').play();
  }


  function insertWin(){
    document.getElementById('insert').insertAdjacentHTML('afterbegin', "<div id='insertBox'><p>相手に勝利した！</p></div>");
    setTimeout(insertNone, 3000);
  }

  function insertLose(){
    document.getElementById('insert').insertAdjacentHTML('afterbegin', "<div id='insertBoxLose'><p>相手に負けた！</p></div>");
    setTimeout(insertLoseNone, 3000);
  }
  function insertWin2(){
    document.getElementById('insert2').insertAdjacentHTML('afterbegin', "<div id='insertBox2'><p>相手に勝利した！</p></div>");
    setTimeout(insertNone2, 3000);
  }

  function insertLose2(){
    document.getElementById('insert2').insertAdjacentHTML('afterbegin', "<div id='insertBoxLose2'><p>相手に負けた！</p></div>");
    setTimeout(insertLoseNone2, 3000);
  }
  function insertWin3(){
    document.getElementById('insert3').insertAdjacentHTML('afterbegin', "<div id='insertBox3'><p>相手に勝利した！</p></div>");
    setTimeout(insertNone3, 3000);
  }

  function insertLose3(){
    document.getElementById('insert3').insertAdjacentHTML('afterbegin', "<div id='insertBoxLose3'><p>相手に負けた！</p></div>");
    setTimeout(insertLoseNone3, 3000);
  }

  function insertNone(){
    document.getElementById('insertBox').style.display = 'none';
  }
  function insertLoseNone(){
    document.getElementById('insertBoxLose').style.display = 'none';
  }
  function insertNone2(){
    document.getElementById('insertBox2').style.display = 'none';
  }
  function insertLoseNone2(){
    document.getElementById('insertBoxLose2').style.display = 'none';
  }
  function insertNone3(){
    document.getElementById('insertBox3').style.display = 'none';
  }
  function insertLoseNone3(){
    document.getElementById('insertBoxLose3').style.display = 'none';
  }

