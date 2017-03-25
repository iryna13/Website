   var menu_box = document.getElementById('menu_box');
   console.log(menu_box);
   window.onscroll = function () {

       if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
           menu_box.classList.add("fixed");
       } else {
        menu_box.classList.remove("fixed");
       }
   };