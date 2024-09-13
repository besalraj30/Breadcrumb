import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState<[{
        id: number,
        thumbnail: string,
        title: string
    }]>();

  const fetchProducts = async() => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      console.log(json);
      console.log(json.products);
      if(json.products.length)
        {
          const sliceTrending = json.products.slice(0, 6);
          console.log(sliceTrending);
          setTrendingProducts(sliceTrending);
        }
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
    return (
        <div>
            <h2>Home Page</h2>
            <span>Trending Products 🔥</span>
            <div className="product-grid">
                {trendingProducts && trendingProducts?.map((product) => {
                    console.log(product);
                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <Link to="/products">
                <button>View All Products</button>
            </Link>
        </div>
    )
}

export default Home;