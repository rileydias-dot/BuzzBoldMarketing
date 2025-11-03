import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ExampleWork from './components/ExampleWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="examples">
        <ExampleWork />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
