/*!
=========================================================
* Nick Stambaugh Landing page
=========================================================

* Coded by www.nickstambaugh.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$(document).ready(function() {
    var index = 0;
    var texts = $(".slidingVertical span");
    texts.removeClass("visible");
    texts.first().addClass("visible");
    
    setInterval(function() {
      texts.eq(index).fadeOut(function() {
        $(this).removeClass("visible");
        index = (index + 1) % texts.length;
        texts.eq(index).fadeIn().addClass("visible");
      });
    }, 2000);
  });

 // Populate email message with user input
 const form = document.querySelector('.contact-form');
 form.addEventListener('submit', function(e) {
     const nameInput = document.getElementById('nameInput');
     const emailInput = document.getElementById('emailInput');
     const commentInput = document.getElementById('comment');

     const subject = encodeURIComponent('Contact Request from ' + nameInput.value);
     const body = encodeURIComponent('Name: ' + nameInput.value + '%0AEmail: ' + emailInput.value + '%0A%0A' + commentInput.value);

     this.action = 'mailto:nastambaugh@gmail.com?subject=' + subject + '&body=' + body;
 });

 $(document).ready(function(){
    $('.demo').slick();
  });
