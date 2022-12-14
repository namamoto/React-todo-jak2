import React from "react";

// CSS-in-js
const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px'
};

export const InputTodo = (props) => {
    const {todoText, onChenge, onClick, disabled} = props;
    return (
      <div style={style}>
        <input disabled={disabled} placehplder="TODOを入力" value={todoText} onChenge={onChenge} />
        <button disabled={disabled} onClick={onClick}>追加</button>
      </div>
    );
};