import React, { useEffect, useState } from "react";
import "./App.css";
import TagForm from "./components/TagForm";

function App() {
  const [inputKey, setInputKey] = useState(0);
  const [input, setInput] = useState(["tag-0"]);
  const [tags, setTags] = useState([{ name: "", key: "tag-0" }]);

  const addForm = () => {
    const key = inputKey + 1;
    setInputKey(key);
  };

  const deleteInput = (index: number) => {
    const inputs = [...input]
    inputs.splice(index, 1)
    setInput(inputs)
  }

  const submit = () => {
    
  }

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  useEffect(() => {
    if (inputKey !== 0) {
      console.log(inputKey);
      setInput([...input, `tag-${inputKey}`]);
    }
  }, [inputKey]);

  return (
    <div className="App">
      <form>
        <h1>Form</h1>
        {input.map((input, i) => (
          <div key={input}>
            <TagForm formKey={input} setTags={setTags} tags={tags} /><button onClick={() => {deleteInput(i)}}>-</button>
          </div>
        ))}
      </form>
      <button onClick={addForm}>+</button>
      <button onClick={submit}>SUBMIT</button>
    </div>
  );
}

export default App;
