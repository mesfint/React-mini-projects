import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchGitUsers= async()=>{
      try {

          setLoading(true);
          setError(false);
              const response = await fetch(url)
              console.log(response)
              if(!response.ok){
                  throw new Error('Something went wrong')

              }
              const data = await response.json();
              setData(data)
              setLoading(false);
  
      } catch (error) {
          console.log(error.message)
          setError(true)
          setLoading(false);
          
      }

  }

  useEffect(() => {
      // fetch('https://api.github.com/users')
      // .then(res => res.json())
      // .then(data => setUsers(data))
      fetchGitUsers();
  }, [url])

  return {data, loading, error}
  
}

export default useFetch