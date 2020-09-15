var gunEl = document.getElementById('gun');
var saatEl = document.getElementById('saat');
var dakikaEl = document.getElementById('dakika');  
var saniyeEl = document.getElementById('saniye');


function yeni(){
  const currentDate = new Date();
  const myBirthday = new Date('Nov 7 2020 17:45:00 GMT+0300 (GMT+03:00)');
  
  var totalsaniye = Math.floor((myBirthday - currentDate) / 1000);
  
  var saniye = Math.floor(totalsaniye % 60);
  var dakika = Math.floor((totalsaniye / 60) % 60);
  var saat = Math.floor((totalsaniye / 60 / 60) % 24);
  var gun  = Math.floor(totalsaniye / 60 / 60 / 24);

  gunEl.innerHTML = gun;
  saatEl.innerHTML = saat;
  dakikaEl.innerHTML = dakika;
  saniyeEl.innerHTML = saniye;



};

yeni();

setInterval(yeni , 1000);