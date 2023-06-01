import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  // const [currentPage, setCurrentPage] = useState('About');
  return (
    <div className="App">
   <div>
  <Header /> 
  <div className="cover-image">
  </div>
  <main>
    < About />
    {/* <section id="About-Me" className="page-section">
      <h2>About Me</h2>
      <div>
        <br />
        <p>Welcome to my portfolio page! My name is Morgan and I am brand new to coding. I love putting pieces together to create something bigger, this is a huge reason why I chose a career in coding. 
        </p>
        <br />
      </div>
    </section> */}
    <Projects />
    <Footer />
  </main>
</div>

    </div>
  );
}

export default App;
