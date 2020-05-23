//sets the countdown date
var countdownDate = new Date("May 23, 2020 18:10:00").getTime()
//shortcut to get elements 
var el = function(element){
    if(element.charAt(0)==='#'){
        return document.querySelector(element);
    }
}

//runs code every 1s
var timeFunction = setInterval(function(){
    //calculates the time left
    var now = new Date().getTime();
    var remainingTime = countdownDate - now;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    //displays the values of the calculated time
    el('#days').innerHTML = days + 'd';
    el('#hours').innerHTML = hours + 'h';
    el('#minutes').innerHTML = minutes + 'm';
    el('#seconds').innerHTML = seconds + 's';

    //when countdown ends, stops excuting the timing function and displays the time as 0
    if(remainingTime < 0){
        clearInterval(timeFunction); 
        el('#days').innerHTML = '0' + 'd';
        el('#hours').innerHTML = '0' + 'h';
        el('#minutes').innerHTML = '0' + 'm';
        el('#seconds').innerHTML = '0' + 's';
        el('#wrapper').classList.add('animate__animated', 'animate__fadeOutUp')
        el('#wrapper').addEventListener('animationend', () => {
            el('#wrapper').classList.add('remove')
            el('#text').innerHTML = 'TIME UP!';
        });
    }
}, 1000)

