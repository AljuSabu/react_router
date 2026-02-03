import React from 'react'
import { Helmet } from 'react-helmet'
import CarCard from '../component/CarCard'
import { data } from '../data/data'
import { Link } from 'react-router-dom'

const Cars = () => {
  return (
    <div className='min-h-screen p-15'>
      <Helmet>
        <title>Cars AutoElite</title>
      </Helmet>
      <div className='grid grid-cols-4 gap-5'>
        {
          data.map((cars) => {
            return (
              <div key={cars.id}>
                <Link to={`${cars.id}`}>
                  <CarCard cars={cars} />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cars