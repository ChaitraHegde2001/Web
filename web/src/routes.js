import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Profile from './pages/Profile';

export default function Routes(){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={ Login } />
            <Route path='/register' component={ Register } />
            <Route path='/forgotPassword' component={ ForgotPassword } />
            <Route path='/resetPassword' component={ ResetPassword } />
            <Route path='/profile' component={ Profile } />
         </Switch>
      </BrowserRouter>
   )
}