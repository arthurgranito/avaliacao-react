import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <Link to={`/detalhes/${props.id}`} className="linkCard">
                <div className="card">
                    <img src={props.img} alt={props.nome} />

                    <h3>{props.nome}</h3>

                    <p className="preco">R$ {props.preco}</p>

                    <button>
                        Ver Detalhes
                    </button>
                </div>
            </Link>
        </>
    )
}

export default Card;