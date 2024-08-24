// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-dark py-8 text-sm mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="text-lg font-semibold mb-2">  <Image src="/logo-2.jpeg" height={500} width={200}/>
            </div>
            <p className='font-light  text-center'>Patwa Utensils is a digital & offline platform founded with the vision to give better global exposure to local crafters and ensure financial stability in their lives. We happily bring before the customers, a wide variety of traditional utensils and decor items. We also endeavor to educate the people on the goodness of traditional crafts. We provide corporate gifting options too.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li><Link href="/about" className="hover:underline no-underline">About Us</Link></li>
              <li><Link href="/careers" className="hover:underline no-underline">Careers</Link></li>
              <li><Link href="/blog" className="hover:underline no-underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul>
              <li><Link href="/contact" className="hover:underline no-underline">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:underline no-underline">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:underline no-underline">Shipping & Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="flex flex-col  ">
              <li><a href="https://www.facebook.com " target="_blank" rel="noopener noreferrer" className="hover:underline no-underline">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline no-underline">Twitter</a></li>
              <li><a href="https://www.instagram.com " target="_blank" rel="noopener noreferrer" className="hover:underline no-underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 ">Address</h3>
            <div className='flex flex-col no-underline'>
            <p >Patwa Utensils Harrai, Dist. Chhindwara,</p>
            <p> Pin Code-480224</p>
            <p >Phone: 7649062706</p>
            <p >Email: sarthakpatwa972@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
