import React, {useState, useEffect} from 'react'
//bring in useState hook

const Context = React.createContext()


const ContextProvider = (props) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
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

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function emptyCart(){
        setCartItems([])
    }

    return(
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            addToCart,
            removeFromCart,
            cartItems,
            emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}