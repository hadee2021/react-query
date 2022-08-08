import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const RQSuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

  const fetchSuperHeroes = async () => {
    const response = await axios.get('http://localhost:4000/superheroes')
    return response.data
  }

  const { 
    data, 
    isLoading, 
    error, 
    isError, 
    refetch,
    isFetching
  } = useQuery(       
    ['super-heroes'], 
    fetchSuperHeroes,
    {
      cacheTime: 5000,
      staleTime: 3000,
      onSuccess: () => console.log('성공')
    }
  )

  const addSuperHero = (hero) => {
    return axios.post(`http://localhost:4000/superheroes`, hero)
  }

  useMutation(addSuperHero)

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addSuperHero(hero)
  }

  if(isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if(isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2> RQ Super Heroes Page</h2>
      <div>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>refetch</button>
      {data?.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  )
}

export default RQSuperHeroesPage