import React, {useContext} from "react"

import Image from '../components/Image';
import {Context} from '../Context';
import { getClass } from "../utils/index"

function Photos() {
    const {allPhotos} = useContext(Context)
     // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} 
            img={img} 
            className={getClass(i)}
             />
    ))
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos