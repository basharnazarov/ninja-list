import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={30} />
        {/* <h1> Ninja list</h1> */}
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
      <Link href="/stepper">
        <a>Mui Stepper</a>
      </Link>
      <Link href="/slick">
        <a>Slick</a>
      </Link>
      <Link href="/carousel">
        <a>Carousel</a>
      </Link>
      <Link href="/form">
        <a>Form</a>
      </Link>
    </nav>
  );
};

export default Navbar;
