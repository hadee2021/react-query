import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

const PaginatedQuery = () => {

  const [pageNumber, setPageNumber] = useState(1)

  const fetchColors = async (pageNumber) => {
    const response = await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
    return response.data
  }

  const { 
    isLoading, 
    isError, 
    error, 
    data,
    isFetching
  } = useQuery(
    ['color', pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true
    }
  )

  if(isLoading) {
    return <h2>Loading...</h2>
  }
  if(isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <div>
        {data?.map((color) => (
          <div key={color.id}>
            <h2>
              {color.id} . {color.label}
            </h2>
          </div>
        ))}
      </div>
      <div>
        <button 
          onClick={() => setPageNumber(page => page - 1)}
          disabled={pageNumber === 1}
        >
          이전 페이지
        </button>
        <button 
          onClick={() => setPageNumber(page => page + 1)}
          disabled={pageNumber === 4}
        >
          다음 페이지
        </button>
      </div>
      {isFetching &&
        <h2>이전데이터 유지하면서 로딩</h2>
      }
    </>
  )
}

export default PaginatedQuery