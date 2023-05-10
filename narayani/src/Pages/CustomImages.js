import React, { useState } from "react";


//Main Images
import Default from '../ImageData/Room_img/Default.jpg';
import Red from '../ImageData/Room_img/Red/Red.jpg';
import Green from '../ImageData/Room_img/Green/Green.jpg';
import Yellow from '../ImageData/Room_img/Yellow/Yellow.jpg';
import Skyblue from '../ImageData/Room_img/SkyBlue/SkyBlue.jpg';
import Wall_4B0082 from '../ImageData/Room_img/4B0082/4B0082.jpg';
import Wall_800080 from '../ImageData/Room_img/800080/800080.jpg';
import Wall_ff8cff from '../ImageData/Room_img/ff8cff/ff8cff.jpg';
import Wall_eab2e8 from '../ImageData/Room_img/eab2e8/eab2e8.jpg';
import Wall_B0C4DE from '../ImageData/Room_img/B0C4DE/B0C4DE.jpg';
import Wall_5F9EA0 from '../ImageData/Room_img/5F9EA0/5F9EA0.jpg';




//Ceil Images
import RR from '../ImageData/Room_img/Red/Ceil.png';
import GG from '../ImageData/Room_img/Green/Ceil.png';
import YY from '../ImageData/Room_img/Yellow/Ceil.png';
import SB from '../ImageData/Room_img/SkyBlue/Ceil.png';
import Ceil_4B0082 from '../ImageData/Room_img/4B0082/4B0082.png';
import Ceil_800080 from '../ImageData/Room_img/800080/800080.png';
import Ceil_ff8cff from '../ImageData/Room_img/ff8cff/ff8cff.png';
import Ceil_eab2e8 from '../ImageData/Room_img/eab2e8/eab2e8.png';
import Ceil_White from '../ImageData/Room_img/White/White.png';
import Ceil_B0C4DE from '../ImageData/Room_img/B0C4DE/B0C4DE.png';
import Ceil_5F9EA0 from '../ImageData/Room_img/5F9EA0/5F9EA0.png';


//Tilse Imgae
import Tile0 from '../ImageData/Room_img/Tile/Tile_0.png'
import Tile1 from '../ImageData/Room_img/Tile/Tile_1.png'
import Tile2 from '../ImageData/Room_img/Tile/Tile_2.png'
import Tile3 from '../ImageData/Room_img/Tile/Tile_3.png'
import Tile4 from '../ImageData/Room_img/Tile/Tile_4.png'

//Tilse_Icon Imgae
import Icon0 from '../ImageData/Room_img/TileIcon/Tile_icon_0.png'
import Icon1 from '../ImageData/Room_img/TileIcon/Tile_icon_1.png'
import Icon2 from '../ImageData/Room_img/TileIcon/Tile_icon_2.png'
import Icon3 from '../ImageData/Room_img/TileIcon/Tile_icon_3.png'
import Icon4 from '../ImageData/Room_img/TileIcon/Tile_icon_4.png'

import './CustomImage.css';

