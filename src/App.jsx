import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Restaurant from './pages/Restaurant'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from './redux/actions/restActions'


const App = () => {
  const dispatch =useDispatch();
 
  useEffect(() => {
    dispatch(getRestaurants());
  }, [])
  return (
    <BrowserRouter>
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1 h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurant/:id' element={<Restaurant />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App