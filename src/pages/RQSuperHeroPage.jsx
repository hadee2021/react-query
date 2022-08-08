import { useSuperHeroData } from '../hooks/useSuperHeroData' 
import { useParams } from 'react-router-dom'
const RQSuperHeroPage = () => {
  const { heroId } = useParams()
  const { 
    data, 
    isLoading, 
    error, 
    isError, 
    isFetching
  } = useSuperHeroData(heroId)

  if(isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div>Super Hero details</div>
      <div>{data?.name}</div>
      <div>{data?.alterEgo}</div>
    </>
  )
}

export default RQSuperHeroPage