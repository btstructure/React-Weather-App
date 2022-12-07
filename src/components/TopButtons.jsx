import React from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

function TopButtons() {
    const cities = [
        {
            id:1,
            title: 'London'
        },
        {
            id:2,
            title: 'Tokyo'
        },
        {
            id:3,
            title: 'New York City'
        },
        {
            id:4,
            title: 'Paris'
        },
        {
            id:5,
            title: 'Toronto'
        }
        
    ]
    return <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
            ))}
        </div>
  return (
    <div>TopButtons</div>
  )
}

export default TopButtons