var tarih = new Date();



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      hours: "",
      mins: "",
      secs:"",
      gun : tarih.getSeconds(),

    },
    methods: {
      yeni(gun){
        setInterval(gun, 1000);
        console.log(gun);
      }
      },
  })
