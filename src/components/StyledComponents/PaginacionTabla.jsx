import {Footer, TableRow, TableHeader} from '../StyledComponents/Tabla';
import styled from 'styled-components';
  
const Paginacion = styled.div`
    display: flex;
    justify-content: flex-start; 
    width: 20%; 
    margin-right: 0px;
    padding: 30px 0px;
`;

const NumerosPaginacion = styled.div`
    display: flex;
    align-self: center;
    margin-right: 10px;
`;

const FlechaPaginacion = styled.button`
  border: none;
  background: #0032ff; 
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  transition: background 0.3s ease; 
  &:hover, &:focus {
    background: #0022cc;
  }
`;

const BotonPagina = styled.button`
  border: 2px solid #0032ff;
  background: #0032ff; 
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 6px 12px; 
  border-radius: 20px; 
  transition: all 0.3s ease; 

  ${props => props.active && `
    background-color: #001f66
    border-color: #001f66;
  `}

  &:hover, &:focus {
    background: #0022cc;
    border-color: #0022cc;
  }

  &:active {
    background-color: #001f66;
    border-color: #001f66;
  }
`;


const Pagination = ({thead = [], currentPage, totalPages, totalItems, ITEMS_PER_PAGE, onChangePage}) =>{
    const firstItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const lastItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);
    return(
        <Footer>
            <TableRow>
                <TableHeader style={{borderBottom:'0px', padding: '0px'}} colSpan={`${thead?.length}`}>
                    <div style={{
                            display: 'grid',
                            gridTemplateColumns: '8fr 1fr',
                            width: '100%'
                    }}>
                        <div style={{fontSize: '16px', width: '100%', alignSelf: 'center'}}>
                            {totalItems > 0 ? (
                                <p style={{marginLeft: '70px'}}>Mostrando registros del {firstItem} al {lastItem} de un total de {totalItems} registros.</p>
                                ) :
                                (<p style={{marginLeft: '70px'}}>Sin registros</p>)
                            }
                        </div>
                        <Paginacion>
                            {totalPages > 1 && (
                                <>
                                    <FlechaPaginacion onClick={() => currentPage > 1 && onChangePage(currentPage - 1)}>
                                        {"<"}
                                    </FlechaPaginacion>
                                    <NumerosPaginacion>
                                        {Array.from({ length: totalPages }, (_, i) => i+1 !== currentPage ? (
                                            <BotonPagina key={i} onClick={() => onChangePage(i + 1)}>
                                                {i + 1}
                                            </BotonPagina>
                                        ) : (
                                            <BotonPagina key={i} className='active' onClick={() => onChangePage(i + 1)}>
                                                {i + 1}
                                            </BotonPagina>
                                        ))}
                                    </NumerosPaginacion>
                                    <FlechaPaginacion onClick={() => currentPage < totalPages && onChangePage(currentPage + 1)}>
                                        {">"}
                                    </FlechaPaginacion>
                                </>
                            )
                            }
                        </Paginacion>   
                    </div>
                </TableHeader>
            </TableRow>
        </Footer>
    )
}

export default Pagination;