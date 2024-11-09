import Image from 'next/image';
import Link from 'next/link';
import profilephoto from "../../public/Image/WhatsApp Image 2024-11-01 at 14.44.41_b91fd056.jpg"
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
  
      
      <section className="home">
        <div className="profile">
        <div className="profile-container">
         <div className="profile-pic">

          <Image src={profilephoto} alt="Profile Photo" width={150} height={150} className="profile-pic"/>
          </div>
          </div>
          <h1>Hi, It's <span>Muhammad Usman Khan</span></h1>
          <p className='Go'>I'm a Full Stack Developer</p>
          <p className="description"> I am a web developer focused on crafting pixel-perfect, responsive designs that are both visually captivating and user-friendly. Continuously learning to stay updated with technology, I aim to deliver solutions that truly make a difference.
            </p>
          <div className="social-icons">
          <footer className="footer-container">
      <div className="footer-content">
        
      
        
        
        <ul className="social-links">
          <li>
            <Link href="https://github.com/pixelman10" className="social-link">
            
          <FaGithubSquare  className="social-icon"/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/usman-khan-aa34842b5/" className="social-link">
            <FaLinkedin className="linkedin-icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/khan_usman27/" className="social-link">
             
            <AiOutlineInstagram className="instagram-icon" />


            </Link>
          </li>
        </ul>
      </div>
    </footer>
          </div>
          
        </div>
      </section>
    </div>
  );
}
