import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ExampleWork from './components/ExampleWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div id="home" className="section-transition">
        <Hero />
      </div>
      <div id="examples" className="section-transition">
        <ExampleWork />
      </div>
      <div id="services" className="section-transition">
        <Services />
      </div>
      <div id="portfolio" className="section-transition">
        <Portfolio />
      </div>
      <div id="contact" className="section-transition">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
