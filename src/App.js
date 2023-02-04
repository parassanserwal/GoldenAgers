import React from 'react';
import Notfound from './Pages/Notfound';
import Contact from './Pages/Contact';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Favourite from './Components/Favourites/Favourite';


const App=()=> {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Favourite/>}/> 
      <Route path='/Contact' element={<Contact/>}/>
      <Route element={<Notfound/>}/>
    </Routes> 
    
    </div>
  )
}

export default App
