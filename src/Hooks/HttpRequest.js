import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(()=>{
        setRequest({
            loading: true,
            data:null,
            error: false
        })
        
        axios.get(url)
        .then(response => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
            .catch(() =>{ console.log("haha")
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
        })
    }, [url])

    return request
}
 export default useAxiosGet
