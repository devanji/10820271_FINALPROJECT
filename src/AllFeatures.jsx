import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';

function AllFeatures() {
  
  return (
    
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />

     
   
    </main>
  )
}

export default AllFeatures
