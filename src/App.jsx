import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>TechNova</h1>
          <p>Smarter Tech for a Smarter You</p>
          <p>Explore the latest in smart devices and cutting-edge gadgets</p>
          <button>Tech Now</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          <Card
            name="TechNova Smartwatch X1"
            description=" Sleek design meets advanced health tracking, 7-day battery, and water resistance."
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D"
          />

          <Card
            name="TechNova Noise-Canceling Headphones"
            description="Immersive audio with active noise cancellation and 30-hour playtime."
            image="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
          />

          <Card
            name="TechNova UltraSlim Laptop Pro"
            description="Lightweight, powerful, and built for productivity with 4K display and all-day battery."
            image="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
          />

          <Card
            name="TechNova Wireless Charger Pad"
            description="Fast, convenient charging for all your devices, with a sleek minimalist design."
            image="https://images.unsplash.com/photo-1636015856875-00ce4b89433d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoYXJnZXJ8ZW58MHwwfDB8fHww"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
