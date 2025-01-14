import { UilArrowDown, UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import ceo from './../../../assets/images/ourteam/CEO.jpg';
import gracious from './../../../assets/images/ourteam//Gracious.jpg';
import charity from './../../../assets/images/ourteam/Charity.jpg';
import precious from './../../../assets/images/ourteam/Precious.jpg';
import val from './../../../assets/images/ourteam/Val.jpg';
import vivian from './../../../assets/images/ourteam/Vivian.jpg';
import chris from './../../../assets/images/ourteam/Chris 1.jpg';
import favour from './../../../assets/images/ourteam/Favour1.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';

const OurTeam = () => {
  const team = [
    {
      title: 'President/Group CEO',
      description: (() => {
        const fullDescription =
          `I am Paul Smith, a highly accomplished visionary leader, an empathetic entrepreneur, and a technological innovator. With a robust academic foundation that includes a B.Sc. in Business Administration, a B.Sc. in Accounting, and an M.Sc. in both Business Administration and Banking & Financial Support Services, I have built a career over the past two decades that blends strategic insight, empathy, and discipline to drive success across multiple industries.

          My entrepreneurial journey began in 2007, when I took on the role of Managing Director at a Microfinance institution because of my problem-solving and result-driven persona. It was there that I honed my leadership skills, learned the intricacies of business management, and laid the groundwork for my future ventures. By 2012, I had a vision to create something transformative – Smash Group. However, recognizing the importance of continuous growth, I made the strategic decision to refine my abilities further, which led me to become the Management Executive at Business Network Worldwide in 2020. Over the next five years, I gained invaluable expertise in leadership, technology, and entrepreneurship, enriching my experience and expanding my vision.

          Armed with a wealth of knowledge and practical insight, I returned to my initial vision with renewed vigor, relaunching Smash Group as Smash Technology. My focus on integrating cutting-edge technology into daily operations has allowed us to solve real-world problems on both a local and global scale. Today, Smash Technology is a pioneering force, with 13 subsidiaries across industries such as e-hailing, e-commerce, travel, real estate, transportation, and entrepreneur empowerment. Our flagship brands such as RideSmash, SmashWise, SmashTravels, SmashApartments, SmashHire, Qiimeet, SmashBuy, SmashFood247, SmashOffice are driving impactful change across their respective markets.

          As a compassionate leader, I believe in leading with heart and by example. My commitment to integrity, consistency, hard work and empowering my team defines my approach. I strive to create a culture of innovation, collaboration, and growth. With an unwavering dedication to transforming industries and improving lives, I continue to drive Smash Technology toward new heights by delivering excellent and valuable solutions to our esteemed clients locally and globally.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: ceo,
      slug: 'president_grp_ceo',
    },
    
    {
      title: 'Executive Assistant to CEO',
      description: (() => {
        const fullDescription =
          `As an Executive Assistant to the CEO at Smash Technology, my career journey has been a dynamic and rewarding experience. From managing complex schedules and coordinating high-level meetings to streamlining communication across teams, I’ve gained invaluable insights into organizational operations and strategic decision-making.

          This role has allowed me to develop a diverse skill set, including problem-solving, multitasking, and fostering strong professional relationships. Each challenge has provided an opportunity for growth, enabling me to better anticipate needs and contribute to the company’s success.

          The process has been a continuous learning experience, deepening my understanding of leadership, business processes, and effective collaboration. I’m excited to further expand my knowledge and contribute to impactful initiatives moving forward.

          A brief description of how i joined Smash Technology

          I first came across the vacancy for Smash Technology online, and after reading through the job description, I became intrigued. To learn more about the company, I visited their Instagram page and was immediately impressed by the way the team collaborates. The uniformity in their approach and the positive, dynamic energy stood out to me. It seemed like a place where teamwork and innovation thrive. Having never worked with a tech company before, I saw this as an exciting opportunity to grow and gain valuable experience. I was eager to be part of such a forward-thinking company and contribute to its success.
          
          Ezugwu Onyinyechukwu`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'exec_asst_to_ceo',
    },
    {
      title: 'General Manager',
      description: (() => {
        const fullDescription =
          `I'm Yahaya Shedrack Abdulkadir, the General Manager Smash Technology. My desire for sales and business development for about 2 decades, grew when i found out that i had a deposit of leadership, skills and idea, and what it takes to meet the needs of clients/customer's at every given point in time. Am a graduate of BSc Economics from a reputable Nigerian university, MBA in marketing, Chartered in Project management, Professional Diploma in Operations management from Blessed cosmopolitan college UK and Chartered in Operations management from the American institute of oil and Gas USA.

          I started my career as a young sales officer in kano that was passionate and enthusiastic about getting results at all cost. In my pursuit for career growth and significant development, i was dedicated, rugged and dogged in ensuring i could climb through all odds just to achieve unprecedented success. However, it's been a magnanimous journey thus far.

          I have a vast experience in business and project development with proven track records of successfully implementing strategic initiatives and driving company's growth. Skilled in identifying opportunities, building partnerships and fostering on client relationships, a strong leadership abilities to lead cross functional teams, manage complex projects, and deliver results within budget and timeline. Am a very good effective communicator with exceptional negotiation and problem-solving skills, committed to fostering innovation and driving continuous improvement. An adept at analyzing market trends, developing actionable strategies, and delivering exceptional value for clients and stakeholders.

          i am committed as the GM in taking Smash technology to greater heights and ensuring that the vision, dreams and aspiration of what will be of the company will be achieved through collective efforts of the entire staff and high level display of expertise in making the company a global brand known for excellence.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'gm',
    },
    {
      title: 'Group Business Operations',
      description: (() => {
        const fullDescription =
          `Group Business Operations profile`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'grp_biz_operations',
    },
    {
      title: 'Business Operations Manager, Lagos',
      description: (() => {
        const fullDescription =
          `Business Operations Manager, Lagos profile`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'biz_operations_mgr_lag',
    },
    {
      title: 'Group Human Resources Manager',
      description: (() => {
        const fullDescription =
          `Sharon Chiazom is a dedicated and results-oriented professional with extensive experience in Administration, Human Resources, and Customer Service. With a solid educational foundation from Anambra State University Uli, Sharon has honed her skills through years of excellence in the Healthcare and Information Technology industries.
          Known for her ability to deliver exceptional service and build strong, positive relationships, Sharon is highly proficient in Complaint Management, Personnel Management, Administrative Skills, Interpersonal Communication, Service Quality, Teamwork, and Customer Service. Her dedication to professionalism and problem-solving has made her an invaluable asset in every organization she’s worked for.
          Sharon's strong communication skills and ability to resolve issues swiftly and effectively are key components in her commitment to enhancing organizational success. She is eager to contribute her wealth of expertise to continue driving success in a dynamic, fast-paced organizational setting.

          How I Joined Smash Technology
          My journey with Smash Technology began when I applied for the role of Human Resource Manager through LinkedIn. I was drawn to the opportunity and took the initiative to express my interest in the position by reaching out directly to the CEO. This proactive step led to an invitation for an interview, during which I had the opportunity to discuss my extensive experience in human resources and customer service. The CEO was impressed with my skills and knowledge, and I was offered the role of Human Resource Manager.
          Since joining Smash Technology, I have applied my expertise in talent acquisition to ensure the company attracts and retains a talented workforce. My focus on effective employee management and team collaboration has been integral in achieving organizational goals. I have also worked tirelessly to enhance employee welfare by creating a positive, supportive work environment that encourages professional growth and satisfaction.
          My role at Smash Technology has contributed immensely to my personal and professional growth. Every challenge I face at work is an opportunity for development, and I am proud to have navigated these challenges with resilience and a positive mindset. Additionally, working closely with the CEO has been incredibly rewarding; he is not just a boss but also a mentor and father figure. His guidance has helped shape my leadership skills and has given me the tools to succeed in this dynamic industry.

          At Smash Technology, I continue to leverage my experience and skills to make a meaningful impact and drive the company's ongoing success.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'grp_hrm',
    },
    {
      title: 'Head of Finance',
      description: (() => {
        const fullDescription =
          `Head of Finance profile`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'head_of_finance',
    },
    {
      title: 'Group Head, Media & I.T. Communications',
      description: (() => {
        const fullDescription =
          `I am Gracious Onyeahialam and I'm passionate about Cybersecurity. I started my career in 2018 after acquiring a B.Sc in Biotechnology, as a Confidential Secretary to the Director of Health in the Federal Ministry of Science, Technology and Innovation, Abuja overseeing a range of parastatals. During this time, I developed strong analytical, communication, and organizational skills that set the foundation for my future endeavors.

          Thereafter, I took on the role of Operations Manager in a computing firm, where my attention to the sensitivity of customer and employee data led me to explore the world of cybersecurity. My transition into the tech landscape opened my eyes to crucial areas such as network security, risk management, ethical hacking, data protection, security compliance, cryptography, cloud security.

          When I joined Smash Technology as a Cybersecurity Analyst, I gained hands-on experience by working on real-time projects and collaborating closely with development teams for web and mobile applications security. I have now been promoted to Head of Media and I.T Communications, where I now lead an 8-man team of talented IT professionals who are very diligent in their roles and always seeking to learn and grow in this ever-evolving tech field.

          I believe in the power of relationships, zero-trust model and kindness, with an understanding that they are key to creating a safer, secured, and more connected digital world.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: gracious,
      slug: 'grp_head_media_it_communications',
    },
    {
      title: 'Head, Admin Operations',
      description: (() => {
        const fullDescription =
          `Head, Admin Operations`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'head_admin_operations',
    },
    {
      title: 'Team Lead, SmashTravels',
      description: (() => {
        const fullDescription =
          `My name is Charity John, and I am the Team Lead at Smash Travels, a division of Smash Technology. Customer service is more than just a role for me, it’s a passion. 

          My love for helping people and solving problems inspired me to pursue this field as a career.

          I joined Smash Technology in June 2024 as a Customer Service Executive and was promoted to Team Lead within three months. This role has allowed me to refine my leadership skills, enhance communication, and contribute meaningfully to the company’s growth.

          Since I joined till date, my amazing team and I have achieved significant milestones, including converting leads into paying clients and boosting customer satisfaction by 80%. Through proactive engagement and streamlined processes, we’ve built stronger connections with clients and enhanced their overall experience.

          I’m motivated by a desire to help people overcome challenges and achieve their goals. Every interaction is an opportunity to create value, whether for clients or my team.

          I aim to help Smash Technology double its achievements, grow its client base, and set new benchmarks for customer satisfaction. With focused strategies and teamwork, I believe we can elevate the company to even greater heights.
          `;
        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: charity,
      slug: 'team_lead_smashtravels',
    },
    {
      title: 'Team Lead, Ridesmash',
      description: (() => {
        const fullDescription =
          `My Name is Favour Jipson.

          My Journey with Smash Technology
          A graduate of Business Education from Alvan Ikoku Federal University Owerri.
          Am Married.

          My journey with Smash Technology began on June 6th, 2024, when I join the company as a customer support executive for Ridesmash. At a time, I was still a timid person, and lacking confidence to truly step into a leadership role although still  believing In my self, however, joining Smash Technology quickly changed all of that.

          From day one, I was trained to handle customer inquiries with professionalism and poise, handle pressure and stay connected in difficult situation.Although my major work then was to Onboard drivers into our platform. In a short time, I was honored to be promoted to Team Lead for Ridesmash, a role that allowed me to further smothen my leadership skills. The experience of leading a team and over seeing customer operations helped me build my confidence and leadership stature. I went from being someone who doubted myself to becoming a confident and assertive leader, ready to face any challenge that came my way.
          There were moments of tough scoldings, moments when I felt like I wasn't good enough but those moments helped shape me into the person I am today. Smash Technology never gave up on me, and their feedback pushed me to be better each day.

          Today, I can proudly say that Smash Technology has completely rebranded me. I am no longer the timid person I once was. I am now confident, capable, and assertive. I am grateful for the opportunity to be part of such a remarkable company that has played a huge role in shaping my career and leadership journey.

          In the coming future with Smash, I will make sure that our clients get seamless experience with our hire purchase plan by helping them acquire their dream car.
          
          All thanks to Smash Technology for believing in me and helping me reach new heights.
        `;
        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: favour,
      slug: 'team_lead_ridesmash',
    },
    {
      title: 'Team Lead, Smashwise',
      description: (() => {
        const fullDescription =
          `I joined Smash Technology on 5th June, 2024 as a Customer Support Executive. I still laugh when I think about how I came straight from my previous job, dressed in a suit, for the interview. The CEO, a compassionate man, saw something in me and offered me the position.

          When I resumed duties on June 6th, 2024, I remember staring at my desktop for two whole days, unsure of what to do next. If you know e-commerce, you understand that setting up a successful platform is no easy feat. I quickly realized that this role was more than just answering customer inquiries – it was about proactively reaching out to vendors and driving results.

          The turning point came when the CEO asked for the leads I had generated. That’s when it truly hit me – I needed to focus on vendor acquisition, not just customer support. So, I took it upon myself to learn. I started researching, attending online seminars and absorbing everything I could to improve my skills. With constant encouragement from the CEO, I quickly found my foot.

          From starting as a customer support executive to becoming the team lead of Smashwise, it has been a journey of hard work, dedication, and growth. Setting up an e-commerce platform from scratch is challenging, and there were moments when I felt like giving up. But with God’s guidance, the support of our CEO, and the amazing colleagues I have in Charity John and Favour Jipson – who are truly angels sent from above – I pushed through. May God bless you both abundantly. Amen!

          I’m proud to share that I single-handedly grew our vendor list from 12 to 200 between June and August, before team members were assigned to me.

          Smash Technology has truly transformed me. It has built my confidence, sharpened my intellect and enhanced my leadership skills. I’m still growing, and I’m excited for the future.

          Thank you, Smash Technology. Thank you, CEO – you are a blessing sent to me by God.
          `;
        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: precious,
      slug: 'team_lead_smashwise',
    },
    {
      title: 'Product Designer',
      description: (() => {
        const fullDescription =
          `My Journey into Tech and Design.
          
          My name is Mamah Valentine Obumneme a multifaceted individual and by profession a product designer specialized in designing user friendly interfaces. 
          Growing up, I was that curious kid who loved gadgets—phones, laptops, anything I could explore. My mom often scolded me for spending hours on them, especially playing games and tinkering. Funny enough, my fascination with technology stayed with me through primary and secondary school. I discovered my passion for computers, acing subjects like Computer Studies and Data Processing, even though my math grades made my parents jokingly question my focus!
          My journey into tech truly took shape when I first heard about coding. I tried and failed many times, getting errors that nearly made me cry, but I never gave up entirely. By the time I got into university to study Computer Science, I had new hope. In my second year, a visiting alumna introduced us to the world of UI/UX Design. She spoke about its creativity, opportunities, and how it could sometimes pay more than development roles. Intrigued, I dove headfirst into research. Figma, the design tool, seemed intimidating at first glance, but with perseverance, I began to grasp it. I spent sleepless nights watching tutorials, trying projects, and improving. My early designs might make me laugh today, but they were the building blocks of who I am now—a passionate and skilled product designer.
          Through internships, Google design courses, and constant self-practice, I honed my craft. Today, I’m proud to say I’ve come a long way, growing daily and still striving to become one of the best in the industry.
          As a designer, I’m driven by a desire to solve real-life problems through design and  crafting solutions that make people’s lives better.</p>
      
          My Role at Smash Technology
      
          At Smash Technology, I serve as a Product Designer, a role I took on completion of my service year.  Some of my responsibilities as a product designer at Smash Technology include developing product requirement documents, conducting user research, creating user personas and journey maps, and crafting flow architectures—all before bringing designs to life. Beyond design, Smash Technology has provided me the platform to explore other areas like project management, quality assurance, and sales & marketing. These experiences have made me a more versatile professional.
          So far, I’ve successfully contributed to over five projects within Smash Technology’s growing ecosystem of over 10 brands, many of which are tech-driven in a space of 4 months joining the company. My role involves redesigning and developing solutions that align with current industry standards and solving real-world user problems.
          I aspire to become one of the best product designers in the world, pushing boundaries, solving meaningful problems, and inspiring others to take the bold step into the world of tech.</p>
          
          My Design Process
            Empathize
            Define
            Ideate
            Prototype
            Test`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: val,
      slug: 'product_designer',
    },
    {
      title: 'Graphic Designer',
      description: (() => {
        const fullDescription =
          `My name is Christogonus Chiboka. I am a Certified Brand Identity Designer with a strong passion for creativity. My interest in graphic design started when I discovered CorelDRAW. I enjoyed exploring the software and giving myself tasks to create different designs, which sparked my love for design. 

          When I got into school, I started practicing graphic design more seriously. This gave me the chance to improve my skills, especially in brand identity design. I focused on creating unique designs that help brands tell their stories.  
          After finishing school, I joined Smash Technology in September 2024 as a Graphic Designer. I work on designs for all the company’s sub-brands, including RideSmash, Smash Travels, SmashWise, Smash Apartments, and others. At first, it was challenging to meet the design needs of each brand, but with time and practice, I got better at my work and gained confidence in my skills.  

          Working at Smash Technology has also taught me more than just design. I have learned about marketing, teamwork, and other important skills that have helped me grow as a professional.  

          I am passionate about using my designs to bring ideas to life.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: chris,
      slug: 'graphic_designer',
    },
    // {
    //   title: 'IT Support',
    //   description: (() => {
    //     const fullDescription =
    //       `My name is Obike Victor. Since after my secondary school, my passion for technology and computers only grew stronger. Although I explored other industries, including healthcare, my love for tech remained unwavering. I took a proactive approach to learning, starting with the basics and progressively expanding my skills across various areas, including software and hardware training, coding, computer programming, and graphics design.

    //       My time in Smash Technology has been a transformative experience, offering invaluable opportunities for growth, learning, and development. Joining as an IT Support Executive, I've had the privilege of collaborating with a talented team of innovative and forward-thinking professionals. This exposure has significantly contributed to my career advancement in tech and has enabled me to enhance my skills and expertise.

    //       Mamah Valentine: As an IT Support Executive, I encounter a wide range of software and hardware challenges on a daily basis. From familiar issues to novel ones, I leverage my broad IT expertise to provide timely and effective support to my colleagues. I deliver technical assistance, troubleshoot problems, and resolve issues within tight deadlines, all while maintaining workflow efficiency and minimizing downtime.
          
    //       Smash Technology's commitment to excellence and perfection serves as a powerful motivator for me. I strive to embody this organizational mindset by staying up-to-date with the latest trends and advancements in the tech world. I am dedicated to delivering high-quality results, ensuring that all tasks are completed on time and to the highest standards of perfection.
          
    //       My aspiration is to continue growing and learning, and I envision a future where I transition into a full-stack mobile app developer role. I am committed to expanding my skill set and expertise to achieve this goal.`;

    //     return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
    //   })(),
    //   image: biz2,
    //   slug: 'it_support',
    // },
    // {
    //   title: 'Software Engineer',
    //   description: (() => {
    //     const fullDescription =
    //       `I'm Omogbehinmi Olusegun E. 

    //       I'm a dedicated software engineer with over 3 years of experience in the tech industry, specializing in developing scalable applications and robust API solutions. My work focuses on building user-centric tools that streamline workflows, boost productivity, and drive innovation.

    //       With a strong commitment to delivering high-quality, scalable solutions, I’m continuously honing my technical expertise to stay at the forefront of industry advancements. I’m passionate about using technology to create meaningful impact and to solve real-world problems.
    //       `;

    //     return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
    //   })(),
    //   image: biz2,
    //   slug: 'software_engineer',
    // },
    // {
    //   title: 'Social Media Influencer & Content Creator',
    //   description: (() => {
    //     const fullDescription =
    //       `My name is Ezeonwuka Greatness Vivian. The Social Media Influencer and Content Creator at Smash Technology.
    //       I still vividly remember the thrill of receiving my offer letter from Smash Technology. It marked the beginning of an extraordinary chapter in my career as a social media influencer and content creator. From that moment on, I knew I was in for an exciting ride.

    //       Fast-forward to today, and I can confidently say that my journey at Smash Technology has been nothing short of remarkable. It's been a rollercoaster of challenges, growth, and impact. I've had the privilege of working with an exceptional team, collaborating on innovative projects, and pushing the boundaries of creative storytelling.`;

    //     return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
    //   })(),
    //   image: vivian,
    //   slug: 'social_media',
    // },
  ];

  return (
    <>
    <div className="sections meetourteam" id="ourbusiness">
      <h2>Meet Our Team</h2>
        
      <div className="c2 c2-sm c1-xs">

        {team.map((categ, index) => (
          <div key={index} className="business-container">
            <img src={categ.image} className="team" title="" alt="" />
            <h3 className="team">{categ.title}</h3>
            <p>{categ.description}</p>
            <Link to={`/team/${categ.slug}`}>Read More <UilArrowRight /></Link>
          </div>
        ))}
      </div>

      <p className="text-center"><Link to="" className="text-dark"><b>Load More Profiles</b> <UilArrowDown /></Link></p>
    </div>
    </>
  )
}
export default OurTeam;