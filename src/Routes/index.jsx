import React from 'react';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';

import SignIn from '../Pages/signIn';
import Choice from '../Pages/choiceUser';
import SignUp from '../Pages/SingUp';
import HomePage from '../Pages/HomePage/index'

const RouterApp = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign_in'element={<SignIn/>}/>
        <Route path="/choiceUser" element={ <Choice/> }/>
        <Route path='/signup' element={<SignUp/>} /> 
      </Routes>
    </Router>
  
  )
}

export default RouterApp;