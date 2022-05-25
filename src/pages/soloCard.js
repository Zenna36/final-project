import React from 'react'
import data from '../data' //fetched data from database will go here
import Card from './Card' //where data will be styled and displayed


const soloCard =()=>{
    const cards = data.map(card => {
        return <Card 
            key = {card.id}
            // picture={card.picture}
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
        <main className='soloCard'>
            <div className='soloCardHeader'>
                card.tourName
            </div>
            <div className='container'>
                <div className='row'>
                    {cards}
                </div>
            </div>
        </main>
    )
}

export default soloCard;




export default individualTour;