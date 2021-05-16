import React from 'react';
import YouTube from 'react-youtube';

// const ReactYoutube = (videoId) => {
class ReactYoutube extends React.Component {
  
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        const player = event.target
        player.seekTo(105);
        player.mute();
        console.log(event.target)
    }

    render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        frameborder:0,
      },
    };
    const { videoId } = this.props

    return <YouTube
            videoId={ videoId } 
            opts={ opts } 
            onReady={ this.videoOnReady } />
  }
}
 
export default ReactYoutube;