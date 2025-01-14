import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';
import { PaystackButton } from 'react-paystack';

const BuyShares = (props) => {
  const [unit, setUnit] = useState(0);
  const [serviceType, setServiceType] = useState('');

  const handleUnitChange = (e) => setUnit(Number(e.target.value));
  const handleServiceTypeChange = (e) => setServiceType(e.target.value);

  const publicKey = 'your-public-key'; // Replace with your Paystack public key
  const amount = unit * 1000 * 100; // Convert to kobo (Naira's smallest unit)

  const paystackProps = {
    email: 'customer@example.com', // Replace with customer's email
    amount: amount,
    publicKey: publicKey,
    text: "Pay with Paystack",
    onSuccess: (response) => {
      console.log('Payment Success:', response);
      alert('Payment Successful!');
    },
    onClose: () => {
      alert('Payment Closed');
    },
  };

  useEffect(() => {
      document.title = `${props.company} — Buy Shares`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Buy Shares" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Smash Technology Shares</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>Smash Technology, a leading force in the tech industry, is on a mission to simplify life for individuals and business owners through its diverse portfolio of brands spanning 
          multiple sectors. To fuel our next phase of growth, we are offering 40% shares per brand, with a minimum purchase of 1,000 units.
          This is your chance to become part of our success story by investing in a company that is revolutionizing industries such as e-hailing, e-commerce, food delivery, and more.</p>

          <button type="button" className="smashtech-button swipe-button mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Buy Shares / Calculator</button>
      </div>
    </div>

    <h2>Why Invest in Smash Technology?</h2><br />

    <div className="c1_2 c1-sm c1-xs main">
      <div className="half-circle-div">
        <div>
          {/* <img src={core_purpose} className="half-circle" title="Core Purpose" alt="Core Purpose" 
              style={{ width: '100%' }}/> */}
        </div>
      </div>

      <div class="ourcorepurpose-right-div">
        <div className="flex content">
          <h1>1</h1>
          <h3>&nbsp;Proven Market Success</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line"></div>
          </div>
          <p>Our brands have set new benchmarks for customer satisfaction, consistently 
            delivering innovative solutions tailored to modern needs.</p>
        </div>

        <div className="flex content">
          <h1>2</h1>
          <h3>Track Record of Growth</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line"></div>
          </div>
          <p>With years of market expansion, Smash Technology has maintained a solid record of generating 
            return on investment (ROI) for its investors</p>
        </div>

        <div className="flex content">
          <h1>3</h1>
          <h3>Accountability and Stability</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line"></div>
          </div>
          <p>Our company operates on a well-structured framework that prioritizes transparency and financial responsibility, 
            ensuring your investment is in safe and capable hands.</p>
        </div>

        <div className="flex content">
          <h1>4</h1>
          <h3>Diverse Portfolio</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line hidden"></div>
          </div>
          <p>Investing in Smash Technology means gaining exposure to multiple high-potential sectors, 
            reducing risk while maximizing growth opportunities.</p>
        </div>

      </div>
    </div>

    <h2>Be Part of Our Vision</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>This is more than an investment—it’s an opportunity to join a forward-thinking company that values innovation, growth, and the success of its partners. 
          Take advantage of this offer to secure your share in Smash Technology’s future.</p>

          <button type="button" className="smashtech-button swipe-button mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Buy Shares / Calculator</button>
      </div>
    </div>
  </div>

  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Buy up to 400,000 Unit of Shares per Brand</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div>
              <p className="my-0">Select Brand:</p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <input
                    type="radio"
                    name="serviceType"
                    value="Smashwise"
                    checked={serviceType === "Smashwise"}
                    onChange={handleServiceTypeChange}
                  />
                  <p className="my-0" style={{ color: '#F34B02' }}>Smashwise</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="serviceType"
                    value="Smash Travels"
                    checked={serviceType === "Smash Travels"}
                    onChange={handleServiceTypeChange}
                  />
                  <p className="my-0" style={{ color: '#F34B02' }}>Smash Travels</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="serviceType"
                    value="Ridesmash"
                    checked={serviceType === "Ridesmash"}
                    onChange={handleServiceTypeChange}
                  />
                  <p className="my-0" style={{ color: '#F34B02' }}>Ridesmash</p>
                </div>
              </div>
            </div>

            {serviceType && (
              <div>
                <p className="my-2 mb-3"><i>You selected: {serviceType}</i></p>
              </div>
            )}

            <div>
              <p className="my-0">Unit of Shares:</p>
              <input
                type="text"
                value={unit}
                onChange={handleUnitChange}
                placeholder="Enter the units of shares you wish to buy ..."
              />
            </div>

            <div>
              <p className="my-0">Calculated Amount (in Naira):</p>
              <input
                type="text"
                value={Intl.NumberFormat().format(unit * 1000)}
                readOnly
                placeholder="Amount to pay ..."
              />
            </div>
            <div className="modal-footer">
              <PaystackButton {...paystackProps} className="smashtech-button swipe-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
   );
 }
export default BuyShares;      