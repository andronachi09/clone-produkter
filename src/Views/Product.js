import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Product(props) {
    // const url = 'https://pfp-public-productdb-api.azurewebsites.net/api/product/2'
    const url = 'https://pfp-public-productdb-api.azurewebsites.net/api/picture/2'
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
                    <img src = {product}/> 
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