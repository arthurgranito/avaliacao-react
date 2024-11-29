import img from '../../assets/fotoInicio.jpg'
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <>
            <div className="containerInicio">
                <main className='mainInicio'>
                    <img src={img} alt="Foto de Início" />

                    <div className="dados">
                        <div className="textos">
                            <h1>Botafogo Shop</h1>
                            <p>A melhor loja de roupas para você comprar suas peças preferidas do glorioso!</p>
                        </div>

                        <Link to='/vitrine' className='link'>
                            <button>
                                Ver Vitrine de Produtos
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Inicio;