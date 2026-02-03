import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'

const CarSinglePage = () => {
    // const params = useParams()
    // console.log(params);

    const { id } = useParams()

    const cars = data.find((item) => Number(item.id) === Number(id))
    console.log(cars);
    
    return (
        <div>CarSinglePage</div>
    )
}

export default CarSinglePage
