import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
   <div>
  {/* <header>
    <h1>Morgan Rott</h1>
    <nav>
      <a href="#About-Me">About Me</a>
      <a href="#Work">Work</a>
      <a href="#Contact-Me">Contact Me</a>
    </nav>
  </header> */}
  <Header /> 
  <div className="cover-image">
  </div>
  <main>
    <section id="About-Me" className="page-section">
      <h2>About Me</h2>
      <div>
        <br />
        <p>Welcome to my portfolio page! My name is Morgan and I am brand new to coding. I love putting pieces together to create something bigger, this is a huge reason why I chose a career in coding. 
        </p>
        <br />
      </div>
    </section>
    <Projects />
    <Footer />
  </main>
</div>

    </div>
  );
}

export default App;
