import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHero = async (heroId) => {
  const response = await axios.get(`http://localhost:4000/superheroes/${heroId}`)
  return response.data
}

export const useSuperHeroData = (heroId) => {
  return useQuery(
    ['super-hero',heroId],
    () => fetchSuperHero(heroId)
  )
}