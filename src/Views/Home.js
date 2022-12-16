import React from "react";

import Loader from "../Component/Loader";
import ProductCard from "../Component/ProductCard";
import useAxiosGet from "../Hooks/HttpRequest";



function Home(){
   
    const url = `https://fakestoreapi.com/products/`
    
   let products = useAxiosGet(url)

    let content = null
    if(products.error===true){
        content = <p>404 Not Found</p>
    }
    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content =
        products.data.map((product) =>
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }
        
    

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3 text-center">
                Noir Pop-up Store
            </h1>
            <div className="grid grid-cols-4 ">
            {content}
            </div>
        
        </div>)
}

export default Home;