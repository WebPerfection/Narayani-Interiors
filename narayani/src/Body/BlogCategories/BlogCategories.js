
import './BlogCategories.css';

// Import your custom SVG icons
import UtensilsIcon from './Image/New_folder/modular-Kitchen.svg';
import BedIcon from './Image/New_folder/master-bedroom.svg';
import TvIcon from './Image/New_folder/tv-units.svg';
import CouchIcon from './Image/New_folder/living-room.svg';
import BathIcon from './Image/New_folder/bathroom.svg';


import ChildIcon from './Image/New_folder/kids-room.svg';
import PaintRollerIcon from './Image/New_folder/kitchen-wall-tiles.svg';
import HomeIcon from './Image/New_folder/balcony.svg';
import Wardrobes from './Image/New_folder/wardrobes.svg';
import False_Ceiling from './Image/New_folder/false-ceiling.svg';
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
            <p className="subheading">From ideation to execution, we offer functional design solutions for your home.</p>
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
