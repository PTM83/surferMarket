
import { useEffect, useState } from 'react'
import { fetchData } from '../service/apiService';

export const useUsers = () => {

  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true);
  const [createError, setCreateError] = useState(null);
  
  useEffect(() => {
    async function loadProducs() {
      try {
        const endPoint = '/api/auth/register'
        const data = await fetchData(endPoint);
        setUserList(data);
      } catch (err) {
        setCreateError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducs()
  }, [])

  return { userList, setUserList, loading, createError }
}

