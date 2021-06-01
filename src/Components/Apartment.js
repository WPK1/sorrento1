import '../Styles/Apartment.css'
import { Banner } from './Banner'
import BannerImage from '../BannerImage/banner.jpg'
import '../Styles/text.css'
export function Apartment(props) {
    return (
        <div className="Apartment">
            <Banner image={BannerImage} text="Sorrento Beach" />
            <h2 className="main">Apartment and information</h2>
            <div className="content">
                <p>We offer a spacious living area overlooking a beautiful garden
                    Modern and elegant bathroom</p>

                <ul>

                    <li>Queen sized bedroom suite</li>
                    <li>A private entrance allows you to come and go as you please.</li>
                    <li>Car parking is close by with room for a boat as well!</li>
                    <li>Your luxury apartment consists of a spacious separate living area with           leather furniture overlooking a private garden for you to enjoy. </li>
                    <li>
                        A separate Queen sized bedroom suite with quality linen also overlooks the garden. The modern, elegant bathroom has a luxurious bath that entices you to unwind and relax whilst overlooking a private courtyard fernery.
                    </li>
                </ul>
                <p>
                    The kitchenette provides everything you will need for a relaxing breakfast. We include a coffee machine and a variety of coffee pods for your enjoyment. Two TVS will keep everyone happy along with a DVD player, stereo system and games galore.
                   </p>
                <p>
                    There is an undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.
                    Sit back and relax and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy.
                    </p>
                <p>
                    Amenities include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools.
                    We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates.
                    </p>

                <h3>
                    Pet friendly
                    </h3>
                <p>We understand that pets are an important part of the family.</p>
                <p>We are pet friendly by arrangement - so please talk to us about your needs.</p>
                <p>We offer a fully enclosed backyard, shady trees, water bowls, food bowls and a lead if you forget one</p>
                <p>Only 3 minutes from a leash free beach, an oval close by and if you want to sleep in we are happy to take your dog (depending on its size) for a walk in the morning.  </p>

            </div>
        </div>



    )
}       

export default Apartment