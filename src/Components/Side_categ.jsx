// components/SideCategoryBar.js
import Link from 'next/link';
import Slide from './Slide';
import Homecart from './Homecart';

import Footer from './Footer';
const links = [
  {
    id: 1,
    link: "/brass",
    nam:"Brass Utensils",
  },
  {
    id: 2,
    link: "/bronze",
    nam:"Bronze Utensils ",
  },
  
  {
    id: 3,
    link: "/cast-iron",
    nam:"Cast Iron Utensils",
  },
  {
    id: 4,
    link: "/New_arrival",
    nam:"New Arrival",
  },
  {
    id: 5,
    link: "/Spirituals_item",
    nam:"Spirituals item",
  },
  {
    id: 6,
    link: "/copper",
    nam:"Copper Utensils",
  },
  {
    id: 7,
    link: "/indalium",
    nam:"Indalium",
  },
  {
    id: 8,
    link: "/brass_lamp",
    nam:"Brass lamp",
  },

];


const Side_categ = () => {
  return (
    <>
      
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">CATEGORIES</h1>
          <table className="table-fixed w-60 bg-light">
            <tbody>
              {links.map(({ id, link, nam }) => (
                <tr key={id} className="border">
                  <td className="px-4 py-2">
                  <a href={link} className="no-underline text-purple-800 text-base font-medium py-2 px-0 text-left  w-full">{nam}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
  
 
    </>
  );
};

export default Side_categ;