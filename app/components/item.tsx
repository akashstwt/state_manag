"use client";
import useDataStorePersisted from "../store/state_store";

const ExampleComponent = () => {
  const { datas, addData, removeData, toggleData } = useDataStorePersisted();

  return (
    <div>
      <button onClick={() => addData({ id: Date.now(), completed: false })}>
        Add Item
      </button>
      {datas.map((item) => (
        <div key={item.id}>
          <span>{item.completed ? "✅" : "❌"}</span>
          <button onClick={() => toggleData(item.id)}>Toggle</button>
          <button onClick={() => removeData(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;