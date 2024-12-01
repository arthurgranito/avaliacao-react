import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detalhes = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState({})
    const [carregamento, setCarregamento] = useState(false)
    const [quantidade, setQuantidade] = useState(1)

    useEffect(() => {
        buscarProduto()
    }, [])

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    const aumentarQuantidade = () => {
        if (quantidade < 15) {
            setQuantidade(quantidade + 1);
        } else {
            Toastify({
                text: "Quantidade máxima atingida!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#313131",
                    marginTop: "75px",
                    color: "#ddd",
                },
            }).showToast();
        }
    }

    const buscarProduto = () => {
        setCarregamento(true);
        fetch(`http://localhost:3000/produtos/${id}`)
            .then(response => response.json())
            .then(produtoAchados => {
                setProduto(produtoAchados);
                console.log(produtoAchados)
            })
            .finally(() => {
                setCarregamento(false)
            })
    }

    const realizarCompra = () => {
        Toastify({
            text: `Compra de ${quantidade} peças realizada com sucesso!`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#313131",
                marginTop: "75px",
                color: "#fff",
            },
        }).showToast();
        setQuantidade(1);
    }

    return (
        <>
            <div className="containerDetalhes">
                {carregamento &&
                    <div className="carregamento">
                        <div className="bolinha"></div>
                    </div>
                }

                <div className="cardDetalhes">
                    <img src={`${produto.imgUm}`} alt={produto.nome} />

                    <div className="dados">
                        <div className="cima">
                            <h1>{produto.nome}</h1>
                            <h2>R$ {produto.preco}</h2>
                            <p className="parcela">{produto.parcela}</p>
                        </div>

                        <p>{produto.descricao}</p>

                        <div className="baixo">
                            <div className="compra">
                                <div className="quantidade">
                                    <button onClick={() => {
                                        diminuirQuantidade()
                                    }}>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <span>{quantidade}</span>
                                    <button onClick={() => {
                                        aumentarQuantidade()
                                    }}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>

                                <button className="comprarButton" onClick={() => {
                                    realizarCompra()
                                }}>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalhes;