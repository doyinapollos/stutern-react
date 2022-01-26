import React from "react";

export default function Api() {

    const [apiData, setApiData] = React.useState(null)

    const [isLoading, setIsLoading] = React.useState(true)

    const [error, setError] = React.useState(null)

    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
        .then(res => {
            if(!res.ok) {
                throw Error("Could not reach api");
            }
           return res.json()
        })
        .then(data => {
            setApiData(data); 
            setIsLoading(false)
            setError(null)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.message)
        })
        
        
    }, [])
    

return (
        <div className="api--container">
            {error && <p>{error}</p>}
           {isLoading && <p>Loading...</p>}
            {apiData && <pre>{JSON.stringify(apiData,null, 2)}</pre>}
            
            
        </div>
    )
}
/**/