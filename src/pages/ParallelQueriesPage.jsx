import { useQuery } from 'react-query'
import axios from 'axios'

const ParallelQueriesPage = () => {
  const fetchSuperHeroes = async () => {
    const response = await axios.get('http://localhost:4000/superheroes')
    return response.data
  }

  const fetchFriends = async () => {
    const response = await axios.get('http://localhost:4000/friends')
    return response.data
  }

  const { data: superHeroes } = useQuery(['super-heroes'], fetchSuperHeroes)
  const { data: friends } = useQuery(['friends'], fetchFriends)

  return (
    <>
      <div>ParallelQueriesPage</div>
      {superHeroes?.map(hero => (
        <div key={hero.id}>{hero.name}</div>
      ))}
      {friends?.map(friend => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  )
}

export default ParallelQueriesPage