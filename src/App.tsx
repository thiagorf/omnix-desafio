import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-lg text-orange-300">Hello World!</h1>
    </div>
  );
}

export default App;
