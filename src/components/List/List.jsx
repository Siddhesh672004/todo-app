const List = ({tasks}) => {

    const listItems = tasks.map((task,index) => <li key={index}>{task}</li>);

  return (
    <div className="mt-3">
      <ul style={{display: "inline-block"}}>{listItems}
      </ul>
    </div>
  );
};

export default List;
