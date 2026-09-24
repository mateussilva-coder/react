import React from 'react'

const PostCard = ({post, onDeletePost, onLikePost}) => {

  const curtir = () => {
    onLikePost(post.id)
  }

  const deletar = () => {
    onDeletePost(post.id)
  }

  return (
    <article style={post.isImportante ? {backgroundColor : '#ADD8E6', borderRadius: "12px"} : {}}>
      <h3>{post.autor}</h3>
      <p>Mensagem: {post.mensagem}</p>
      <p>Quantidade de curtidas: {post.curtidas}</p>

      <button onClick={curtir}>Curtir</button>
      <button onClick={deletar}>Deletar</button>
    </article>
  )
}

export default PostCard