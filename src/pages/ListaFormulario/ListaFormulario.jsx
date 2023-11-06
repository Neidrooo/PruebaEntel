// Importamos useState de React para el manejo de estados
import { useState } from "react";

// Importamos styled para crear componentes con estilos
import styled from "styled-components";

// Importamos componentes personalizados para construir la tabla
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
} from "../../components/StyledComponents/Tabla.jsx";
import PaginacionTabla from "../../components/StyledComponents/PaginacionTabla.jsx";
import iconoBorrar from "../../assets/img/iconoBorrar.svg"; // Icono de eliminación

// Creamos un componente de estilo para el contenedor de la lista del formulario
const ContainerListaFormulario = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contenedor-lista-formulario {
    width: 60%;
    /* ... */
  }
`;
const AlertContainer = styled.div`
background-color: #0032ff; /* Azul que coincide con el botón enviar */
color: white;
padding: 15px;
margin-top: 20px;
border-radius: 5px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
position: fixed; 
top: 20px; /* Espaciado desde el top del viewport */
left: 50%;
transform: translateX(-50%); 
z-index: 1000; /* Asegurarse de que esté por encima de otros elementos */
display: ${props => props.show ? 'block' : 'none'};
`;
// Componente ListaFormulario para listar los elementos del formulario
const ListaFormulario = () => {
  //VARIABLE ALERTA
  const Alert = ({ message, show, onClose }) => {
    return (
      <AlertContainer show={show}>
        {message}
        <button
          onClick={onClose}
          style={{
            marginLeft: "15px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          X
        </button>
      </AlertContainer>
    );
  };
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("PRUEBA MENSAJE");
  //
  // Función para mostrar una alerta
  const mostrarAlerta = (message) => {
    setMessage(message);
    setShowAlert(true);
    // // Puedes configurar un timeout para ocultar la alerta después de un tiempo
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
//
  // Claves para el orden de las columnas en la tabla
  const keyOrder = [
    "Nombre",
    "Rut vendedor",
    "Patente vehículo",
    "Marca vehículo",
    "Modelo vehículo",
    "Color vehículo",
    "Eliminar",
  ];

  // Obtenemos los datos serializados del localStorage
  const serializedData = localStorage.getItem("formData");

  // Convertimos los datos JSON a un objeto de JavaScript
  const data = JSON.parse(serializedData);

  // Constantes para la paginación
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Calculamos los elementos a mostrar en la página actual
  const currentItems = data?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Función para actualizar los datos tras una eliminación
  const updateDataAfterDeletion = (updatedData) => {
    // Actualizamos los datos en el localStorage
    localStorage.setItem("formData", JSON.stringify(updatedData));
    // Forzamos la actualización del componente para reflejar los cambios
    setCurrentPage(1);
  };

  // Renderizado del componente
  return (
    <ContainerListaFormulario>
      <div className="contenedor-lista-formulario">
        <Table>
          <TableHead>
            <TableRow>
              {keyOrder.map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <tbody>
            {data?.length > 0 && (
              <TableBody
                data={currentItems}
                onDelete={updateDataAfterDeletion}
                mostrarAlerta={mostrarAlerta}
              />
            )}
          </tbody>
          <PaginacionTabla
            thead={keyOrder}
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            onChangePage={setCurrentPage}
          />
        </Table>
        {showAlert && (
          <Alert
            message={message}
            show={showAlert}
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    </ContainerListaFormulario>
  );
 
};
const TableBody = ({ data, onDelete,mostrarAlerta }) => {
  try {
    const eliminarData = (id) => {
      const updatedData = data.filter((item) => item.id !== id);
      onDelete(updatedData);
      mostrarAlerta("Se ha eliminado el registro");
    };

    return data.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{item.nombre}</TableCell>
          <TableCell>{item.rut}</TableCell>
          <TableCell>{item.patente}</TableCell>
          <TableCell>{item.marca}</TableCell>
          <TableCell>{item.modelo}</TableCell>
          <TableCell>{item.color}</TableCell>
          <TableCell>
            <img
              src={iconoBorrar}
              alt="icono borrar"
              style={{ cursor: "pointer" }}
              onClick={() => eliminarData(item?.id)}
            />
          </TableCell>
        </TableRow>
      );
    });
  } catch (error) {
    mostrarAlerta("Error al eliminar el registro");
    console.log(error);
  }
};

export default ListaFormulario;
