import React , {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';


function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data)
      })
  }, [])


  return (
    <div className="App">
      <Main data={data} setData={setData}/>
    </div>
  );
}

export default App;
