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
  
    if (page.id === 'page1') {
      page.querySelector('#registerBtn').onclick = function() {
        document.querySelector('#welcome').pushPage('register.html', {data: {title: 'Page 2'}});
      };
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });
