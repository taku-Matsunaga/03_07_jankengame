let kyushu = 1;
let osaka = 1;
let odawara = 0;
let edo = 0;
let ref = document.referrer;

if( ref == 'yabou/win.html'){

  if(kyushu == 1 && osaka == 1 && odawara == 0 && edo == 0){
    document.getElementById('odawara').style.backgroundColor = 'blue';
    odawara = 1;
    setTimeout(location.href="/yabou/index.html", 3000);
  }
  if(kyushu == 1 && osaka == 1 && odawara == 1 && edo == 0){
    document.getElementById('edo').style.backgroundColor = 'blue';
    edo = 1;
  }
  if(kyushu == 1 && osaka == 0 && odawara == 0 && edo == 0){
    document.getElementById('osaka').style.backgroundColor = 'blue';
    osaka = 1;
    setTimeout(location.href="/yabou/index.html", 3000);
  }

}else{
  if(kyushu == 1 && osaka == 1 && odawara == 0 && edo == 0){
    document.getElementById('osaka').style.backgroundColor = 'red';
    osaka = 0;
    setTimeout(location.href="/yabou/index.html", 3000);
  }
  if(kyushu == 1 && osaka == 1 && odawara == 1 && edo == 0){
    document.getElementById('odawara').style.backgroundColor = 'red';
    odawara = 0;
    setTimeout(location.href="/yabou/index.html", 3000);
  }
  if(kyushu == 1 && osaka == 0 && odawara == 0 && edo == 0){
    document.getElementById('kyushu').style.backgroundColor = 'red';
    kyushu = 0;
  }
}

// setTimeout(location.href="/yabou/index.html", 5000);


