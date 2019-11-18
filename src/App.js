import React, { useState } from 'react';
import './App.css';
// import logo from './5.png';

function App() {
  const [todoValue, settodoValue] = useState('');
  const [todolist, settodolist] = useState([
    // {
    //   todoValue: 'hey',
    //   class: 'list through'
    // }
  ]);

  // const handleEnter = () => {
  //   if (todoValue === '') return;
  //   let newtodo = [...todolist];
  //   let newobj = {
  //     todoValue,
  //     class: 'list'
  //   };
  //   newtodo.push(newobj);
  //   settodolist(newtodo);

  //   settodoValue('');
  // };
  const handleEnterkey = e => {
    let code = e.keyCode || e.which;
    if (code === 13 && e.target.value !== '') {
      let newtodo = [...todolist];
      let newobj = {
        todoValue,
        class: 'list'
      };
      newtodo.push(newobj);
      settodolist(newtodo);

      settodoValue('');
      console.log(newtodo);
    }
  };
  const removeList = item => {
    let newtodo = todolist.filter(t => t !== item);
    settodolist(newtodo);
  };

  const through = item => {
    let newtodo = todolist.map(t =>
      t === item
        ? { ...t, class: t.class === 'list' ? 'list through' : 'list' }
        : t
    );
    settodolist(newtodo);
    console.log(newtodo);
  };

  return (
    <React.Fragment>
      {/* <img
        src={logo}
        style={{ position: 'absolute', zIndex: '-1', width: '100%' }}
        alt="prop"
      ></img> */}
      <div className="App">
        <h1>TODOList</h1>
        <div className="todo">
          <div className="inputtag">
            <input
              type="text"
              value={todoValue}
              onChange={e => settodoValue(e.target.value)}
              onKeyPress={handleEnterkey}
              placeholder="What you Want to do?"
            />
            {/* <button className="delBtn" onClick={handleEnter}>
            Add
          </button> */}
          </div>

          <span className="noselect">
            <div className="todolist">
              <h4>Your Todo's</h4>
              {todolist.map((t, i) => (
                <div className="flex" key={i}>
                  <p className={t.class} onClick={() => through(t)}>
                    <span>{i + 1} :</span>
                    {t.todoValue}
                  </p>
                  <button className="delBtn" onClick={() => removeList(t)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
