import './App.css';

import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  let animateList = document.querySelectorAll(".hidden");
  const observe = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
            if(element.isIntersecting){
              console.log(element);
              element.target.classList.add('slide');
            }
    })
  })
  
  animateList.forEach((el)=>observe.observe(el));
  return (
    <div>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
