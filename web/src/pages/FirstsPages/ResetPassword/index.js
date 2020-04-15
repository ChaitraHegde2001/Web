import React, { useState } from 'react';

import { FaKey, FaAt, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import resetPassword from './img/resetPassword.svg';

import './style.css';

export default function ResetPassword(){

   const[email, setEmail] = useState();
   const[password, setPassword] = useState();
   const[token, setToken] = useState();

   const history = useHistory();

   async function handleResetPassword(e){
      e.preventDefault();

      try {
         await api.post('/auth/reset_password', { email, password, token})

         alert('Sua senha foi redefinida com sucesso !');

         console.log('Password reset successfully');
         history('/');
      } catch (err) {
         console.log(err);
         alert('Falha ao tentar redefinir a senha\nVerifique se os campos estão preenchidos corretamente')
      }
   }

   return(
      <div className="container">
         <div className="img">
            <img src={resetPassword} alt="icon"/>
         </div>
         <div className="resetContainer">
            <section className="form">
               <form onSubmit={handleResetPassword}>
                  <h2>Alterar sua senha</h2>
                  <div className="inputDiv">
                     <i className="i">
                        <FaKey size={19} />
                     </i>
                     <div className="div">
                        <input  
                           id= {token}
                           onChange= {e => setToken(e.target.value)}
                           placeholder="token"
                           type="text" 
                           className="input"
                        />
                     </div>
                  </div>
                  <div className="space" />
                  <div className="inputDiv">
                     <i className="i">
                        <FaAt size={19} />
                     </i>
                     <div className="div">
                        <input  
                           id= {email}
                           onChange= {e => setEmail(e.target.value)}
                           placeholder="email"
                           type="email" 
                           className="input"
                        />
                     </div>
                  </div>
                  <div className="inputDiv">
                     <i className="i">
                        <FaLock size={19} />
                     </i>
                     <div className="div">
                        <input  
                           id= {password}
                           onChange= {e => setPassword(e.target.value)}
                           placeholder="nova senha"
                           type="password" 
                           className="input"
                        />
                     </div>
                  </div>
                  <button className="button" type="submit">Confirmar</button>
               </form>
            </section>
         </div>
      </div>
   );
}