import {Link } from 'react-router-dom'
import { ArrowDown, Bike, Clock, Star } from 'lucide-react'

const Card = ({item}) => {
  return (
    <Link to={`/restaurant/${item.id}`} className='relative shadow overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition duration-300'>
      <span className='bg-red-500 py-1 px-3 text-sm absolute end-1 top-2 text-white rounded-md'>{item.distance} km uzakta</span>

      <img src={item.photo} alt={item.name}  className='w-full object-cover h-[250px] lg:h-[200 px]'/>

      <div className='p-3'>
        {/* Baslik */}
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl md:text-xl font-semibold'>{item.name}</h3>
          <p className='flex items-center gap-2 text-red-500'>
            <Star /> {item.rating}
          </p>
        </div>

        {/* Min teslimat  */}
        <div className='flex items-center text-zinc-700'>
          <ArrowDown className='size-5'/>
          <span>₺{item.minPrice} </span>
        </div>

        {/* teslimat suresi */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 font-semibold'>
            <Clock className='text-red-500'/>
            <span className='text-gray-500'>{item.estimatedDelivery}</span>
          </div>
          {item.isDeliveryFree && (<div className='flex items-center gap-2 font-semibold'>
            <Bike  className='size-5'/>
            <span className='text-gray-500'>Ucretsiz</span>
          </div>)}
          
        </div>
      </div>
    </Link>
  )
}

export default Card