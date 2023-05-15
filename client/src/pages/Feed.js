import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../styles/Feed.css';

import bandPh from '../assets/bandicon.png'
import singerPh from '../assets/singericon.png'
import pianoPh from '../assets/piano.png'
import drummerPh from '../assets/drummer.png'


const Feed = () => {
  //THESE ARE TEST INSTANCES UNTIL WE POPULATE DATA & STYLE
  const profiles = [
    {
      id: 1,
      username: 'Kris',
      bio: 'Full Stack Band Mate',
      image: singerPh,
    },
    {
      id: 2,
      username: 'Alex',
      bio: 'Full Stack Band Mate',
      image: bandPh,
    },
    {
      id: 3,
      username: 'Greg',
      bio: 'Full Stack Band Mate',
      image: drummerPh,
    },
    {
      id: 4,
      username: 'Jen',
      bio: 'Full Stack Band Mate',
      image: pianoPh,
    },
  ];
    

  return (

      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false} // Disable arrows
        showIndicators={profiles.length > 3}
        swipeScrollTolerance={5}
        emulateTouch
        centerMode
        centerSlidePercentage={33.33}
        infiniteLoop
      >
        {profiles.map((profile) => (
          <div key={profile.id} className="grid-item">
            <img src={profile.image} alt={profile.username} />
            <h3>{profile.username}</h3>
            <p>{profile.bio}</p>
            <button>Open Profile</button>
          </div>
        ))}
      </Carousel>
    );
  };

    // <div className="grid-container">
    //   <div className="grid-item">Column 1
    //   <img src={placeholder} alt="placeholder" /></div>
    //   <div className="grid-item">Column 2
    //   <img src={placeholder} alt="placeholder" /></div>
    //   <div className="grid-item">Column 3
    //   <img src={placeholder} alt="placeholder" /></div>
    // </div>


export default Feed;