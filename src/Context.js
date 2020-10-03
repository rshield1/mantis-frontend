import React, {useState, useEffect} from 'react'
//bring in useState hook

const Context = React.createContext()


const ContextProvider = (props) => {
    const [allPhotos, setAllPhotos] = useState([])
    const url ="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        //get data from api and save to state
        fetch(url)
            .then(res => res.json())
            //save data 
            .then(data => setAllPhotos(data))
    }, [])
        console.log(allPhotos)

    return(
        <Context.Provider value={{allPhotos: allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}