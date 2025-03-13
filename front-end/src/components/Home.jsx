import { useGetAllProductQuery } from "../features/productApi";
import './style/home.scss'
// import { useSelector } from 'react-redux'
const Home = () => {
  // const { item, status, errors } = useSelector((state) => state.product)
  const { data: product, error, isLoading } = useGetAllProductQuery()
  return (
    <div className="home-container">
      {isLoading ? (<p>Loading ...</p>)
        : error ? (<p> an error occurred ...</p>) :
          (<>
            <h2>New Arrivals</h2>
            <div className="products">
              {product?.map(item => <div key={item.id} className="product">
                <h3>{item.name}</h3>
                <img alt={item.name} src={item.img}></img>
                <div className="product-detail">
                  <span>{item.desc}</span>
                  <span className="price">$ {item.price}</span>
                </div>
                <button>Add To Cart</button>
              </div>)}
            </div>
          </>)}
    </div>
  );
}

export default Home;