$(document).ready(function(){
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function makeANumber(){
        var number = "";
            for(var i = 0; i < 4; i++){
                do{
                    var subNumber = randomNumber(0, 9);
                }
                while(number.indexOf(subNumber) >= 0){
                    number += subNumber;
                }
            }
        return number;
    }
    function chekTheAttend (n){
        if(n.length != 4 || n < 0){
            var elem = '<div class="errors">Введите четырёхзначное число</div>';
            $(".form").append(elem);
            return false;
        }else if(parseInt(n) != n){
            var elem = '<div class="errors">Введите целое число</div>';
            $(".form").append(elem);
            return false;
        }
        for(var i = 0; i < n.length; i++){
            for(var j = i+1; j < n.length; j++){
                if(n[i] == n[j]){
                    var elem = '<div class="errors">Цифры не должны повторяться</div>';
                    $(".form").append(elem);
                    return false;
                }
            }
        }
        return true;
    }
    function takeAGuess (win, attend){
        var cows = 0;
        var bulls = 0;
            if(chekTheAttend(attend) === true){
                for(var x = 0; x < 4; x++){
                    if(win[x] == attend[x]){
                        bulls++;
                    }else if(win.indexOf(attend[x]) >= 0){
                        cows++;
                    }
                }
            $(".tab tr:last").after("<tr>" + "<td>" + attend + "</td>" + "<td>" + bulls + "</td>" + "<td>" + cows + "</td>" + "</tr>");
            }
    }
    var winNum = makeANumber();
    //alert(winNum);
    $('input').keydown(function(e) {
        if(e.keyCode === 13) {
            for(var i= 0; i < 1; i++){
                $("div.errors").remove();
                var num = $("input").val();
                num = num.replace(/^\s+|\s+$/g, '');
                    if(!num) {
                        break;
                    }
                $("input").val("").change();
                takeAGuess(winNum, num);
                    if(winNum == num){
                        alert("Вы выиграли!");
                        $("input").prop("disabled",true);
                        break;
                    }
            }
        }
});
$(".btn").click(function() {
    location.reload(true);
});
});