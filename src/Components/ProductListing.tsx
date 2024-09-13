import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {

    const [products, setProducts] = useState<[{
        id: number,
        thumbnail: string,
        title: string,
        price: number
    }]>();

  const fetchProducts = async() => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      console.log(json);
      console.log(json.products);
      if(json.products.length)
        {
          setProducts(json.products);
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
            <h1>Prooduct Listing</h1>
            <div className="product-grid">
                {products && products ?.map((product) => {
                    console.log(product);
                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                                <h3>${product.price}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductListing;