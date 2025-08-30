import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Responsive Layout Demo</h1>
        <p>
          This layout adjusts beautifully across desktop, tablet, and mobile
          screens. Resize the browser to see the effect.
        </p>
        <button className="cta-btn">Primary Action</button>
      </div>
      <div>
        <img
          src="https://picsum.photos/seed/figma/500/300"
          alt="hero"
          style={{ borderRadius: "12px", width: "100%" }}
        />
      </div>
    </section>
  );
}
