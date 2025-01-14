import { UilFacebook, UilInstagram, UilWhatsapp, UilEnvelope, UilPhone, UilTwitter } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/footer-logo.png';

const Footer = () => {
  const categories = [
    {
      title: 'Ridesmash',
      slug: 'ridesmash',
    },
    {
      title: 'Smashfood',
      slug: 'smashfood',
    },
    {
      title: 'Smash Travels',
      slug: 'smashtravels',
    },
    {
      title: 'Smash Bookings',
      slug: 'smashbookings',
    },
    {
      title: 'Smashwise',
      slug: 'smashwise',
    },
    {
      title: 'Smashbuy247',
      slug: 'smashbuy247',
    },                  ,
    {
      title: 'Smash Apartments',
      slug: 'smashapartments',
    },                 ,
    {
      title: 'Smashproperties',
      slug: 'smashproperties',
    },                 
    {
      title: 'Smash Hire',
      slug: 'smashhire',
    },                 
    {
      title: 'Smash Logistics',
      slug: 'smashlogistics',
    },                 
    {
      title: 'Smash Laundry',
      slug: 'smashlaundry',
    },                 
    {
      title: 'Owenas',
      slug: 'owenas',
    },                 
    {
      title: 'Qiimeet',
      slug: 'qiimeet',
    },
  ];

  return (
    <>
    <div className="sections footer" id="footer">
      <div className="row">
          <div className="col-md-6 col-lg-3">
              <div className="footer-about">
                <h2 className="p-0">Location</h2>
                <h5 style={{ color: '#eee' }}>Corporate Headquarters, <br />Abuja</h5>
                <p className="mt-2">2 King Jaja Street, Works &amp; Housing, <br />3rd Avenue, Gwarinpa, <br />Abuja, Nigeria.</p>
              
                <h5 style={{ color: '#eee' }}>Lagos Office</h5>
                <p className="mt-2 mb-2">Suit 103/104, Workcentral, 5 Alhaji Tokan Street, Alaka Estate, Surulere<br />Lagos, Nigeria. </p>
              </div>
          </div>
          <div className="col-md-6 col-lg-9">
              <div className="row">                                
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Company</h2>
                          <Link to="/">Home</Link>
                          <Link to="/about">About Us</Link>
                          <a href="/all-businesses">Our Businesses</a>
                          <Link to="/buy-shares">Buy Shares</Link>
                          <Link to="/investment-with-roi">Investment Opportunities</Link>
                          <Link to="/press-release">Latest News</Link>
                          <Link to="/blog">Blog</Link>
                          <Link to="/careers">Careers</Link>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Our Businesses</h2>

                          {categories.map((categ, index) => (
                            <div key={index}>
                              <Link to={`/business/${categ.slug}`}>{categ.title}</Link>
                            </div>
                          ))}
                          
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Contact Us</h2>                         
                          
                          <a href="tel:+2349097403297" title="Click to call" className="_070smash mb-0">070<span>SMASHTECH</span></a>

                          <p className="branch-labels">Corporate Head Office</p>

                          <a href="tel:+2349097403297" title="Click to call"><UilPhone /> +234 9097403297</a>
                          <a href="tel:+2348100693634" title="Click to call"><UilPhone /> +234 8100693634</a>
                          <a href="tel:+2347054881783" title="Click to call"><UilPhone /> +234 7054881783</a>
                          
                          <p className="branch-labels">Lagos Business Office</p>
                          <a href="tel:+2348144824339" title="Click to call"> <UilPhone /> +234 8144824339</a><br />

                          <a href="mailto:info@smashtechgroup.com" title="Email us - Info"><UilEnvelope /> info@smashtechgroup.com</a>
                          <a href="mailto:support@smashtechgroup.com" title="Email us - Support"><UilEnvelope /> support@smashtechgroup.com</a>
                          
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://x.com/smashtechnology"><UilTwitter /></a>
                            <a href="https://web.facebook.com/smashtechnology"><UilFacebook /></a>
                            <a href="https://www.instagram.com/smashtechnology"><UilInstagram /></a>
                            <a href="https://wa.me/+2349097403297" title="Click to chat on WhatsApp"><UilWhatsapp /></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <hr />

      <div className="footer-menu">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" id="logo">
              <img src={logo} style={{width: '50px', height: '50px' }} title="Logo" alt="Logo" />
            </Link>
            Copyright &copy; Smash Technology Ltd. All Rights Reserved. 
          </div>
          <div className="col-md-6 footer-menu">
            <div className="f-menu">
              <a href="/privacypolicy">Privacy Policy</a>
              <a href="/termsandconditions">Terms of Use</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Footer;