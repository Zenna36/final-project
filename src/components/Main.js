import React from 'react'
import data from '../data' //fetched data from database will go here
import Card from './Card'




const Main =()=>{
    const cards = data.map(card => {
        return <Card 
            key = {card.id}
            // picture={card.picture}
            // author={card.author}
            // tourName={card.tourName}
            // years={card.years}
            // country={card.country}
            // gender={card.gender}
            // famousWorks={card.famousWorks}
            {...card}
        />
    })
    
    console.log({cards})
    return(
        <main className='main'>
            <div className='cardMainHeader'>
                embark on a tour with us
            </div>
            <div className='cardContainer'>
                <div className='tourCards'>
                    {cards}
                </div>
            </div>
        </main>
    )
}

export default Main