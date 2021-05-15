/* 058 Практика. Создаем собственные события и работаем с иммутабильностью react_step_4 */
import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css'

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}   /*определяем какая кнопка "мусорка" нажата */
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;

/*import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css'
// см.056 Свойства и состояния компонентов. События в React _ Практика.mp4 => 14:00
const PostList = ({posts}) => {

    const elements = posts.map( (item) => {
        // Простой способ проверки на объект + содержится ли в нем информация
        if ( typeof item === 'object' && isEmpty(item) ){ 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <PostListItem {...itemProps}/>
                </li>
            )
        }
    })

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default PostList;

 */