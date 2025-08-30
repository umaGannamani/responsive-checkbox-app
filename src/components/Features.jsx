import React from "react";

export default function Features() {
  return (
    <section id="features" className="features">
      {["Feature 1", "Feature 2", "Feature 3"].map((f, i) => (
        <div className="feature-card" key={i}>
          <h3>{f}</h3>
          <p style={{ color: "var(--muted)" }}>
            Responsive feature card with consistent spacing and style.
          </p>
        </div>
      ))}
    </section>
  );
}
