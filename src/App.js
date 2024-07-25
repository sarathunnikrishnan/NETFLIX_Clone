// import logo from './logo.svg';
import './App.css';
import Navbar from './NETFLIX/Navbar';
import Searchbar from './NETFLIX/Searchbar';
import EnjoyOnYourTv from './NETFLIX/Enjoy/EnjoyOnYourTv';
import DownloadShows from './NETFLIX/Download/DownloadShows';
import Watch from './NETFLIX/Watch/Watch';
import Children from './NETFLIX/Children/Children';
import Questions from './NETFLIX/Questions/Questions';
import End from './NETFLIX/End/End'; 
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      
     <div className='header'>
      <Navbar />
      <Searchbar />
      <EnjoyOnYourTv />
      <DownloadShows />
      <Watch />
      <Children />
      <Questions />
      <End />
     
      </div>   
    </>
    
      
  
  );
}

export default App;
