
import './BlogCategories.css';

// Import your custom SVG icons
import UtensilsIcon from './Image/modular-Kitchen.svg';
import BedIcon from './Image/master-bedroom.svg';
import TvIcon from './Image/tv-units.svg';
import CouchIcon from './Image/living-room.svg';
import BathIcon from './Image/bathroomv2.svg';


import ChildIcon from './Image/kids-room.svg';
import PaintRollerIcon from './Image/kitchen-wall-tilesv2.svg';
import HomeIcon from './Image/balcony.svg';
import Wardrobes from './Image/wardrobes.svg';
import False_Ceiling from './Image/false-ceilingv2.svg';
const BlogCategories = () => {
    const categories = [
        { name: 'Modular Kitchen', icon: <img src={UtensilsIcon} alt="Utensils Icon" /> },
        { name: 'Wardrobes', icon: <img src={Wardrobes} alt="Wardrobes" /> },
        { name: 'Master Bedroom', icon: <img src={BedIcon} alt="Bed Icon" /> },
        { name: 'TV Unit', icon: <img src={TvIcon} alt="TV Icon" /> },
        { name: 'Living Room', icon: <img src={CouchIcon} alt="Couch Icon" /> },
        { name: 'Bathroom', icon: <img src={BathIcon} alt="Bath Icon" /> },
        { name: 'Kids Room', icon: <img src={ChildIcon} alt="Child Icon" /> },
        { name: 'Kitchen Wall Tiles', icon: <img src={PaintRollerIcon} alt="Paint Roller Icon" /> },
        { name: 'Balcony', icon: <img src={HomeIcon} alt="Home Icon" /> },
        ,
        { name: 'False Ceiling', icon: <img src={False_Ceiling} alt="False Ceiling" /> },
    ];

    return (
        <div className="_container">
            <h6 className="h6">All Your Interior Design Solutions in One Place</h6>
            <p className="subheading">We offer functional design solutions for your home, office, and shop, from ideation to execution.</p>
            <div className="content_container">
                {categories.map((category, index) => (
                    <a key={index} >
                        <div className="_solutionItem" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="_figImg">
                                {category.icon}
                            </div>
                            <p className="catName">{category.name}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div style={{marginTop:'30px'}}> <button className="appointment-bt" style={{backgroundColor:'#ff9900c0'}}>
                Book Free Consultation
            </button></div>

        </div>
    );
};

export default BlogCategories;
