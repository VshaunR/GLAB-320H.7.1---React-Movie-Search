import { useState,useEffect } from 'react'
import Form from './components/Form';
import MovieDiplay from './components/MovieDisplay';
import axios from 'axios';
function App() {
 
  const [data, setData] = useState(null)

  async function handleSearch(searchTerm){
    let res;
 
    try {

      if(searchTerm ==""){
        let min = 1000000;
        let max= 5000000;
        let randNum = Math.round(Math.random()*(max-min))+min;
        console.log(randNum)
        let    url =`http://www.omdbapi.com/?apikey=3c395a15&i=tt${randNum}`
        res= await axios.get(url)
      }else{
        let url = "http://www.omdbapi.com/?apikey=3c395a15"
       res = await axios.get(`${url}&t=${searchTerm}`)
        const movieData = res.data
        setData(movieData)
      }

   
    } catch (err) {
      
    }
  }
  useEffect(()=>{
    handleSearch("")
  },[])

  return (
    <div className='App'>
    <Form searchMovie={handleSearch} />
    <MovieDiplay movie= {data} />
    </div>
  )
}

export default App
