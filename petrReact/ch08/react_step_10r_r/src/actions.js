// actions.js  react_step_10r_r (см. 8.71 Соединяем React и Redux  )
// Вспомогательные функции action-creator единственная цель создать новый объект ({type: 'INC'})
export const inc = () => ( {type: 'INC'} );
export const dec = () => ( {type: 'DEC'} );
export const res = () => ( {type: 'RES'} );
export const rdn = (value) => ( {type: 'RDN', value} );