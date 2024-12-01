import fotoPerfil from '../../assets/fotoPerfil.jpg';

const Sobre = () => {
    return (
        <>
            <main>
                <h1 className="titulo">Sobre Mim</h1>

                <div className="containerSobre">
                    <div className="contato">
                        <a href="https://wa.me/+5521976318326" target='_blank'>
                            <button>
                                <i class="fa-brands fa-whatsapp"></i>
                            </button>
                        </a>

                        <a href="https://www.instagram.com/arthur.granito/" target='_blank'>
                            <button>
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                        </a>

                        <a href="https://github.com/arthurgranito" target='_blank'>
                            <button>
                                <i className="fa-brands fa-github"></i>
                            </button>
                        </a>
                    </div>

                    <img src={fotoPerfil} alt="Foto de Perfil" />

                    <div className="dados">
                        <h1 className='programador'>Programador Front-end</h1>
                        <p>Meu nome é Arthur Granito, sou programador front-end com curso realizado na Tech4me no ano de 2024. Nascido em Petrópolis, tenho 18 anos e o mais importante: <span className='campeao'>Sou campeão da América!</span></p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Sobre;