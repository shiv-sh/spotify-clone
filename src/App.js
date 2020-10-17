import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  const [initialPlaylist,setIntialPlaylist] = useState('');
  // run code based on given condition

  useEffect(()=> {
    spotify.getPlaylist(initialPlaylist).then((playlist) => {
      console.log("Punjabi playlist",playlist);
      let obj = {
        name:playlist.name,
        image:playlist.images[0].url,
        songList:playlist.tracks
      }
      dispatch({
        type:"SET_TRACKS",
        tracks: obj
      })
    })
  },[initialPlaylist])

  useEffect(() => {
    // code..
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        

        dispatch({
          type:'SET_USER',
          user: user
        });

      });

      spotify.getUserPlaylists().then((playlist)=> {
        console.log("something",playlist);
        setIntialPlaylist(playlist.items[0].id);
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlist,
        });
      });
      
    }
  }, [])

  return (
    <div className="app">
    {
      token ? (
      <Player spotify = {spotify}/>) : (
      <Login />)
    }

    </div>
  );
}

export default App;
