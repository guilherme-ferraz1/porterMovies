import { useEffect, useState, useCallback } from 'react'
import { API_KEY } from '../../variables'
import axios from 'axios'

export const useFetchDetails = (id) => {
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(false)
    
  const fetchDetails = useCallback(() => {
    setLoading(true)
    return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR'
      }
    })
    .then(({ data }) => setDetails(data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchDetails()
  }, [fetchDetails])

  return {
    details,
    loading
  }
}
