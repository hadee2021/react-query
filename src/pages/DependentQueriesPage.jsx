import { useQuery } from 'react-query'
import axios from 'axios'

const DependentQueriesPage = ({email}) => {

  const fetchUserEmail = async (email) => {
    const response = await axios.get(`http://localhost:4000/users/${email}`)
    return response.data
  }

  const fetchCoursesByChannelId = async (channelId) => {
    const response = await axios.get(`http://localhost:4000/channels/${channelId}`)
    return response.data
  }


  const {data : user} = useQuery(
    ['user', email],
    () => fetchUserEmail(email)
  )
  const channelId = user?.channelId
  console.log(channelId)

  useQuery(
    ['courses',channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled : !!channelId
    }
  )

  return (
    <div>DependentQueriesPage</div>
  )
}

export default DependentQueriesPage