//CONTADOR MODAL - POPUP XS
$( document ).ready(function() {
    var end = new Date('12/06/2019 06:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementsByClassName("cuenta-atras").innerHTML = 'OFERTA EXPIRADA!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById("cuenta-atras-dias-xs").innerHTML = days;
        document.getElementById("cuenta-atras-horas-xs").innerHTML = hours;
        document.getElementById("cuenta-atras-minutos-xs").innerHTML = minutes;
        document.getElementById("cuenta-atras-segundos-xs").innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
});


//CONTADOR MODAL - POPUP WEB
$( document ).ready(function() {
    var end = new Date('12/06/2019 06:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementsByClassName("cuenta-atras").innerHTML = 'OFERTA EXPIRADA!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById("cuenta-atras-dias-modal").innerHTML = days;
        document.getElementById("cuenta-atras-horas-modal").innerHTML = hours;
        document.getElementById("cuenta-atras-minutos-modal").innerHTML = minutes;
        document.getElementById("cuenta-atras-segundos-modal").innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
});


//CUENTA ATRAS WEB FIXED
$( document ).ready(function() {
    var end = new Date('12/06/2019 06:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementsByClassName("cuenta-atras").innerHTML = 'OFERTA EXPIRADA!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById("cuenta-atras-dias").innerHTML = days;
        document.getElementById("cuenta-atras-horas").innerHTML = hours;
        document.getElementById("cuenta-atras-minutos").innerHTML = minutes;
        document.getElementById("cuenta-atras-segundos").innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
});
