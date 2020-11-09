$(function () {
  //ここに処理を追加

  const results = ['グー','チョキ','パー'];

  $('#gu_btn').on('click', function(){
    let rand = Math.floor(Math.random() * 3);

    // 0 = gu
    // 1 = cho
    // 2 = par

    $('#com_hand').text('コンピュータの手:' + results[rand]);
    if(rand == 0){
      $('#judgement').text('引き分け');
    }else if (rand == 1){
      $('#judgement').text('勝ち');
    }else{
      $('#judgement').text('負け');
    }
  })

  $('#cho_btn').on('click', function(){
    let rand = Math.floor(Math.random() * 3);

    $('#com_hand').text('コンピュータの手:' + results[rand]);
    if(rand == 0){
      $('#judgement').text('負け');
    }else if (rand == 1){
      $('#judgement').text('引き分け');
    }else{
      $('#judgement').text('勝ち');
    }
  })

  $('#par_btn').on('click', function(){
    let rand = Math.floor(Math.random() * 3);

    $('#com_hand').text('コンピュータの手:' + results[rand]);
    if(rand == 0){
      $('#judgement').text('勝ち');
    }else if (rand == 1){
      $('#judgement').text('負け');
    }else{
      $('#judgement').text('引き分け');
    }
  })

});