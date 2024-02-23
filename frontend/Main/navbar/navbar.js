const scrollers = document.querySelectorAll(".scroller");
  addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
    $(function() {
      $('#contact').click(function() {
        $('#contactForm').fadeToggle();
      })
      $(document).mouseup(function (e) {
        var container = $("#contactForm");
    
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.fadeOut();
        }
      });
    });
    