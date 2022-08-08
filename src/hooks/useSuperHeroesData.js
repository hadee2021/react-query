import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = async () => {
  const response = await axios.get('http://localhost:4000/superheroes')
  return response.data
}

const useSuperHeroesData = () => {
  return useQuery(
    ['super-heroes'], 
    fetchSuperHeroes,
    {
      cacheTime: 5000,
      staleTime: 3000,
      onSuccess: () => console.log('성공')
    })
  }

export default useSuperHeroesData