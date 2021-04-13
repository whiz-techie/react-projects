import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from "./Loader"
const Giphy = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const

    useEffect = (()=> {
        const fetchdata =async () => {
            setIsError (false)
            setisLoading(true)

            try{
                const results = await axios("http://api.giphy.com/v1/gifs/trending", {
                    params : {
                        api_key : 'UanL2aICBfPScXPm4EIcJhZPFndVnN45',
                        limit: 100
                    }
                });
                console.log(results.data.data);
                setData(results.data.data)
    
            }catch(err) {
                setIsError(true)
                setTimeout(()=> setIsError(false), 4000)
            }


            setisLoading(false)
        };
        fetchdata()
    },[]);


    const renderGifs = () => {
        if(isLoading) {
            return ( <Loader/>)
        }
        return data.map(el =>{
            return (
                <div key ={el.id}className="gif">
                    <img src={el.images.fixed_height.url} 
                    />
                </div>
            )
        })
    }
const renderError = () => {
    if(isError){
        return(
            <div className="alert alert-danger alert-dismissable fade show" role="alert">
                koi massla aia hai
                theek karlo bhaia
            </div>
        )
    }
}

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsError(false)
        setisLoading(true)

        try{
            
            const results = await axios ("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "UanL2aICBfPScXPm4EIcJhZPFndVnN45",
                    q: search,
                    limit: 100
                }
            
            });
            setData(results.data.data);
            setisLoading(false)
        }catch (err) {
            setIsError(true)
            setTimeout(()=> setIsError(false), 4000)
        }


            setisLoading(false)
    }

    return (
            <div className="m-2">
                {renderError()}
                <form className="form-inline justify-content-center m-2">
                    <input
                    value={search}
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    />
                    <button
                     type="submit"
                     className="btn btn-primary mx-2"
                     onClick={handleSubmit}
                    >
                        Go
                    </button>
                </form>
        <div className="container gifs">
            {renderGifs()}
        </div>
            </div>
    )
};

export default Giphy
