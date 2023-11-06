// STYLED COMPONENTS
import styled from "styled-components";
import { validateRut } from "@fdograph/rut-utilities";
import InputForm from "../../components/StyledComponents/InputForm";
import {
  ButtonForm,
  ButtonContainer,
} from "../../components/StyledComponents/ButtonForm";
// VARIABLES FORMULARIO
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
//IMAGENES
import PortadaFormularioImg from "../../assets/img/IlustracionPortadaFormulario.svg";
//VARIABLES CONTEXT
import { useContext, useEffect, useState } from "react";
import { MarcaContext } from "../../context/dataContext";
////
// // Styled alert container

const ContainerFormulario = styled.div`
  width: 100%;

  .contenedor-formulario-portada {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .centrar-elementos-portada {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        color: rgba(0, 46, 255, 1);
        font-weight: 400;
        font-size: 56px;
      }
    }
    hr {
      width: 100%;
      border: 1px solid rgba(204, 204, 204, 1);
      background: rgba(204, 204, 204, 1);

      margin-top: -88px;
    }
    .contenedor-formulario {
      width: 60%;
      h2 {
        font-size: 30px;
        font-weight: 600;
        color: rgba(25, 25, 25, 1);
      }
      p {
        font-size: 18px;
        font-weight: 400;
        color: rgba(25, 25, 25, 1);
      }
      h3 {
        color: rgba(12, 12, 12, 1);
        font-size: 20px;
      }
      .formulario-parte-1 {
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
      }
      .formulario-parte-2 {
        width: 100%;
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding-bottom: 40px; // Aumenta este valor para alejar más la línea del contenido
        border-bottom: 1px solid rgba(204, 204, 204, 1);
      }
    }
  }
  @media (max-width: 700px) {
    .contenedor-formulario-portada {
      .centrar-elementos-portada{
        margin-top: 16px;
        width: 85%;
        align-items: start;
        h1{
          font-size: 24px;
        }
        img{
          width: 144px;
          height: 144px;
        }
      }
      hr{
        margin-top: -31px;
      }

      .contenedor-formulario {
       
        width: 85%;
        button {
          width: 80%;
          display: block; 
          margin: 0 auto; 
          margin-top: 20px;
        }
        p{
          text-align: justify;
        }
        .formulario-parte-1{
          grid-template-columns: 1fr;
        }
        .formulario-parte-2{
          grid-template-columns: 1fr;
          
        }
      }
      
    }
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
const Formulario = () => {
//VARIABLE ALERTA
  useEffect(() => {
    const jsonData = JSON.stringify([
    
      {"nombre":"Elvis","rut":"20.328.530-2","patente":"2W123E","marca":"4","modelo":"Saxo","precio":1232323,"color":"Azul","id":1},
      {"nombre":"Elvis Olmedo","rut":"20.328.530-2","patente":"123DSD","marca":"1","modelo":"A4","precio":123213132,"color":"Gris","id":2},
      {"nombre":"Juan Onate","rut":"4.808.771-K","patente":"123232","marca":"3","modelo":"Bel Air","precio":1231232,"color":"Rojo","id":3},
      {"nombre":"Maria Lopez","rut":"17.768.994-7","patente":"1F3G5H","marca":"2","modelo":"Civic","precio":2000000,"color":"Negro","id":4},
      {"nombre":"Pedro Gómez","rut":"15.897.346-2","patente":"5T4Y6U","marca":"5","modelo":"Corolla","precio":1500000,"color":"Blanco","id":5},
      {"nombre":"Carmen Saez","rut":"13.676.980-4","patente":"8I9O0P","marca":"2","modelo":"Focus","precio":1800000,"color":"Verde","id":6},
      {"nombre":"Luis Méndez","rut":"18.456.789-K","patente":"9L8K4J","marca":"1","modelo":"Mustang","precio":3000000,"color":"Amarillo","id":7},
      {"nombre":"Ana Castro","rut":"20.506.777-3","patente":"7H6G5F","marca":"3","modelo":"Charger","precio":2500000,"color":"Morado","id":8},
      {"nombre":"Roberto Nuñez","rut":"12.345.678-9","patente":"4D3S2A","marca":"4","modelo":"Camaro","precio":2700000,"color":"Rosa","id":9},
      {"nombre":"Diana Reyes","rut":"21.234.567-8","patente":"1Q2W3E","marca":"5","modelo":"Accord","precio":1900000,"color":"Celeste","id":10},
      {"nombre":"Carlos Peña","rut":"22.345.678-5","patente":"1A2S3D","marca":"1","modelo":"Golf","precio":1700000,"color":"Turquesa","id":11},
      {"nombre":"Mónica Salas","rut":"18.765.432-1","patente":"3E4R5T","marca":"2","modelo":"Jetta","precio":1600000,"color":"Fucsia","id":12},
      {"nombre":"Diego Torres","rut":"19.876.543-K","patente":"5T6Y7U","marca":"3","modelo":"Malibu","precio":2100000,"color":"Coral","id":13}
    ])
    localStorage.setItem("formData", jsonData);
  }, []);
  const Alert = ({ message, show, onClose }) => {
    return (
      <AlertContainer show={show}>
        {message}
        <button onClick={onClose} style={{ marginLeft: '15px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>X</button>
      </AlertContainer>
    );
  };
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('PRUEBA MENSAJE');
  //
  //VARIABLES CONTEXT
  const { marcas, coloresAutos } = useContext(MarcaContext);
  //VARIABLES FORMULARIO
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [rut, setRut] = useState("");
  const [formattedPrice, setFormattedPrice] = useState("");
  //DECLARACION YUP PARA VALIDACIONES
  const schema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    rut: Yup.string()
      .matches(
        /^\d{1,3}(\.\d{3}){2}-[\dKk]$/,
        "El RUT no tiene un formato válido"
      )
      .test(
        "es-valido",
        "El RUT no es válido",
        (value) => value && validateRut(value)
      )
      .required("El RUT es requerido"),
    patente: Yup.string()
      .matches(/^[A-Z0-9]{6}$/, "La patente no tiene un formato válido")
      .required("La patente es requerida"),
    marca: Yup.string().required("La marca es requerida"),
    modelo: Yup.string().required("El modelo es requerido"),
    precio: Yup.number()
      .typeError("El precio debe ser un número")
      .positive("El precio debe ser un número positivo")
      .integer("El precio debe ser un número entero")
      .required("El precio es requerido"),

    color: Yup.string().required("El color es requerido"),
  });

  //DECLARACION REACT HOOK FORM VARIABLES
  const defaultValues = {
    nombre: "",
    rut: "",
    patente: "",
    marca: "",
    modelo: "",
    precio: "",
    color: "",
  };
  //  METODOS REACT HOOK FORM
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  // VARIABLES REACT HOOK FORM
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = methods;
  // OBSERVADOR DE CAMBIOS EN EL FORMULARIO
  const selectedBrandValue = watch("marca");
  const values = watch();
  const mostrarAlerta = (message) => {
    setMessage(message);
    setShowAlert(true);
    // // Puedes configurar un timeout para ocultar la alerta después de un tiempo
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  // FUNCION FORMULARIO EXITO
  const onSubmit = (newData) => {
    // Obtener los datos existentes de Local Storage
    let storedDataJSON = localStorage.getItem("formData");
  
    // Parsear los datos existentes a un arreglo, o crear un nuevo arreglo si no hay nada todavía
    let storedData = storedDataJSON ? JSON.parse(storedDataJSON) : [];
  
    // Asegurarte de que storedData es un arreglo. Si no es un arreglo, conviértelo en uno.
    if (!Array.isArray(storedData)) {
      storedData = [storedData];
    }
    // Determinar el próximo ID
    let nextId = storedData.length > 0 ? Math.max(...storedData.map(item => item.id)) + 1 : 1;
  
    // Agregar la clave id a newData
    newData.id = nextId;
  
    // Verificar si la patente ya existe en los datos almacenados
    const isPatenteTaken = storedData.some(item => item.patente === newData.patente);
    
    // Proceder solo si la patente no existe
    if (!isPatenteTaken) {
      // Añadir los nuevos datos al arreglo existente
      storedData.push(newData);
      
      // Convertir el arreglo actualizado a cadena JSON
      const updatedDataJSON = JSON.stringify(storedData);
      
      // Guardar en Local Storage con una clave específica
      localStorage.setItem("formData", updatedDataJSON);
      
      // Aquí debes definir mostrarAlerta, reset, defaultValues, setRut y setFormattedPrice si aún no lo has hecho
      mostrarAlerta("Formulario enviado con éxito");
      reset(defaultValues); // Asegúrate de que reset y defaultValues están definidos correctamente
      setRut(""); // Asegúrate de que setRut está definido correctamente
      setFormattedPrice(""); // Asegúrate de que setFormattedPrice está definido correctamente
      
    } else {
      console.log('La patente ya existe');
      mostrarAlerta("La patente ingresada ya existe."); // Asegúrate de que mostrarAlerta está definido correctamente
    }
  };
  // FUNCION BUSCAR MODELO SEGUN MARCA
  useEffect(() => {
    const brand = marcas.find((b) => `${b.id}` === selectedBrandValue);
    setSelectedBrand(brand || null);
  }, [selectedBrandValue]);

  // Función para formatear el RUT
  const formatRut = (rut) => {
    // Eliminar caracteres no deseados
    let cleaned = ("" + rut).replace(/[^0-9kK]+/g, "").toUpperCase();
    // Separar dígito verificador
    let result =
      cleaned.slice(-4, -1) + "-" + cleaned.substr(cleaned.length - 1);
    // Agregar puntos
    for (let i = 4; i < cleaned.length; i += 3) {
      result = cleaned.slice(-3 - i, -i) + "." + result;
    }
    return result;
  };
  const handleRutChange = (event) => {
    const { value } = event.target;
    const formattedRut = formatRut(value);
    setRut(formattedRut); // Actualizar el estado con el RUT formateado
    event.target.value = formattedRut; // Importante para actualizar el input visualmente
  };
  // FUNCION FORMATEAR PRECIO CLP
  const formatToChileanPeso = (value) => {
    // Remueve cualquier caracter que no sea número
    let numberValue = value.replace(/\D/g, "");

    // Convierte a número y formatea a peso chileno con el signo $
    let formattedValue = numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    // Añade el signo de pesos al principio
    return `$${formattedValue}`;
  };
  const handlePriceChange = (event) => {
    const { value } = event.target;
    // Limpiar el valor para dejar solo números y luego formatearlo
    const cleanNumber = value.replace(/\D/g, "");
    const formattedValue = formatToChileanPeso(cleanNumber);
    setFormattedPrice(formattedValue); // Actualizar el estado con el valor formateado
  };
  // RETORNO DEL COMPONENTE
  return (
    <ContainerFormulario>
      <div className="contenedor-formulario-portada ">
        <div className="centrar-elementos-portada">
          <h1>
            Formulario <strong>de Prueba</strong>
          </h1>
          <img src={PortadaFormularioImg} alt="Imagen portada" />
        </div>
        <hr />
        <div className="contenedor-formulario">
          <h2>Nuevo formulario</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the bed industry's standard dummy
            text ever since.
          </p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <h3>Datos del comprador: </h3>
              <div className="formulario-parte-1">
                <Controller
                  name="nombre"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Nombre completo"
                      placeholder="Ingresar nombre"
                      {...field}
                      required
                      error={error}
                    />
                  )}
                />
                <Controller
                  name="rut"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Rut vendedor"
                      placeholder="xx.xxx.xxx-x"
                      {...field}
                      onChange={(e) => {
                        handleRutChange(e);
                        field.onChange(e); // Propagar el evento de cambio al Controller
                      }}
                      value={rut} // Usar el RUT formateado como el valor del input
                      required
                      error={error}
                    />
                  )}
                />
              </div>
              <h3>Datos del vehiculo: </h3>
              <div className="formulario-parte-2">
                <Controller
                  name="patente"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Patente"
                      placeholder="Ingresar patente"
                      {...field}
                      required
                      error={error}
                    />
                  )}
                />
                <Controller
                  name="marca"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Marca"
                      {...field}
                      error={error}
                      as="select" // Esto indica que es un elemento select
                    >
                      <option value="">Selecciona una marca</option>
                      {marcas.map((marca) => (
                        <option key={marca.id} value={marca.id}>
                          {marca.nombre}
                        </option>
                      ))}
                    </InputForm>
                  )}
                />

                <Controller
                  name="modelo"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Modelo"
                      {...field}
                      as="select"
                      error={error}
                      // Deshabilitar el select si no hay marca seleccionada
                      disabled={!selectedBrand}
                    >
                      <option value="">Selecciona un modelo</option>
                      {selectedBrand &&
                        selectedBrand.modelos.map((modelo, index) => (
                          <option key={index} value={modelo}>
                            {modelo}
                          </option>
                        ))}
                    </InputForm>
                  )}
                />

                <Controller
                  name="precio"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Precio"
                      placeholder="Ingresar precio"
                      {...field}
                      onChange={(e) => {
                        handlePriceChange(e);
                        field.onChange(
                          parseInt(e.target.value.replace(/[\.\$]/g, ""))
                        ); // Quitar puntos antes de enviar al controlador
                      }}
                      value={formattedPrice} // Usar el precio formateado como valor del input
                      error={error}
                      type="text" // Cambiar a text para permitir formato personalizado
                    />
                  )}
                />
                <Controller
                  name="color"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputForm
                      label="Color"
                      {...field}
                      error={error}
                      as="select"
                    >
                      <option value="">Selecciona un color</option>
                      {coloresAutos.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </InputForm>
                  )}
                />
              </div>
              <ButtonContainer>
                <ButtonForm>Enviar</ButtonForm>
              </ButtonContainer>
            </form>
            {
              showAlert && (
                <Alert
                  message={message}
                  show={showAlert}
                  onClose={() => setShowAlert(false)}
                />
              )
            }
          </FormProvider>
          
        </div>
      </div>
    </ContainerFormulario>
  );
};

export default Formulario;
