import { Twitter, Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const routes = [
  {path:"/", name:"Home"},
  {path:"/cities", name: "Cities"}
]
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 dark:border-t-2  ">
      <div className=" md:flex  md:justify-between lg:w-[67%] m-auto relative">
        {/* Sección Home */}
        <div className='pb-8'>
          <h3 className="font-bold text-lg ">Quick links</h3>
          <ul className="mt-2 space-y-2">
            {routes.map((route)=>(
              <li key={route.path}><NavLink to={route.path} className="hover:underline">{route.name}</NavLink></li>
            ))}
          </ul>
        </div>
        
        {/* Sección Contacto */}
        <div className='md:absolute md:left-1/2 md:transform md:-translate-x-1/2 pb-8'>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="mt-2 space-y-2 text-gray-200">
            <li>123 Street, City</li>
            <li>Email: Contact@myitinerary.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>

        {/* Sección Redes Sociales */}
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2">
              <Facebook className="w-5 h-5" /> <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center space-x-2">
              <Instagram className="w-5 h-5" /> <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <Twitter className="w-5 h-5" /> <a href="#" className="hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
