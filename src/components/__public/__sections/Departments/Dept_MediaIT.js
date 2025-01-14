import { useState, useEffect } from 'react';
import Header from '../../__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../_Banner_otherpages';
import image from '../../../../assets/images/dept/smashtravels.jpg';
import gracious from '../../../../assets/images/dept/single/Gracious.jpg';
import valentine from '../../../../assets/images/dept/single/Valentine.jpg';
import victor from '../../../../assets/images/dept/single/Victor.jpg';
import chris from '../../../../assets/images/dept/single/Chris.jpg';
import uwem from '../../../../assets/images/dept/single/Uwem.jpg';
import vivian from '../../../../assets/images/dept/single/Vivian.jpg';
import { UilArrowRight, UilBookMedical } from '@iconscout/react-unicons';

import { Link } from 'react-router-dom';

const Dept_MediaIT = (props) => {
    const [activeTab, setActiveTab] = useState('Gracious');
    
    const tabContent = {
        Gracious: { content: <img src={gracious} alt="Gracious" />, description: 'Head of Media & IT' }, 
        Valentine: { content: <img src={valentine} alt="Valentine" />, description: 'Product Designer' },
        Victor: { content: <img src={victor} alt="Victor" />, description: 'IT Support' }, 
        Peter: { content: <img src={image} alt="Peter" />, description: 'Social Media Executive' },
        Chris: { content: <img src={chris} alt="Chris" />, description: 'Graphic Designer' },
        Uwem: { content: <img src={uwem} alt="Uwem" />, description: 'Software Engineer' }, 
        Vivian: { content: <img src={vivian} alt="Vivian" />, description: 'Content Creator' },
        Olusegun: { content: <img src={image} alt="Olusegun" />, description: 'Software Developer' }
    };

    useEffect(() => {
        document.title = `${props.company} - Media & IT Department`;
    }, []);

    return (
    <>  
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />    
    <Banner_otherpages title="Media & IT Department" image={image} />

    <div className="sections" id="about_people">
        <h2>Meet The IT Team</h2>
        
        <div className="text-center">
            <p>Our IT team is the backbone of innovation at Smash Technology. Comprising skilled developers, designers, and tech strategists, they bring our ideas to life with cutting-edge solutions and seamless user experiences. From creating intuitive apps to maintaining secure and reliable systems.
            Get to know the brilliant minds behind our digital excellence.</p>

            <div className="text-center">
                <br />
                <p><Link to="/smash-people" className="back">Back To All Departments <UilArrowRight /></Link></p>
            </div>
        </div>
    </div>

    <div className="c1_2 c1-sm c1-xs" id="dept">
        {/* Active Tab Content */}
        <div className="tab-content">
            {/* The Image on the left */}
            {tabContent[activeTab]?.content} 
        </div>

        <div className="dept_right">
            {Object.keys(tabContent).map((tab) => (
            <div key={tab} className="c3">
                {/* Tab Button */}
                <h3
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </h3>

                {/* Description with Link */}
                {tabContent[tab]?.description && (
                    <>
                    {tabContent[tab].description}
                    <Link to="/person-detail" title="Full profile"><UilBookMedical /></Link>
                    </>
                )}
            </div>
            ))}
        </div>
    </div>
    </>
  )
}
export default Dept_MediaIT