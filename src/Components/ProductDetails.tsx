import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState<{
        thumbnail: string,
        title: string,
        price: number,
        description: string,
    }>();

    const fetchProduct = async() => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const json = await response.json();
          console.log(json);
          setProduct(json);
        } catch(e) {
          console.error(e);
        }
      }
    
      useEffect(() => {
        fetchProduct();
      }, [])


    return (
        <div>
            <h1>Product Details</h1>
            {product ? (
                <div style={{display: "flex"}}>
                    <img style={{height: 300}} src={product.thumbnail} alt={product.title} />
                    <div>
                        <h3>{product.title}</h3>
                        <h3>Rs {product.price}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            ) : (<p>Loading...</p>)}
        </div>
    )
}

export default ProductDetails;