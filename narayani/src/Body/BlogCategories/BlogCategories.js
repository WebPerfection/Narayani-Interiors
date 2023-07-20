
import './BlogCategories.css';

// Import your custom SVG icons
import UtensilsIcon from './Image/modular-Kitchen.svg';
import BedIcon from './Image/master-bedroom.svg';
import TvIcon from './Image/tv-units.svg';
import CouchIcon from './Image/living-room.svg';
import BathIcon from './Image/New_folder/bathroomv2.svg';

import Consult from '../../Consult/Consult';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChildIcon from './Image/kids-room.svg';
import PaintRollerIcon from './Image/kitchen-wall-tilesv2.svg';
import HomeIcon from './Image/balcony.svg';
import Wardrobes from './Image/wardrobes.svg';
import False_Ceiling from './Image/false-ceilingv2.svg';
const BlogCategories = () => {
    const [consult,setConsult]=useState(false)
    const categories = [
        { name: 'Modular Kitchen', icon: <img src={UtensilsIcon} alt="Utensils Icon" />,maincetegory:"Kitchen" },
        { name: 'Wardrobes', icon: <img src={Wardrobes} alt="Wardrobes" />,maincetegory:"Room"  },
        { name: 'Master Bedroom', icon: <img src={BedIcon} alt="Bed Icon" />,maincetegory:"Room" },
        { name: 'TV Unit', icon: <img src={TvIcon} alt="TV Icon" /> },
        { name: 'Living Room', icon: <img src={CouchIcon} alt="Couch Icon" />,maincetegory:"Room"  },
        { name: 'Bathroom', icon: <img src={BathIcon} alt="Bath Icon" />,maincetegory:"Room" },
        { name: 'Kids Room', icon: <img src={ChildIcon} alt="Child Icon" />,maincetegory:"Room"  },
        { name: 'Kitchen Wall Tiles', icon: <img src={PaintRollerIcon} alt="Paint Roller Icon" />,maincetegory:"Kitchen" },
        { name: 'Balcony', icon: <img src={HomeIcon} alt="Home Icon" />,maincetegory:"Room" },
        ,
        { name: 'False Ceiling', icon: <img src={False_Ceiling} alt="False Ceiling" />,maincetegory:"Room" },
    ];
  const consultClick=()=>{
    setConsult(false)
  }
    return (
        <div className="_container">
            <h6 className="h6">All Your Interior Design Solutions in One Place</h6>
            <p className="subheading">We offer functional design solutions for your home, office, and shop, from ideation to execution.</p>
            <div className="content_container">
                {categories.map((category, index) => (
                    <a key={index} >
                        <Link to={`/allkitchen/${category.maincetegory}`}>
                        <div className="_solutionItem"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="_figImg">
                                {category.icon}
                            </div>
                            <p className="catName">{category.name}</p>
                        </div>
                        </Link>
                    </a>
                ))}
            </div>
            <div style={{marginTop:'30px'}}> <button onClick={()=>setConsult(true)} className="appointment-bt" style={{backgroundColor:'#ff9900c0'}}>
                Book Free Consultation
            </button></div>
     <Consult consult={consult} consultClick={consultClick}/>
        </div>
    );
};

export default BlogCategories;
