import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
// import Body from './Body';
// import Blocks from './Blocks';
// import Users from './Users';
import SubmitQuestion from './Questions/SubmitQuestion';
import Questions from './Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubmitQuestion/>
      <hr/>
      <Questions/>
      {/*<Users/>
       <Body/>
      <Blocks/> */}
      <Footer/>
    </div>
  );
}

export default App;
