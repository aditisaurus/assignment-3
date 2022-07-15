import React , {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';


function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data);
      })
  }, [])


  return (
    <div className="App">
      {data?.length>0 &&
      <Main data={data} setData={setData}/>}
    </div>
  );
}

export default App;
