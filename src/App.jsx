import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Card } from './Components/Card'
import { Error } from './Components/Error'
function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [completed, setCompleted] = useState(false);
  const [info, setInfo] = useState('')
  const [error, setError] = useState(false);

  function handleSearch(e){
    e.preventDefault();
    if(!city||!country){
      alert('Todos los campos son obligatorios')
      return;
    }
    getData()
  }
  async function getData(){
    try{
      const id = '51b8eb88e945e2a6ffe283fbcadbec28';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${id}`;
      let data = await fetch(url);
      let res = await data.json();
      if(res.cod>=200 && res.cod<=300){
        setCompleted(true)
        setInfo(res);
      }else{
        setError(true);
        setTimeout(()=>{
        setError(false)
        },1500)
      }

    }catch(e){
      console.log(`No se ha encontrado la ciudad\nError: ${e}`)
      
    }
  }
  return (
    <div className="App">
      <h2>WEATHER APP</h2>
      <form action="">
        <label htmlFor="city">Enter a city:</label>
        <input type="text" name="" id="city" placeholder='Barcelona..' 
          onChange={e => setCity(e.target.value)}/>
        <label htmlFor="country">Select a country:</label>
        <select name="" id="select" onChange={e => setCountry(e.target.value)}>
          <option value="" selected disabled id='select-opt'>Choose</option>
          <option value="AR" id='select-opt'>Argentina</option>
          <option value="CO" id='select-opt'>Colombia</option>
          <option value="CR" id='select-opt'>Costa Rica</option>
          <option value="ES" id='select-opt'>España</option>
          <option value="US" id='select-opt'>Estados Unidos</option>
          <option value="MX" id='select-opt'>México</option>
          <option value="PE" id='select-opt'>Perú</option>
          <option value="PE" id='select-opt'>Japon</option>
          <option value="GER" id='select-opt'>Alemania</option>
        </select>
        <button type="submit" onClick={handleSearch} id='search'>Search city</button>
      </form>
      {error&&(
        <Error/>
      )}
      {completed?
        <Card
          info = {info}
        />: <h2>Choose a city and a country :)</h2>}
    </div>
  )
}

export default App
