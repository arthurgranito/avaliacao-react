import Card from "../Card";
import { useState, useEffect } from "react";

const Vitrine = () => {
    const [produtos, setProdutos] = useState([]);
    const [carregamento, setCarregamento] = useState(false);

    useEffect(() => {
        buscarProdutos();
    }, [])

    const buscarProdutos = () => {
        setCarregamento(true);
        fetch('http://localhost:3000/produtos')
            .then(response => response.json())
            .then(produtosAchados => {
                setProdutos(produtosAchados);
                console.log(produtosAchados)
            })
            .finally(() => {
                setCarregamento(false)
            })
    }

    return (
        <>
            <main>
                <h1 className="titulo">Produtos</h1>

                <div className="container">
                    {carregamento &&
                        <div className="carregamento">
                            <div className="bolinha"></div>
                        </div>
                    }

                    {
                        produtos.map(produto => {
                            return (
                                <Card img={produto.imgUm} nome={produto.nome} id={produto.id} preco={produto.preco} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Vitrine;

