import RestaurantProducts from "./restaurant-products"
import RestaurantDetail from "./restaurant-detail"

const Restaurant = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>
      <div className="shadow">
        <div className="container">
          <RestaurantProducts />
        </div>
      </div>
    </div>
  )
}

export default Restaurant