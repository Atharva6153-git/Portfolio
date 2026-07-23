import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-[hsl(var(--border))] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Built by Atharva Jadhav.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
