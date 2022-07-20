import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Product(props) {
    const url = 'https://pfp-public-productdb-api.azurewebsites.net/api/product/5'
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    if(product) {
        return(
            <div>
                <div>
                    <img src = {product.productPictures}/> 
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-3'>{product.name}</h1>
                </div>
            </div>  
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default Product