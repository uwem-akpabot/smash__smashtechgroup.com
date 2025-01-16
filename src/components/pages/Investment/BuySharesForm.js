import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const BuySharesForm = () => {
  const [unit, setUnit] = useState(0); // State to track units of shares
  const publicKey = 'pk_live_cc0fa3d91c2856306b7a146d81e8e64479427e60';

  const handleUnitChange = (e) => setUnit(Number(e.target.value)); // Handle user input

  const amount = unit * 1000 * 100; // Calculate total amount in kobo

  // Load Paystack script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => {
      console.log('Paystack script loaded successfully');
    };
    script.onerror = () => {
      console.error('Error loading Paystack script');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Redirect to Paystack payment
  const handlePaystackRedirect = () => {
    const handler = window.PaystackPop.setup({
      key: publicKey, // Paystack public key
      email: 'akpabot.it@gmail.com', // Customer email
      amount: amount, // Total amount in kobo
      currency: 'NGN', // Currency
      callback: function (response) {
        alert(`Payment successful! Reference: ${response.reference}`);
        console.log(response);
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  };

  return (
    <>
      <Helmet>
        <script src="/js/bootstrap.min.js"></script>
      </Helmet>

      {/* Header and Banner */}
      <Header />
      <Banner_otherpages title="Buy Shares" image={image} />

      {/* Main Form */}
      <div className="sections" id="ourcorepurpose">
        <h2>Smash Technology Shares</h2>

        <div className="sections" id="about_people">
          <form>
            <div>
              <label>Unit of Shares:</label>
              <input
                type="number"
                value={unit}
                onChange={handleUnitChange}
                placeholder="Enter the units of shares you wish to buy ..."
              />
            </div>

            <div>
              <label>Calculated Amount (in Naira):</label>
              <input
                type="text"
                value={Intl.NumberFormat().format(unit * 1000)}
                readOnly
                placeholder="Amount to pay ..."
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handlePaystackRedirect}
                className="smashtech-button swipe-button"
              >
                Pay with Paystack
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuySharesForm;
