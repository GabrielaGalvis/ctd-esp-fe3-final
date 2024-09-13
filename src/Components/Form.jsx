import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  const [errorForm, setErrorForm] = useState(false)
  const [mensajeForm, setMensajeForm] = useState(false)

  const handleChangeName = (event)=>{
    setCustomer({...customer, name: event.target.value})
  } 

  const handleChangeEmail = (event) =>{
    setCustomer({...customer, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailRegex.test(customer.email));
    if(customer.name.trim().length > 5 && emailRegex.test(customer.email)){
      console.log('hola')
      setErrorForm(false)
      setMensajeForm(true)
    }else{
      console.log('nopis')
      setErrorForm(true)
      setMensajeForm(false)
    }
  }

  console.log(customer)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
            <input
              type="text"
              value={customer.name}
              onChange={handleChangeName}
              id ={name}
            />
            <label>Email:</label>
            <input
              type="email"
              value={customer.email}
              onChange={handleChangeEmail}
            />
            <button>Enviar</button>
      </form>

      {errorForm && <p>Por favor verifique su información nuevamente</p> }
      { mensajeForm && <p>Gracias {customer.name} te contactaremos cuanto antes via email</p>}
      
    </div>
  );
};

export default Form;

