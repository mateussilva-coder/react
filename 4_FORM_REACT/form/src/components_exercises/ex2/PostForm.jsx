import React, { useState } from 'react'

const PostForm = ({onAddPost}) => {

    const [autor, setAutor] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [importante, setImportante] = useState(false)

    const atualizarAutor = (e) => {
        setAutor(e.target.value)
        
    }

    const atualizarMensagem = (e) => {
        setMensagem(e.target.value)
        
    }

    const atualizarImportante = () => {
        setImportante(!importante)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!autor.trim() || !mensagem.trim()){
            return
        }

        const newPost = {id: Date.now(), autor: autor, mensagem: mensagem, isImportante: importante, curtidas: 0}

        onAddPost(newPost)

        setAutor("")
        setMensagem("")
        setImportante(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="autor">Insira o nome do autor: </label>
        <input type="text" name='autor' id='autor' value={autor} onChange={atualizarAutor}/>

        <label htmlFor="mensagem">Insira a mensagem: </label>
        <textarea id='mensagem' value={mensagem} onChange={atualizarMensagem}></textarea>

        <input type="checkbox" id='importante' checked={importante} onChange={atualizarImportante}/>
        <label htmlFor="importante">Importante</label>

        <input type="submit" value={"enviar"} />
    </form>
  )
}

export default PostForm