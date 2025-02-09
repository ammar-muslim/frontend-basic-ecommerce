import { useEffect , useState } from "react"
import { fetchApi } from "./fetchApi"

const useFetch = (endPoint) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

useEffect(() => {
    const fetchData = async () => {
try {
    setLoading(true)
    const res = await fetchApi.get(endPoint)
    setData(res.data.data)
} catch (error) {
    setError(error)
}finally {
    setLoading(false)
}
}
fetchData()
}, [endPoint] ) 

return { data, loading, error }
}

export default useFetch
