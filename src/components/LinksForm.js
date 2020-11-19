import React, { useState } from 'react';

const LinksForm = () => {

    const initialStateValues = {
        url: '',
        nombre: '',
        descripcion:''
    }

    const [values, setValues]= useState(initialStateValues);

    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setValues({...values,[name]: value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(values);
    }

    return (
        
            <form className="card card-body" onSubmit={handleSubmit}>
                
                <div className="form-group input-group">

                    <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                    </div>
                
                    <input type="text" className="form-control"
                    placeholder="http://www.url.com" name="url" onChange={handleInputChange} value={values.url}/>
                </div>

                <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                    </div>
                    <input type="text" className="form-control"
                    placeholder="Nombre de la pagina" name="nombre" onChange={handleInputChange} value={values.nombre}/>
                </div>

                <div className="form-group">
                    <textarea name="descripcion" rows="3" className="form-control"
                    placeholder="Agregar descripcion" onChange={handleInputChange} value={values.descripcion}/>
                    
                </div>

                <button className="btn btn-primary btn-block" >
                    Enviar
                </button>
            </form>
    )
}

export default LinksForm;