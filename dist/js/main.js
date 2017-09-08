
        $(function () {
            $('.toggleNav').on('click', function () {
                $('.main-menu ul').toggleClass('open');
            });
        });
 $(document).ready(function(){
    $(".main-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
        function getRandomColor()
        {for(var e="0123456789ABCDEF",t="#",n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t}function hideMenu(){hiddenMenu.nextElementSibling.style.display="none"}function showMenu(){hiddenMenu.nextElementSibling.style.display="block"}
         $(document).ready(function(){
            $(".article__сircle").circliful({})
        }),
        $("#web_pic").click(function(){
            $(".web_pic").parent().toggle("slow");
        }),
        $("#graph_pic").click(function(){$(".graph_pic").parent().toggle("slow")}),$("#ident_pic").click(function(){$(".ident_pic").parent().toggle("slow")}),$("#mobile_pic").click(function(){$(".mobile_pic").parent().toggle("slow")});
        for(var flagShowMenu=!1,windowSreen=document.body.clientWidth,
        masPrefix=document.getElementsByClassName("mini-motto"),
        miniMottoFW=document.querySelectorAll(".mini-motto > span:first-child"),
        miniMottoSW=document.querySelectorAll(".mini-motto > span:nth-child(2)"),
        miniMottoSub=document.querySelectorAll(".mini-motto > span:last-child"),
        circles=document.querySelectorAll(".article__сircle"),
        i=0;i<miniMottoFW.length;i++)
        miniMottoFW[i].classList.add("prefix_fw"),
        miniMottoSW[i].classList.add("prefix_sw"),
        miniMottoSub[i].classList.add("prefix_sub");
        circles.forEach(function(e,t){e.setAttribute("data-foregroundColor",getRandomColor())});


