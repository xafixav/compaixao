import React, { useState, useEffect } from 'react';
import { getAllAssisted } from '../services/requests';

const fieldNames = ['nome', 'cpf', 'rg', 'Numero da pulseira','moradia', 'descricao']


const AssistedInfo = () => {
    const [allAssisted, setAllAssisted] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        const assisteds = await getAllAssisted();
        setAllAssisted(assisteds);
    }

    const generateCardList = () => {
        if (allAssisted.length > 0) {

            return allAssisted.map((person) => {

                return (
                    <div className='personCard'>
                        <p>{fieldNames[0]}:
                        {person.name}</p>
                        <p>{fieldNames[1]} :
                        {person.cpf}</p>
                        <p>{fieldNames[2]} :
                        {person.rg}</p>
                        <p>{fieldNames[3]} :
                        {person.assistedId}</p>
                        <p>{fieldNames[4]} :
                        {person.livingState}</p>
                        <p>{fieldNames[5]} :
                        {person.description}</p>
                    </div>
                )
            })
            }
        return null;
        }

    return (
        <div className='assistedPage'>
            {generateCardList() || 'Nenhuma pessoa encontrada no banco de dados.'}
            {console.log(allAssisted.length)}
        </div>
    )
}

export default AssistedInfo;