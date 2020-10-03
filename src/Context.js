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

    const toggleFavorite = (id) =>{
        const updatedArray = allPhotos.map(photo =>{
            if(photo.id === id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArray)
    }

    return(
        <Context.Provider value={{allPhotos: allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}