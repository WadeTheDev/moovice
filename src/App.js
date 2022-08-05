import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Weekly from './pages/Weekly';
import Popular from './pages/Popular';
import NotFound from './pages/NotFound';

const App = () => {

  const [films, setfilms] = useState(null)
  console.log(films)

  useEffect(() => {
      filmsData()
    }, [])

    const filmsData = async () => {
      const request = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d807289972eb3bf953404dbfeb6c7956`)
      const response = await request.json()
      setfilms(response)
  }
  // console.log(films)


  return(
    <BrowserRouter>
    <header>
        <h4><Link className='head title-head' to='/'>MOOVICE</Link></h4>
      <div>
        <h4><Link className='head' to='/weekly'>Weekly</Link></h4>
        <h4><Link className='head' to='/popular'>Popular</Link></h4>
        <h4><Link className='head' to='/favorites'>Favorites</Link></h4>
        </div>
    </header>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/weekly' element={<Weekly />}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
