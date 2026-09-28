import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(null)
  const [loading, setLoading] = useState(false)

  // 1. Prepara a configuração do envio
  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      setMethod(method) // 👈 Faltava salvar o estado do method
    }
  }

  // 2. Efeito de Leitura (GET)
  useEffect(() => {
    setLoading(true) // Atualiza o estado de loading para true antes de iniciar a requisição
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()
      setLoading(false) // Atualiza o estado de loading para false após a conclusão da requisição
      setData(json)
    }

    fetchData()
  }, [url, callFetch])

  // 3. Efeito de Envio (POST)
  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        setLoading(true) // Atualiza o estado de loading para true antes de iniciar a requisição
        let fetchOptions = [url, config]

        const res = await fetch(...fetchOptions)
        const json = await res.json()

        setCallFetch(json) // Atualiza a chave para disparar o GET novamente
        setLoading(false) // Atualiza o estado de loading para false após a conclusão da requisição
      }
    }

    httpRequest() // Executa a função dentro do efeito
  }, [config, method, url]) // Rodará sempre que config mudar

  return { data, httpConfig, loading }
}