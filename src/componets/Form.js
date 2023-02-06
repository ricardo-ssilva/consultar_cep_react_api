import React from 'react'
import Display from './Display'


const Form = () => {

    function handleClick(event) {
        event.preventDefault(event)
        const inputCep = document.querySelector('#input-cep')
       
       
        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`).then((Response) => Response.json()).then((body) => {
            document.querySelector('.display .display-cep').innerText = `CEP:  ${body.cep}`
            document.querySelector('.display .logradouro').innerText = `Logradouro:  ${body.logradouro}`
            document.querySelector('.display .bairro').innerText = `Bairro:  ${body.bairro}`
            document.querySelector('.display .localidade').innerText = `Localidade:  ${body.localidade}`
            document.querySelector('.display .uf').innerText = `UF:  ${body.uf}`
            document.querySelector('.display .ddd').innerText = `DDD:  ${body.ddd}`


         })

    }

    return (


        <form>
            <label>
                CEP: 
                <br/>
                <input id='input-cep' type="text" name="name" placeholder='Digite o CEP' required />
            </label>
            <br/>
                <button onClick={handleClick}>Consultar CEP</button>
        </form>
    )
}

export default Form;