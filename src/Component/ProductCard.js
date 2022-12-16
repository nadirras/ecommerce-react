import React from "react";
import {Link} from "react-router-dom";

function ProductCard(props){
    return (
        
        <div className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white p-10 my-10">
           <Link to={`/products/${props.product.id}`}>
           <div
                
                className="w-full h-64 bg-blue bg-cover"
                >

            </div>

        </Link>
        <div className="p-3">
            <h3 className="font-bold text-xl mb-3">
                <Link to={`/products/${props.product.id}`}>
                    {props.product.title}
                </Link>
            </h3>
            <div className="font-bold mb-3">
                $ {props.product.price}
            </div>
            <div className="mb-3">
                {props.product.description}
            </div>
            <Link
                to={`/products/${props.product.id}`}
                className="bg-blue-500 text-white p-2 flex justify-center align-center"
                >
                    View
            </Link>
        </div>
        </div>
        
        )
}

export default ProductCard;