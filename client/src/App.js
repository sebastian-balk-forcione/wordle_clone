import { useEffect, useState } from "react";

import Keyboard from "./Keyboard";

const App = () => {
  const [word, setWord] = useState([]);
  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=5
    `)
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0].split(""));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Keyboard></Keyboard>
    </>
  );
};

export default App;
