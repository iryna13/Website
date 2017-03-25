$(document).ready(function () {
    $(".article__сircle").circliful({});
});
$('#graph_pic').click(function(e){
    $( ".graph_pic" ).parent().toggle( "slow");
});
$('#web_pic').click(function(){
    $( ".web_pic" ).parent().toggle( "slow");
});


$('#ident_pic').click(function(){
    $( ".ident_pic" ).parent().toggle( "slow");
});
$('#mobile_pic').click(function(){
    $( ".mobile_pic" ).parent().toggle( "slow");
});




var flagShowMenu = false;
var windowSreen = document.body.clientWidth;;
var masPrefix = document.getElementsByClassName("mini-motto");
var miniMottoFW = document.querySelectorAll('.mini-motto > span:first-child');
var miniMottoSW = document.querySelectorAll('.mini-motto > span:nth-child(2)');
var miniMottoSub = document.querySelectorAll('.mini-motto > span:last-child');
var circles = document.querySelectorAll(".article__сircle");

for (var i = 0; i < miniMottoFW.length; i++) {
    miniMottoFW[i].classList.add("prefix_fw");
    miniMottoSW[i].classList.add("prefix_sw");
    miniMottoSub[i].classList.add("prefix_sub");
}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}

circles.forEach(function (item, i) {
    item.setAttribute("data-foregroundColor", getRandomColor());
});

var hiddenMenu = document.getElementById('menu');
hiddenMenu.addEventListener('click', showMenu);
hiddenMenu.addEventListener('dblclick', hideMenu);

function hideMenu() {
    hiddenMenu.nextElementSibling.style.display = "none";
}


function showMenu() {
    hiddenMenu.nextElementSibling.style.display = "block";
}


(function getStuffNames() {
    var request = new XMLHttpRequest();
    request.open('GET', "../Json.txt", false);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if (data && data.employees) {
                var masStuffName = document.getElementsByClassName("stuffName");
                for (var i = 0; i < masStuffName.length; i++) {
                    masStuffName[i].innerHTML = data.employees[i].Name;
                }
            }
        } else {}
    };
    request.onerror = function () {
        console.log('error');
    };
    request.send();
})();

function getWeather(location) {
    var request = new XMLHttpRequest();
    request.open('GET', "//api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=2239135b18e8b5e093a144e55b94b5d6", true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            var result = document.getElementById("result");
            console.log(data);
            document.getElementById("result").innerHTML = tmpl("weatherTpl", data);
        } else {


        }
    };

    request.onerror = function () {

        console.log('error');
    };

    request.send();
}

getWeather('lviv');


$(function() {
    $("#messageForm").submit(function() {
        var formData = {
            "name":$("#InputName").val(),
             "email":$("#InputEmail").val(),
                   "subject":$("#InputSubjct").val(),
                         "message":$("#Texarea").val()
        };
        $.ajax({
            url:'dataparser.php', 
            type:'POST',
            data:'jsonData=' + $.toJSON(formData),
            success: function(res) {
                alert(res);
            }
        });
        return false;
    });
});