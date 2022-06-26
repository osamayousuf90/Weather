import './App.css';
import Weather from './components/Weather';
import Loader from './components/Loader/logo-loader';
import "./components/Weather/style.css";
import "./components/Loader/logo-loader/style.css"
import { useEffect , useState} from 'react';

export const api = {
  key : "c1b0e7933bd0ce0407957c8d5eae1891",
  base : "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
       <>
      {loading === false ? (
       <Weather/>
      ) : (
        <Loader/>
      )} 
        
       </>
  );
}

export default App;
