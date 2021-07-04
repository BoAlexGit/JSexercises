// reducer.js  react_step_11 (см. 8.71 Соединяем React и Redux)
const reducer = (state = 0, action) => {
    switch (action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
                return 0;
        default:
            return state;
    }
}

export default reducer;