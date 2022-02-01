import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <ul>
        <li><FaTwitterSquare/></li>
        <li><FaFacebookSquare /></li>
        <li><FaInstagramSquare/></li>
        <li><FaGithubSquare/></li>
      </ul>
    </footer>
  );
}
export default Footer;
