import React from "react"
import data from '../data'


function virginiaWoolf () {
    return(
        <main className='soloHeader'>
            {/* image */}
            <figure className='figure card-image'>
                {/* <div className='badgeText'>{props.title}</div> */}
                <img src={props.picture} alt='image' className='cardImage' />
            </figure>

            <div className='author'>
                <div className='author'>{props.author}</div>
            </div>

            {/* caption*/}
            <div className='tourNameDesc'>
                <div className='tourName'>{props.tourName}</div>
            </div>

            {/* years and timeframe */}
            <div className='yearsDesc'>
                <div className='years'>Time period: {props.years}</div>
            </div>
            <div className='timeFrameDesc'>
                <div className='timeframe'>Length of Tour: {props.timeFrame}</div>
            </div>

            {/* works */}
            <div className='famousWorksDesc'>
                <div className='description'>
                    <h3 className ='propTitles'>Famous Works:</h3>
                    {props.famousWorks}</div>
            </div>
            <hr className="divider"/>
            <div className="button">
                <button className="addToCart">Add to Cart</button> 
            </div>
        </main>
    )
}

export default virginiaWoolf