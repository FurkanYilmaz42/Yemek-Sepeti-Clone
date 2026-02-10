import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const BasketEmpty = () => {
  return (
    <div className='flex flex-col items-center gap-5 my-10'>
      <ShoppingCart />

      <h1 className='text-2xl font-bold'>Sepetiniz bos</h1>

      <p className='text-zinc-700 text-lg'>
        <Link to='/' className='text-blue-500 hover:underline'>Henuz sepete bir urun eklemediniz.</Link>
      </p>
    </div>
  )
}

export default BasketEmpty