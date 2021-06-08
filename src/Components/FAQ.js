import '../Styles/FAQ.css'
import '../Styles/text.css'
import { Banner } from './Banner'
import BannerImage from '../BannerImage/beach3unsplash.jpg'
export function FAQ(props) {
    return (
        <div className="FAQ_grid">
            <Banner image={BannerImage} text="Beach" />
            <div className="FAQ"> <h2 className="main">Frequently Asked Questions</h2>
            <div>
                <h3 className="sub">Is Sorrento By the Sea pet friendly?</h3>
                <p>Yes, we are pet friendly with all the ammenities a pet would love. Only a 3 minute walk to a non-leash beach!</p>
            </div>
            <div>
                <h3 className="sub">What is your refund policy?</h3>
                <p>A full refund will be given prior to 30 days cancellation 50% refund will be given after 30 days of cancellation. In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.</p>
            </div>
            <div>
                <h3 className="sub">Is there room to park my boat?</h3>
                <p>Car parking is close by with room for a boat as well!</p>
            </div>
            <div>
                <h3 className="sub">How much will it cost?</h3>
                <li>Winter prices are: $200 per night</li>
                <li>Summer prices are:$220 per night Weekly Price $1,250 Monthly Price $5,400</li>
            </div>
            <div>
                <h3 className="sub">Can i smoke inside?</h3>
                <p>The appartment is non-smoking, you may smoke outside if you must</p>
            </div>
            <div>
                <h3 className="sub">Do you accept PayPal?</h3>
                <p>Yes we accept all mojor credit cards and PayPal</p>
            </div>
                
</div>
            
        </div>


    )
}

export default FAQ