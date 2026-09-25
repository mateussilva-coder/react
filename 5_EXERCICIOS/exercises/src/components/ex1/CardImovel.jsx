import "./CardImovelStyle.css"

const formatarPreco = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
};

const CardImovel = ({imovel, onDeletar, onAdicionarLead}) => {

    const precoFormatado = formatarPreco(imovel.preco)

  return (
    <div style={{border: imovel.isDestaque ? '1px solid green' : '1px solid #ccc', borderRadius:"8px"}}>
        <h3>{imovel.titulo}</h3>
        <p>Preco: {precoFormatado}</p>
        <p>Canal: {imovel.canal}</p>
        <p>Qtd Leads: {imovel.leadsZap}</p>

        <button onClick={() => onAdicionarLead(imovel.id)}>Chamar no ZAP</button>
        <button onClick={() => onDeletar(imovel.id)}>Deletar Imóvel</button>
    </div>
  )
}

export default CardImovel