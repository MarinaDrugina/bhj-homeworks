const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', (event) => {
    
    reveal.forEach(item => {
      const {top, bottom} = item.getBoundingClientRect();
  
      if(top > 0 && bottom < window.innerHeight) {
          item.classList.add('reveal_active');
      } else {
          item.classList.remove('reveal_active');
      }
    });
});