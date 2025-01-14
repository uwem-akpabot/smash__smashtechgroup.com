import { useParams } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from './_Banner_otherpages';
import {Link} from 'react-router-dom';
    
const BusinessDetail = () => {
  const { slug } = useParams();

  // Data for each category
  const categoryDetails = {
    ridesmash: {
      title: 'Ridesmash',
      image: biz1,
      website: 'https://ridesmash.com',
      description: 'Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.',
      details: `RideSmash is not only transforming the e-hailing industry but also offering flexible hire 
      purchase options, allowing people to access high-quality vehicles through affordable installment plans. 
      Your investment helps fuel the development of this dual platform, enabling us to expand our fleet and 
      improve our service offerings. By supporting RideSmash, you contribute to making transportation more 
      accessible with affordable cost while also benefiting from the profitable returns generated through our 
      E-hailing services and hire purchase agreements. Our customers’ regular payments and the steady demand for 
      reliable rides ensure strong profitability, which directly impacts the returns for our investors. Investing 
      in RideSmash places you at the forefront of the rapidly growing ehailing and hire purchase market. Your funds are protected, 
      ensuring that you benefit from secure, consistent returns. With increasing demand for affordable, flexible transportation, 
      your investment will generate monthly returns as RideSmash expands. As we grow, your investment will continue to provide you 
      with profitable returns, supported by a loyal customer base. RideSmash offers not only security for your funds but also an exciting 
      opportunity for continued growth, offering long-term stability and returns in the booming mobility sector.`,
    },
    smashfood: {
        title: 'Smashfood',
        image: biz2,
        website: 'https://smashfood.com',
        description: 'Delicious meals, delivered fast. Order your favorites and enjoy culinary delights at your doorstep.',
        details: `SmashFood is your go-to app for fast and reliable food delivery, offering a wide variety of fresh, diverse meal 
        options delivered straight to your door. SmashFood aims to dominate the market by ensuring faster deliveries of foods and a 
        seamless customer experience. Your investment helps us build and maintain our app, enhance our platform's features, and drive 
        advertising efforts to reach more customers and vendors. This not only boosts the app's visibility and user base but also enables 
        local food vendors to sell more, increasing their revenue. With your support, we can continue to scale our operations and make SmashFood 
        a profitable investment, delivering attractive returns for all investors. SmashFood offers investors the opportunity to tap into the 
        lucrative food delivery industry with high potential for monthly returns. Your funds are securely invested, ensuring both your capital 
        and profits are protected. As the demand for food delivery grows, your investment will generate consistent returns, backed by a secure 
        and transparent business model. With growing market penetration, your returns will increase as the brand expands. SmashFood provides 
        you with peace of mind, knowing that your funds are in safe hands while benefiting from an industry poised for continued growth.`,
    },
    smashtravels: {
      title: 'Smash Travels',
      image: biz3,
      website: 'https://smashtravels.com',
      description: 'Effortless bookings and memorable journeys await. Let us handle the details—your adventure starts here.',
      details: `SmashApartments presents a secure and profitable investment opportunity in the travel 
      and accommodation sector. Your funds help scale our platform, expand our listings, and improve 
      our service offerings, ensuring you benefit from the growing demand for online bookings. With the 
      travel industry on the rise, your investment is safeguarded, and you stand to earn attractive returns 
      as our platform gains market share. Additionally, your funds will be used for strategic advertising campaigns 
      and partnership development, increasing visibility and driving more bookings. As the travel industry recovers, 
      your investment will be poised for steady appreciation, offering high growth potential in a thriving market. 
      SmashApartments SmashApartments is a dynamic web and mobile platform that simplifies property booking, rental, and sales. 
      It combines the power of Airbnb, Booking.com, and property rental services, offering users an easy way to book short-term 
      and long-term accommodations, including apartments, suites, and properties for sale. SmashApartments enables property owners, 
      landlords, and tenants to connect, making it easier for everyone to secure a space. For investors, SmashApartments offers a 
      high-growth opportunity in the expanding property market. Your investment benefits from consistent monthly returns, a secure 
      and scalable platform, and the growing demand for both short-term and long-term rentals. With SmashApartments' wide market reach 
      and robust user base, your funds are secured while continuously generating profitable returns.`,
    },
    smashbookings: {
        title: 'Smash Bookings',
        image: '',
        website: 'https://www.smashbookings.com',
        description: 'Business summary',
        details: `More Detail`
    },
    smashwise: {
        title: 'Smashwise',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },
    smashbuy247: {
        title: 'Smashbuy247',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },  
    smashapartments: {
        title: 'Smash Apartments',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },  
    smashproperties: {
        title: 'Smashproperties',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    smashhire: {
        title: 'Smash Hire',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    smashlogistics: {
        title: 'Smash Logistics',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    smashlaundry: {
        title: 'Smash Laundry',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    owenas: {
        title: 'Owenas',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    qiimeet: {
        title: 'Qiimeet',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },
  };

  // Fetch the details for the specific slug
  const category = categoryDetails[slug];

  if (!category) {
    return <p>Category not found!</p>; // Handle invalid slugs
  }

  return (
    <>
    <Header />
    <Banner_otherpages title={category.title} image={category.image} />

    <div className="sections business-detail" id="whoweare">
      <h2>{category.title}</h2>
      <h3>{category.description}</h3>
      <p>{category.details}</p>
      <Link to={category.website} className="smashtech-button swipe-button">Visit {category.title} Website</Link>
    </div>
    </>
  );
};
export default BusinessDetail;