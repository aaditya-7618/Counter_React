import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMyData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <Loading></Loading> : <Counter ></Counter>}</>
  );
}

export default App;