const CustomImages = () => {
    const [color, setColor] = useState(Default);
    const [tile, setTile] = useState(Tile0); // set default tile
    const [ceil, setCeil] = useState(Ceil_White);

    const handleColorClick = (color) => {
        setColor(color);
    };

    const handleTileClick = (tile) => {
        setTile(tile);
    };

    const handleCeilClick = (ceil) => {
        setCeil(ceil);
    };
    return (
        <div>
            <div className="Room_img_parent">
                <div className="img_parent">
                    <div className="Ceil_box"><img src={ceil} /></div>
                    <div className="Main_box"><img src={color} /></div>
                    <div className="Tile_box"><img src={tile} /></div>
                </div>
                <div className="Color_parent">
                    <div className="Color">
                        <h4>Wall Color</h4>

                        {/* Wall Color Selector */}
                        <div>
                            <div className="Red" onClick={() => handleColorClick(Red)} />
                            <div style={{ backgroundColor: '#FF4500' }} onClick={() => handleColorClick(Red)} />
                            <div style={{ backgroundColor: '#FF8C00' }} onClick={() => handleColorClick(Red)} />
                            <div style={{ backgroundColor: '#FF6347' }} onClick={() => handleColorClick(Red)} />
                            <div style={{ backgroundColor: '#FFFF00' }} onClick={() => handleColorClick(Red)} />
                        </div>
                        <div>
                            {/* //Green */}
                            <div style={{ backgroundColor: 'green' }} onClick={() => handleColorClick(Green)} />
                            <div className="Yellow" onClick={() => handleColorClick(Yellow)} />
                            <div style={{ backgroundColor: '#7CFC00' }} onClick={() => handleColorClick(Green)} />
                            <div style={{ backgroundColor: '#00FF7F' }} onClick={() => handleColorClick(Green)} />
                            <div className="white" onClick={() => handleColorClick(Default)} />
                        </div>
                        <div>
                            {/* //Blue */}
                            <div style={{ backgroundColor: '#191970' }} onClick={() => handleColorClick(Skyblue)} />
                            <div style={{ backgroundColor: '#4169E1' }} onClick={() => handleColorClick(Skyblue)} />
                            <div style={{ backgroundColor: '#00BFFF' }} onClick={() => handleColorClick(Skyblue)} />
                            <div style={{ backgroundColor: '#5F9EA0' }} onClick={() => handleColorClick(Wall_5F9EA0)} />
                            <div style={{ backgroundColor: '#B0C4DE' }} onClick={() => handleColorClick(Wall_B0C4DE)} />
                        </div>

                        <div>
                            {/* //Purpul */}
                            <div style={{ backgroundColor: '#4B0082' }} onClick={() => handleColorClick(Wall_4B0082)} />
                            <div style={{ backgroundColor: '#800080' }} onClick={() => handleColorClick(Wall_800080)} />
                            <div style={{ backgroundColor: '#ff8cff' }} onClick={() => handleColorClick(Wall_ff8cff)} />
                            <div style={{ backgroundColor: '#eab2e8' }} onClick={() => handleColorClick(Wall_eab2e8)} />
                            <div className="white" onClick={() => handleColorClick(Default)} />

                        </div>
                    </div>

                    {/* Ceil Color Selector */}
                    <div className="Color">
                        <h4>Ceil Color</h4>
                        <div>
                            <div className="Red" onClick={() => handleCeilClick(RR)} />
                            <div style={{ backgroundColor: '#FF4500' }} onClick={() => handleCeilClick(RR)} />
                            <div style={{ backgroundColor: '#FF8C00' }} onClick={() => handleCeilClick(RR)} />
                            <div style={{ backgroundColor: '#FF6347' }} onClick={() => handleCeilClick(RR)} />
                            <div style={{ backgroundColor: '#FFFF00' }} onClick={() => handleCeilClick(RR)} />
                        </div>

                        <div>
                            {/* //Green */}
                            <div style={{ backgroundColor: 'green' }} onClick={() => handleCeilClick(GG)} />
                            <div className="Yellow" onClick={() => handleCeilClick(YY)} />
                            <div style={{ backgroundColor: '#7CFC00' }} onClick={() => handleCeilClick(GG)} />
                            <div style={{ backgroundColor: '#00FF7F' }} onClick={() => handleCeilClick(GG)} />
                            <div className="white" onClick={() => handleCeilClick(Default)} />
                        </div>
                        <div>
                            {/* //Blue */}
                            <div style={{ backgroundColor: '#191970' }} onClick={() => handleCeilClick(SB)} />
                            <div style={{ backgroundColor: '#4169E1' }} onClick={() => handleCeilClick(SB)} />
                            <div style={{ backgroundColor: '#00BFFF' }} onClick={() => handleCeilClick(SB)} />
                            <div style={{ backgroundColor: '#5F9EA0' }} onClick={() => handleCeilClick(Ceil_5F9EA0)} />
                            <div style={{ backgroundColor: '#B0C4DE' }} onClick={() => handleCeilClick(Ceil_B0C4DE)} />
                        </div>

                        <div>
                            {/* //Purpul */}
                            <div style={{ backgroundColor: '#4B0082' }} onClick={() => handleCeilClick(Ceil_4B0082)} />
                            <div style={{ backgroundColor: '#800080' }} onClick={() => handleCeilClick(Ceil_800080)} />
                            <div style={{ backgroundColor: '#ff8cff' }} onClick={() => handleCeilClick(Ceil_ff8cff)} />
                            <div style={{ backgroundColor: '#eab2e8' }} onClick={() => handleCeilClick(Ceil_eab2e8)} />
                            <div className="white"onClick={() => handleCeilClick(Ceil_White)} />

                        </div>
                    </div>

                    <div className="Tile">
                        <h4>Tile Color</h4>
                        <div>
                            <div className="Tile1" onClick={() => handleTileClick(Tile1)} >
                                <img src={Icon1} />
                            </div>
                            <div className="Tile2" onClick={() => handleTileClick(Tile2)}>
                                <img src={Icon2} />
                            </div>
                            <div className="Tile3" onClick={() => handleTileClick(Tile3)} >
                                <img src={Icon3} />
                            </div>
                            <div className="Tile4" onClick={() => handleTileClick(Tile4)} >
                                <img src={Icon4} />
                            </div>
                            <div className="Tile2" onClick={() => handleTileClick(Tile2)}>
                                <img src={Icon2} />
                            </div>
                            <div className="Tile5" onClick={() => handleTileClick(Tile0)} >
                                <img src={Icon0} />
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default CustomImages;
