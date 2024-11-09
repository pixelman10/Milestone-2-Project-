
import Link from 'next/link';

export default function Header(){
    return(
    
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about-me">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/education">Education</Link>
      </nav>
    </header>
    )
}