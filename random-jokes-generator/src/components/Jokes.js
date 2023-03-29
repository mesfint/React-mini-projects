import React,{useEffect, useState} from 'react'
import spinner from '../assets/spinner1.jpg'

const Jokes = () => {
    const[randJoke, setRandJoke] = useState({})
    const[loading, setLoading] = useState(true)

 const url = "https://api.chucknorris.io/jokes/random"

 const fetchRandonJokes = ()=>{
    setLoading(true)
   fetch(url)
   .then(response=>{
     return response.json()

   })
   .then((data)=>{
     setRandJoke(data)
        setLoading(false)
     console.log(data)

   })
  
 }

 useEffect(()=>{
   fetchRandonJokes()
 },[])


  return (
    <section className='--flex-center --100vh --bg-primary'>
    <div className="container --card --bg-light --p">
        <h2>Random Jokes Generator</h2>
        <div className="--line"></div>
        {loading ? (<img src={spinner} alt="spinner" width={100} /> ) : (
            <div className="--flex-center">
            <h4>Joke id: {randJoke.id}</h4>
            <p>{randJoke.value}</p>
            </div>
        )}
           
            <br />
            <button onClick={fetchRandonJokes} className="--btn --btn-primary">
                Generate Joke
            </button>
        
    </div>

    </section>
  )
}

export default Jokes