import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledLink from '../StyledComponents/StyledLink';


import EntelLogo from '../../assets/img/LogoEntel.svg' ;

const ContainerHeader = styled.header`
    width: 100%;
    height: 90px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    .contenedor-navegacion {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        margin-right: 128px;
        gap: 16px;
    }
    .vertical-hr {
        display: block;
    }
    img{
        margin-left: 24px;
    }


    @media (max-width: 600px) {
        .contenedor-navegacion{
            margin: 8px 8px 0px 0px;
            width: 70%;
            height: auto;

        }
        .vertical-hr{
            margin-top: -6px;
            display: visible;
            border-color: rgba(215, 215, 215, 1);
            background-color: rgba(215, 215, 215, 1);
            width: 1px;
            height: 16px;
        }
        img{
            width: 44px;
            height: 33px;
        }
    }
`;

const Header  = () =>{

    return(
        <ContainerHeader>
            <img src={EntelLogo} alt="Logo" />

            <div className='contenedor-navegacion'>
                <StyledLink activeClassName="active" activeColor={"rgba(243, 245, 255, 1)"} to="/Formulario">
                    Formulario
                </StyledLink>
                <div className="vertical-hr"></div>
                <StyledLink activeClassName="active" activeColor="rgba(243, 245, 255, 1)" to="/ListaFormulario">
                    Lista formulario
                </StyledLink>
            </div>
        </ContainerHeader>
    )
}
export default Header;