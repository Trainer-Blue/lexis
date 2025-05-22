import Link from 'next/link';
import { BookText, Mail, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 dark:bg-accent/30 border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 shrink-0 group w-fit">
              <BookText className="w-6 h-6 text-primary group-hover:rotate-12 transform transition duration-300 ease-in-out" />
              <span className="font-extrabold text-xl text-gray-900 dark:text-gray-100">
                LexisPDF
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transform your PDFs into concise, easy-to-digest summaries with our AI-powered tool.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/#demo" className="hover:text-primary transition-colors">Demo</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              {/* <li><Link href="/upload" className="hover:text-primary transition-colors">Pricing</Link></li> */}
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          {/* <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div> */}

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:ishansiddhartha@gmail.com" className="hover:text-primary transition-colors">
                  ishansiddhartha@gmail.com
                </a>
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://x.com/1IshanSidd1" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://github.com/Trainer-Blue" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/ishan-siddhartha-647544299/" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/sidd_1shan?igsh=MWhqZWlxMmJjcG9oOQ==" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 mt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LexisPDF. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
