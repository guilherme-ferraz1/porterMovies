import { useEffect, useState, useCallback } from 'react'
import { API_KEY } from '../../variables'
import axios from 'axios'

export const useListMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handlePagination = () => {
    if (!loading) {
      setPage(page + 1)
    }
  }
    
  const fetchMovies = useCallback((currentPage, movies = []) => {
    setLoading(true)
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        page: currentPage
      }
    })
    .then(({ data }) => setMovies([...movies, ...data.results]))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchMovies(page, movies)
  }, [page])

  return {
    movies,
    loading,
    handlePagination
  }
}
