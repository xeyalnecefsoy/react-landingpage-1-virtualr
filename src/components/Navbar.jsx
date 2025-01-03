import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-neutral-900 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" className="h-8 w-8 mr-2" />
                    <span className="text-xl tracking-tight">VirtualR</span> 
                </div>
                <ul className="hidden lg:flex items-center space-x-4 ml-14">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href} 
                                className="hover:text-orange-500 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.href.split('#')[1]).scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-8 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md hover:bg-neutral-800 transition duration-200">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md 
                    hover:from-white hover:to-white hover:text-orange-500  transition duration-200">
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md-flex flex-col justify end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a 
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(item.href.split('#')[1]).scrollIntoView({ behavior: 'smooth' });
                                        setMobileDrawerOpen(false);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                            Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
