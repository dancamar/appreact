import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const LinksForm = (props) => {

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
        props.addOrEditLink(values);
        setValues({...initialStateValues});        
    }

    const getLinkById=async(id)=>{
        const doc=await db.collection('links').doc(id).get();
        setValues({...doc.data()});
    }

    useEffect(()=>{
        if(props.currentId===''){
            setValues({...initialStateValues});
        }else{
            getLinkById(props.currentId);
        }
    }, [props.currentId]);

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
                    {props.currentId===''? 'Guardar':"Actualizar"}
                </button>
            </form>
    )
}

export default LinksForm;