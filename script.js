var tarih = new Date();
var ay, gun, saat, dakika, saniye;


var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
    },
    methods: {
      
      },
      
      computed : {
        
      }
  });
function yeni(){
  const currentDate = new Date();
  const myBirthday = new Date('7 Nov 2020');
  var saniye = Math.floor(((myBirthday - currentDate) / 1000) % 60);
  var dakika = Math.floor(((myBirthday - currentDate) / 1000 / 60) % 60);
  var saat = Math.floor(((myBirthday - currentDate) / 1000 / 60 / 60) % 24);
  var gun  = Math.floor(((myBirthday - currentDate) / 1000 / 60 / 60 / 24) % 30);
  var ay = Math.floor((myBirthday - currentDate) / 1000 / 60 / 60 / 24 / 30);
  return [ay, gun, saat, dakika, saniye];
};



var values = yeni();
values.forEach(eleman => { console.log(eleman)

});

setInterval(yeni, 1000)