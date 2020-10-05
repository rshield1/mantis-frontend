export const fetchAllPhotos = () => {
        return (dispatch) => {
            fetch('http://localhost:4000/photos')
            .then(resp => resp.json())
            .then(photos => dispatch({ type: 'FETCH_ALL_PHOTOS',
            payload: photos
        }))
    }
}

export const addPhoto = (data, history) => {

  return (dispatch) => {
    fetch('http://localhost:4000/photos', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(photo => {
      dispatch({type: 'ADD_PHOTO', payload: photo})
      history.push(`/accounts/${photo.id}`)
    })
  }

}
