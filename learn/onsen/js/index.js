var prev = function() {
    var carousel = document.getElementById('carousel');
    carousel.prev();
  };
  
  var next = function() {
    var carousel = document.getElementById('carousel');
    carousel.next();
  };
  
  ons.ready(function() {
    var carousel = document.addEventListener('postchange', function(event) {
      console.log('Changed to ' + event.activeIndex)
    });
  });

  /* welcome and registration pages */
  document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'welcome') {
      page.querySelector('#registerBtn').onclick = function() {
        document.querySelector('#welcome').pushPage('register.html', {data: {title: 'Sign Up'}});
      };
    } else if (page.id === 'userRegister') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });
