import React from "react";

import { useParams } from 'react-router-dom';
import Loader from "../Component/Loader";
import useAxiosGet from "../Hooks/HttpRequest";


function Product(){
    const { id } = useParams()
    let url = `https://fakestoreapi.com/products/${id}`
    
    let product = useAxiosGet(url);
    let content= null;
    // if (!product) return null;
    
   

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.error===true){
        content = <p>404 Not Found</p>
    }

    if(product.data){
        // return(
        //     <div>
        //        <h1>{product.title}</h1> 
        //     </div>)
        content = 
        <div className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  p-10 my-10">
            <h1 className="text-2xl font-bold mb-3">{product.data.title}</h1> 
            <div className="flex justify-center align-center w-40">
                <img className="object-scale-down h-48"
                    src={product.data.image}
                    alt={product.data.title}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
            
        </div>
    }
    return(
        <div className="grid justify-center">
            {content}
        </div>)
}

export default Product;