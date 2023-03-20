import './Form.css';
import { useState } from 'react';

const Form = ({user}) => {

    //Criando estados paraos campos do formulário

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const [select, setSelect] = useState(user ? user.select : '');

    //Criando funções "handlers" para os campos do formulário

    const handleName = (e) => {
        setName(e.target.value); 
    }

    // console.log(name);
    // console.log(email);

    //SPA (Single Page Application) - Por isso o preventDefault, para evitar o reload da página.

    const handleSubmit = (e) => {
        
        if (name === '' || email === '' || bio === '' || select === '--selecione--' || select === '') {
            alert('Preencha todos os campos corretamente!')
        } else {
            
        e.preventDefault();
        console.log('Formulário enviado!');
        console.log(name, email, bio, select);
        
        } 



        //Limpando os campos do formulário 
        setName('');
        setEmail('');
        setBio('');
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:
                <input type="text" placeholder='Digite seu nome...' onChange={handleName} value={name}/>
                </label>
            </div>
            <br />
            <label >
                <span>Email:</span>
                <input type="email" placeholder='Digite seu email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <br />
            <label> Bio:
                <textarea name="textArea" cols="30" rows="10" placeholder='Descrição da sua Bio...' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            <br />

            <label>
                <span>Escolha umas das opções:</span>
                <select name="select" onChange={(e) => setSelect(e.target.value)} value={select}> 
                    <option value='--Selecione--'>--Selecione--</option>
                    <option value='user'>Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>                
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form;