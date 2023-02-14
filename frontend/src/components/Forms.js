import React, { useState } from 'react';
import { registerAssisted } from '../services/requests';

const defaultObject = {
    name: '',
    cpf: '',
    rg: '',
    assistedId: '',
    livingState: 'Rua',
    description: '',
}


const Forms = () => {
    const [allInfo, setAllInfo] = useState(defaultObject);
    // const [isLoading, setIsLoading] = useState(false);

    const updateState = (event) => {
        const { name, value } = event.target;
        const newInfo = {...allInfo};
        newInfo[`${name}`] = value;
        setAllInfo(newInfo);
    }

    const generateInputs = () => {
        const inputsNames = Object.keys(defaultObject);
        const inputs = inputsNames.map((inputName) => {
            const numbersInputs = ['rg', 'cpf', 'assistedId'];
            const optionInput = ['livingState'];

            if (numbersInputs.some((name) => name === inputName)) {
                return (
                    <div>
                        <p>{`${inputName}`}:</p>
                        <input
                            name = {`${inputName}`}
                            onChange = {updateState}
                            type='number'
                            placeholder={`${inputName}`}
                        />
                    </div>
                )
            }
            if (optionInput.some((name) => name === inputName)) {
                return (
                    <div>
                        <p>{`${inputName}`}:</p>
                        <select name={`${inputName}`} onChange={updateState}>
                            <option value={'Rua'}>Rua</option>
                            <option value={'Albergue'}>Albergue</option>
                            <option value={'Casa'}>Casa</option>
                        </select>
                    </div>
                )
            }
            return (
                <div>
                    <p>{`${inputName}`}:</p>
                    <input
                        name = {`${inputName}`}
                        type='text'
                        placeholder={`${inputName}`}
                        value={allInfo[`${inputName}`]}
                        onChange = {updateState}
                    />
                </div>
            )
        })
        return inputs
    }

    const sendButton = () => {
        const isDisabled = Object.values(allInfo).some((keyValue) => keyValue === 0 || keyValue === '')
        if (!isDisabled) {
            return (
                <div>
                    <br/>
                    <button type='button' onClick={() => dispatchRequest()}>Enviar</button>
                </div>
            )

        }
        return (
            <div>
                <br/>
                <button disabled>Enviar</button>
            </div>
        )
    }

    const dispatchRequest = async () => {
        // setIsLoading(true);
        // const data = JSON.stringify(allInfo);
        // await registerAssisted(allInfo);
        const dbTest = await registerAssisted(allInfo);
        console.log(dbTest);
        // setIsLoading(false);
    }

    return (
        <div className='registerPage'>
            {generateInputs()}
            {sendButton()}
        </div>
    )
}

export default Forms;