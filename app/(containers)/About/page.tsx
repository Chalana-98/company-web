import React from "react";

function AboutPage() {
  return (
    <main>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-12 pt-24 bg-background text-foreground">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-foreground/70 mt-4 text-lg max-w-xl text-center">
          CoreDigit X - Where innovation meets simplicity.
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
