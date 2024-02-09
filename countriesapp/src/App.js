import logo from './logo.svg';
import './App.css';
import Country from './Country';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    const fetchData = async () =>{
      try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        setData(data);
      }
      catch (error){
        console.log(error);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="App">
      {data && 
        data.map((country) => {
          return (<Country name={country.name.common} flag={country.flags.png}/>)
        })
      }
      
      
    </div>
  );
}

export default App;
