import { Banner } from '../Components/Banner'
import BannerImage from '../BannerImage/beach-unsplash.jpg'
import '../Styles/Booking.css'
export function Booking(props) {
    return (
        <div className="Booking">
            <Banner image={BannerImage} text="Beach" />
            <h2>Booking</h2>
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
        </div >
    )
}

export default Booking