import ReactYoutube from './ReactYoutube'

const Home = ({ url }) => {
 
    return ( 
        <div className="youtubeVideo">
            <ReactYoutube videoId={ url } />
        </div>
     );
}

export default Home;
