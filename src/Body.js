import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body({ spotify }) {
    const [{ tracks }, { user }, dispatch] = useDataLayerValue();
    // const [{ user }, dispatch] = useDataLayerValue();
    console.log("TTTTTT>>>",tracks)
    return (
        
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={tracks?.image} alt="Some Image" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{tracks ?.name}</h2>
                    <p>{user ?.display_name}
                        <li>{tracks?.songList?.items.length} songs</li>
                    </p>

                </div>
            </div>
            <div className="body__songs">
            <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon fontSize="large"/>
            <MoreHorizIcon className=""/>
            </div>
            {tracks?.songList?.items.map((item) => (
                <SongRow track={item.track}/>
            ))}
            </div>
        </div>
    )
}

export default Body
