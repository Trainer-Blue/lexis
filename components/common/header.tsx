import NavLink from './nav-link';
import { BookText, FileText } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
    const isLoggedIn = false;
    return <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
        <div>
            <NavLink href="/" className='flex items-center gap-1 lg:gap-2 shrink-0 group'><BookText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 group-hover:rotate-12 transform transition duration-300 ease-in-out" /><span className='font-extrabold lg:text-xl text-gray-900'>LexisPDF</span></NavLink>
        </div>

        <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
            <NavLink href="/#pricing">Pricing</NavLink>
            {isLoggedIn && (<NavLink href="/dashboard">Your Summaries</NavLink>)}
        </div>

        <div className='flex lg:justify-end'>
            {isLoggedIn? (<div className="flex gap-2 items-center">
                <NavLink href="/upload">Upload a PDF</NavLink>
                <div>Pro</div>
                <Button className='py-0 px-2'>User</Button>
            </div>) :
            (<div>
                <NavLink href="/sign-in">Sign In</NavLink>
            </div>)
            }
        </div>
    </nav>
}
