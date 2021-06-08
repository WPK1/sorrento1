import { Banner } from '../Components/Banner'
import BannerImage from '../BannerImage/beach-unsplash.jpg'
import '../Styles/Booking.css'
import '../Styles/text.css'
export function Booking(props) {
    return (
        <div className="Booking">
            <Banner image={BannerImage} text="Beach" />
            <h2 className="main">Booking</h2>
            <div className="grid">
                <div className="card">
                    <h3>Winter</h3>

                    <ul>
                        <li>1st June - August 31st</li>
                        
                        <li>$200 per night</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Summer         </h3>
                    <ul>
                        <li>1st September - December 18th</li>
                        <li>1st February - 31st May</li>
                        <li>$220 per night</li>
                        <li>Weekly Price     $1,250</li>
                        <li>Monthly Price $5,400</li>
                    </ul>

                </div>

            </div>

            <p> The pricing is for 2 people. Total amount is payable upon booking.
                A full refund will be given prior to 30 days cancellation
                50% refund will be given after 30 days of cancellation.
                In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.
                BOOK NOW
</p>
<h2 className="sub">Testimonials</h2>
                <div>
                    <p>"So sorry we had to go home after only one night. We will definitely stay two nights next time!"</p>
                </div>
                <div>
                    <p>"This apartment is close to everything. We didn't need the car as the walks were amazing"</p>
                </div>
                <div>
                    <p>"Your attention to detail made our stay so relaxed and comfortable. It was such a shame we had to drive back to our little flat, which is smaller than your apartment. We want to move in!"</p>
                </div>
                <div>
                    <p>"Cosy and comfortable. We imagined we owned it and enjoyed being spoilt.  Thank you." </p>
                </div>
                <div>
                    <p>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again."</p>
                </div>
                <div>
                    <p>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!"</p>
                </div>
                <div>
                    <p>"A few minutes’ walk from the beach, picnic basket in hand and towel over the shoulder - can't think of anything better except that wonderful breakfast. That bacon is the best in Melbourne!"</p>
                </div>
                <div>
                    <p>"Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!"</p>
                </div>
        </div >
    )
}

export default Booking