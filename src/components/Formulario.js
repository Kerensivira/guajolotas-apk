import React, { Fragment, useState } from 'react';



const Formulario = () => {
  return (
     <Fragment>
        <h2 className='mt-5'>Formulario de Registro</h2>
        <form className='row'>
          <div className='col-md-6'>
          <input className='form-control' type="name" placeholder='Nombre Completo' />
          </div>
          <div className='col-md-6'>
          <input className='form-control' type="email" placeholder='Correo Electronico' />
          </div>
          <div className='col-md-6'>
          <input className='form-control' type="password" placeholder='Contraseña' />
          </div>
          <div className='col-md-6'>
          <input className='form-control' type="password" placeholder='Repita su Contraseña' />
          </div>

        
        </form>
    </Fragment>
    
    
    );
};

export default Formulario;
