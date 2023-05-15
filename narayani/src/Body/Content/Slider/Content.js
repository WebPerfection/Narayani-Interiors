import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { RiProjectorLine } from 'react-icons/ri';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FaPaintRoller } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
import { Link } from 'react-router-dom';
import AbotCompany from '../AboutCompany/AbotCompany';
import Work from '../Work/Work';
import WorkHome from '../../WoekHome/WorkHome';

import desktopImage1 from '../../../ImageData/v1-1.jpg';
import desktopImage2 from '../../../ImageData/v1-2.jpg';
import desktopImage3 from '../../../ImageData/v1-3.jpg';
import mobileImage1 from '../../../ImageData/mobile-v1-1.jpg';
import mobileImage2 from '../../../ImageData/mobile-v1-2.jpg';
import mobileImage3 from '../../../ImageData/mobile-v1-3.jpg';

  const [data, setData] = useState([
    isMobile ? mobileImage1 : desktopImage1,
    isMobile ? mobileImage2 : desktopImage2,
    isMobile ? mobileImage3 : desktopImage3,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setData([
      isMobile ? mobileImage1 : desktopImage1,
      isMobile ? mobileImage2 : desktopImage2,
      isMobile ? mobileImage3 : desktopImage3,
    ]);
  }, [isMobile]);

        {data.map((el) => (
          <Carousel.Item interval={1500}>
            <img src={el} className="d-block w-100" alt="" />
          </Carousel.Item>
        ))}
      </Carousel>

        </div>
      </div>

    </>
  );
}
