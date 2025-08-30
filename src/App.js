import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CheckboxTree from "./components/CheckboxTree";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Features />
        <section>
          <h2>Task 2: Nested Checkbox Component</h2>
          <p style={{ color: "var(--muted)" }}>
            Try selecting "Select All", "Fruits", or "Vegetables".
          </p>
          <CheckboxTree />
        </section>
      </main>
      <Footer />
    </>
  );
}
