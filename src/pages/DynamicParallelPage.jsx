import { useQueries } from 'react-query'
import axios from 'axios'

const DynamicParallelPage = ({heroIds}) => {

  const fetchSuperHero = async (heroId) => {
    const response = await axios.get(`http://localhost:4000/superheroes/${heroId}`)
    return response.data
  }

  const heroMap = heroIds.map((id) => {
    return {
      queryKey: ['super-hero', id],
      queryFn: () => fetchSuperHero(id)
    }
  })

  const queryResults = useQueries({
    queries: heroMap
  })
  
  return (
    <>
    <div>DynamicParallelPage</div>
    {queryResults.map((result) => (
      <div key={result.data?.name}>
        {result.data?.name}
      </div>
    ))}
    </>
  )
}

export default DynamicParallelPage