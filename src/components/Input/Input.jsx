const Input = ({ task, changeHandler, enterKeyHandler }) => {
  return (
    <input
      type="text"
      value={task}
      onChange={(e) => changeHandler(e.target.value)}
      onKeyUp={(e) => {
        if(enterKeyHandler && e.key === 'Enter'){
          enterKeyHandler();
          
        } 
      }}
    />
  );
};

export default Input;
