// script.js
// работа таймера обычно очень плохо описана, а часто нужно сделать
// что-нибудь особенное
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer как он работает

    let deadline = '2020-11-28';// время окончания акции
// функция вычисляющая статически от deadline до настоящей даты и 
// вычленяет оттуда часы : минуты : секунды
    function getTimeRemaining(endtime) {
        // вычислим разницу между deadline и настоящей датой
        let t = Date.parse(endtime) - Date.parse(new Date()),
        // т.к. всё получается в миллисекундах делаем нормально
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        //hours = Math.floor((t/(1000*60*60)));//если заканчивается на часах
        // заканчивается на днях то:
         hours =  Math.floor((t/1000/60/60) % 24),
         days = Math.floor((t/(1000*60*60*24))); //количество дней осталось

        return { // возвращаем целый объект - пары ключ-значение
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
// функция превращает нашу статичную вёрстку уже в динамическую для того
// чтобы подставлять все эти значения которые мы расчитываем прямо в вёрстку
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    }
            days.textContent = addZero (t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
});