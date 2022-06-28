      var card = document.querySelector(".card");
      var darkmode = document.querySelector(".darkmode");
      const front = document.querySelector(".front");
      const back = document.querySelector(".back");
      card.addEventListener('click',function() {
          document.body.classList.toggle('dark');
          

        anime({
          targets: card,
          scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
          rotateY: {value: '+=180', delay: 200},
          easing: 'easeInOutSine',
          duration: 400,
   
  });
});



