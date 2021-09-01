
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

function App() {
  
  return (
  <>
    <Navbar/>
    <div className="container my-3">
   <TextForm heading="Enter the text to analyze"/>
   </div>
</>
  );
}

export default App;
