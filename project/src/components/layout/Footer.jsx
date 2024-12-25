import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ERC-EC</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Promoting sustainable energy practices and regulatory compliance in Kenya.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {['About', 'Programs', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Eagle Africa Centre</li>
              <li>Longonot Road, Upperhill</li>
              <li>P.O Box 42681-00100</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} ERC-EC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}