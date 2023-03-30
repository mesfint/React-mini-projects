import React,{useEffect, useState} from 'react'
import spinner from '../assets/spinner1.jpg'
import axios from 'axios'

const Jokes = () => {
    const[randJoke, setRandJoke] = useState({})
    const[loading, setLoading] = useState(true)

 const url = "https://api.chucknorris.io/jokes/random"


 const fetchRandonJokes =async ()=>{
    //setLoading(true)
//    fetch(url)
//    .then(response=>{
//      return response.json()

//    })
//    .then((data)=>{
//      setRandJoke(data)
//         setLoading(false)
//      console.log(data)

//    })
    // setLoading(true)
    // axios.get(url)
    //   .then((response) => {
    //     setRandJoke(response.data)
    //     setLoading(false)
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    setLoading(true)
    try {
      const response = await axios.get(url)
      setRandJoke(response.data)
      setLoading(false)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRandonJokes()
    return ()=>{
      console.log('clean up')
    }
  }, [])


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