// reducer.js  react_step_10r_r (см. 8.71 Соединяем React и Redux  )
// редюсер перенесено в файл reducer.js video-course 071/01:20
const counter = (state = 0, action) => {
    switch (action.type){ // действий м.б. много поэтому switch
        case 'INC':
            return state + 3;
        case 'DEC': // video-course 069/21:00
            return state - 3;
        case 'RES':
            return 0;
        case 'RDN': // video-course 069/25:00
            return state + action.value;
        //return 55555;
        default:
            return state;
    }
}

export default counter;
// у этих файлов нет никаких зависимостей им даже не нужен redux для работы
// и за счёт того что это чистые функции их будет легко и приятно тестировать
// не забудь импортировать созданные файлы в index.js