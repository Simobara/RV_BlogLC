import Header from '../1Header/Header';
import Body from '../2Body/Body';
import Footer from '../3Footer/Footer';

function App() {
  return (
    <div className="min-h-[100vh] min-w-[100vw] flex flex-col">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
