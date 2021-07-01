import './App.css';
import Topbar from './components/Topbar'
import LatestPostSection from './components/LatestPostSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Topbar />
      <LatestPostSection />
      <Footer />
    </div>
  );
}

export default App;
