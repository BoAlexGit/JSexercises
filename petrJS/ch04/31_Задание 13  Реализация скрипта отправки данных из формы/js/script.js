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

    // Timer 

    let deadline = '2018-11-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
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
                    };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form -> из файла /home/alex/jsGit/petrJS/ch04/31_Задание 13_ Реализация скрипта отправки данных из формы/js/script.js

// будем реализовывать отправку на сервер данных которые юзер набрал (номер телефона итп)
         // чтобы работать с Form "Форма обратной связи"
// здесь будут различные сообщения по состоянию объекта
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
// получаем те переменнные с которыми будем работать
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
// создадим новый div в котором будут наши сообщения
        statusMessage = document.createElement('div');
// чтобы div получил стилизацию этой переменной нужно назначить класс
        statusMessage.classList.add('status');
// на эту форму(не на кнопку!) вешаем обработчик события submit означает, что события
// события происходит только тогда когда наша форма отправляется
    form.addEventListener('submit', function(event) {
        event.preventDefault();//отменить стандартное поведение браузера (без обновления всей страницы)
        form.appendChild(statusMessage);//поместить сообщение в нашу форму
//создание запроса (чтобы мы могли отправить данные на серевер)
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');//настройки запроса
// настройка заголовков http запроса который говорит что наш контент будет содержать данные
// полученные из формы
        //request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//если запрос в json
        request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
// теперь нам нужно получить те данные которые ввёл юзер
        let formData = new FormData(form);// второй вариант с json(он серенький)
// перевести в json (если запрос в json)
       // let obj = {};
       // formData.forEach(function(value, key) {
          //  obj[key] = value;
        //});
        //let json = JSON.stringify(obj);
        request.send(formData);
        //request.send(json);//если запрос в json
// чтобы сообщить юзеру что происходит с запросом
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        // в файле index.html <input class="popup-form__input" name="phone" type="tel" required placeholder="+7(978) 973 33 45">
        // чтобы правильно отправлять данные необходимо обязательно установить параметр name=
// очистить инпуты от юзеровских записей после сабмита
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    
});
