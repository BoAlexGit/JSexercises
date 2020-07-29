import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  
  return (
    <ul>
      <li>Drink Coffee</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const TodoListMy = () => {

    return (
        <ul>
            <li>Drink Tea</li>
            <li>Build My App</li>
        </ul>
    );
};


const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const AppHeaderMy = () => {
    return <h1>Todo My List!</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const AppMy = () => {

    return (
        <div>
            <AppHeaderMy />
            <SearchPanel />
            <TodoListMy />
        </div>
    );
};

ReactDOM.render(
    <div>
        <App/>
        <AppMy />
    </div>,
  document.getElementById('root'));

ReactDOM.render(
    'это просто текст',
    document.getElementById('rootMy'));

ReactDOM.render(
   <App/>,
    document.getElementById('root1'));
ReactDOM.render(
    <AppMy/>,
    document.getElementById('rootMy1'));