import {useState, useEffect} from 'react';

const UseFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getData = async () => {

            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            setLoading(false)
        }
        
        getData()

    },[url])

    const postData = async (newItem) => {
        setLoading(true)
        const res = await fetch (url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })

        const savedItem = await res.json()

        setData((prev) => [...prev, savedItem])
        setLoading(false)
    }

    const deleteData = async (id) => {
        setLoading(true)
        await fetch (`${url}/${id}` ,{method: 'DELETE'})

        setData((prevData) => prevData.filter(item => item.id !== id))
        setLoading(false)
    }

    return {data, loading, postData, deleteData}
}