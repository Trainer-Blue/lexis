import NavLink from './nav-link';
import { BookText, FileText } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
    const isLoggedIn = false;
    return <header className="sticky top-0 z-50 w-full backdrop-blur-xs bg-transparent border-gray-900">
            <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
                <div>
                    <NavLink href="/" className='flex items-center gap-1 lg:gap-2 shrink-0 group'><BookText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 dark:text-gray-100 group-hover:rotate-12 transform transition duration-300 ease-in-out" /><span className='font-extrabold lg:text-xl text-gray-900 dark:text-gray-100'>LexisPDF</span></NavLink>
                </div>

                <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
                    <NavLink href="/upload">Upload a PDF{/*used to be Pricing */}</NavLink>
                    <SignedIn>
                        <NavLink href="/dashboard">Your Summaries</NavLink>
                    </SignedIn>
                </div>

                <div className='flex lg:justify-end'>
                    <SignedIn>
                        <div className="flex gap-2 items-center">
                            {/* <NavLink href="/upload">Upload a PDF</NavLink>
                            <div>Pro</div> */}
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <div>
                            <NavLink href="/sign-in">Sign In</NavLink>
                        </div>
                    </SignedOut>
                    
                </div>
            </nav>
        </header>
}
