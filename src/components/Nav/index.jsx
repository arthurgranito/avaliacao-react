import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to='/' className="linkLogo">
                        <h1>
                            Botafogo Shop
                            <i className="fa-solid fa-bag-shopping"></i>
                        </h1>
                    </Link>
                </div>

                <ul className="links">
                    <Link to="/" className="link">
                        <li>
                            Início
                        </li>
                    </Link>

                    <Link to="/vitrine" className="link">
                        <li>
                            Vitrine
                        </li>
                    </Link>

                    <Link to="/sobre" className="link">
                        <li>
                            Sobre
                        </li>
                    </Link>
                </ul>

                <div className="menu-hamburguer">
                    <button id="menuHamburguer" onClick={() => {
                        const iconeMenu = document.getElementById('iconeMenu');
                        if (iconeMenu.classList.contains('fa-bars')) {
                            iconeMenu.classList.remove('fa-bars');
                            iconeMenu.classList.add('fa-x');
                            fundoMenu.style.display = 'flex';
                            menu.classList.add('active');
                        } else {
                            iconeMenu.classList.remove('fa-x');
                            iconeMenu.classList.add('fa-bars');
                            fundoMenu.style.display = 'none';
                            menu.classList.remove('active')
                        }
                    }}>
                        <i id="iconeMenu" className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>

            <div className="fundo-menu" id="fundoMenu"></div>

            <div className="menu" id="menu">
                <ul className="links">
                    <Link to="/" className="link">
                        <li>
                            Início
                        </li>
                    </Link>

                    <Link to="/vitrine" className="link">
                        <li>
                            Vitrine
                        </li>
                    </Link>

                    <Link to="/sobre" className="link">
                        <li>
                            Sobre
                        </li>
                    </Link>
                </ul>
            </div>

        </>
    )
}

export default Nav;