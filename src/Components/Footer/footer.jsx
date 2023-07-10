import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>&copy; { new Date().getYear() + 1900 } Erik Nelson</p>
    </footer>
   )
}

export default Footer;