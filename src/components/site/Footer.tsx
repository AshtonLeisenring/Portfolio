const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ashton Leisenring</p>
        <p>Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
