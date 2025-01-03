function Footer() {
    return (
      <footer id="contact" className="py-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Email: yourname@example.com</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  