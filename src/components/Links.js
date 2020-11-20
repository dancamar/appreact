import React, { useEffect, useState } from 'react';

import LinkForm from './LinksForm';
import { db } from '../firebase';
import {toast} from 'react-toastify';


const Links = () => {

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEditLink = async (linkObject) => {
        try {

            if (currentId === '') {
                await db.collection('links').doc().set(linkObject);
                toast("Nuevo link agregado", {
                    type: 'success'
                });
            } else {
                await db.collection('links').doc(currentId).update(linkObject);
                toast('Link Actualizado',{
                    type: 'info'
                });
                setCurrentId('');
            }
        }

        catch (error) {
            console.error(error);
        }
    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setLinks(docs);
        });
    };

    const onDelete = async (id) => {
        if (window.confirm('Esta seguro que desea eliminar este link?')) {
            await db.collection('links').doc(id).delete();
            toast('Link elminado',{
                type: 'error',
                autoClose: 2000
            });
            
        }
    }

    useEffect(() => {
        getLinks();
    }, []);


    return (<div className="container">
        <div className="col-md-6 p-2">
            <LinkForm {...{ addOrEditLink, currentId, links }} />
        </div>

        <div className="col-md-6">
            {links.map(link => (
                <div className="card card-body" key={link.id}>
                    <div className="d-flex justify-content-between">
                        <h4>{link.nombre}</h4>
                        <div>

                        </div>
                        <p>{link.descripcion}</p>
                        <a href={link.url} target="_blank" rel="noreferrer">Ir al sitio...</a>
                        <i className="material-icons text-danger" onClick={() => onDelete(link.id)}>close</i>
                        <i className="material-icons" onClick={() => setCurrentId(link.id)}>create</i>
                    </div>
                </div>
            ))}
        </div>


    </div>

    )

}

export default Links;