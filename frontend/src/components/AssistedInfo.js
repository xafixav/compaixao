import React, { useState, useEffect } from 'react';
import { getAllAssisted } from '../services/requests';

const fieldNames = ['nome', 'cpf', 'rg', 'Numero da pulseira','moradia', 'descricao']


const ListAssisted = () => {
    const [allAssisted, setAllAssisted] = useState([]);

    useEffect(() => {
        setAllAssisted(getAllAssisted())
    }, [])

    const generateCardList = () => {
        if (allAssisted.length > 0) {
            return (
                <div>
                    <p>{fieldNames[0]}</p>
                    <p>{allAssisted.name}</p>
                    <p>{fieldNames[1]}</p>
                    <p>{allAssisted.cpf}</p>
                    <p>{fieldNames[2]}</p>
                    <p>{allAssisted.rg}</p>
                    <p>{fieldNames[3]}</p>
                    <p>{allAssisted.assistedId}</p>
                    <p>{fieldNames[4]}</p>
                    <p>{allAssisted.livingState}</p>
                    <p>{fieldNames[5]}</p>
                    <p>{allAssisted.description}</p>
                </div>
            )
            }
        return null;
        }

    return (
        <div>
            {generateCardList() || 'Nenhuma pessoa encontrada no banco de dados.'}
        </div>
    )
}

export default ListAssisted;