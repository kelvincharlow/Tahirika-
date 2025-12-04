import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-white">
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Our Products Section (formerly Portfolio) */}
        <Portfolio />
        
        {/* Services Section */}
        <Services />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Partners Section */}
        <Partners />
        
        {/* Footer Section */}
        <Footer />
        
        {/* Interactive Contact Widget */}
        <ContactWidget />
      </div>
    </ErrorBoundary>
  );
}

export default App;