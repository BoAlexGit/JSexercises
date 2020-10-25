//script.js
// нельзя с точностью сказать сколько времени будут загружаться элементы страницы
// ведь обычно это и ссs стили и ресурсы подгружаемые с других ссерверов
// и главное картинки если разроботчик или контакт менеджер не добрасовестный он 
// забыл жжать их и они могу достигать  5-10 мБ и пока наша страница будет загружаться
// наш js уже начнёт что-то изменять на этой странице - и есл дом дерева не подгрузилась 
// мы к сожалению получим ошибку
// чтобы js не начал обрабатывать раньше времени есть два события: 
// window.addEventListener('load', function() { - загрузится всё вместе со всеми картинками
// но нам главное чтобы было построено DOM-дерево,
// поэтому лучше  второй вариант:
window.addEventListener('DOMContentLoaded', function() {
// требуется чтобы показывался только один блок а остальные показывались только после 
// переключения между табами Лечение -> Отдых -> Природа -> Йога 
    'use strict';// строгий режим
    // прописываем переменные с которыми будем работать - всегда так начинаем
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
// подумать какие фуркции нам нужно реализовать
    function hideTabContent(a) {//функция скрывает весь tabContent
        for (let i = a; i < tabContent.length; i++) {//цикл подстраевается и перебирает все элементы
            //этими двумя строчками мы возьмем все элементы tabContent и полностью
            //скроим их со страницы (см.эти классы в .css)
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);// запустить функцию и оставить часть "1" т.к. она пропускается

    function showTabContent(b) {//функция показывает нужный tabContent
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {//обработчик нажатия
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
});