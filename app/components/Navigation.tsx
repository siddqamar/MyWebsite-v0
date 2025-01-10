'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-20 flex justify-center transition-all duration-300 ease-in-out hover:transform hover:scale-105">
      <div className="bg-gray-800 bg-opacity-10 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg relative overflow-hidden nav-container">
        <ul className="flex space-x-4">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/projects', label: 'Projects' },
            { href: '/social', label: 'Social' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded-full transition-colors ${
                  pathname === href
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .nav-container::before,
          .nav-container::after {
            content: '';
            position: absolute;
            background: rgba(0, 123, 255, 0.2);
            filter: blur(20px);
          }
          .nav-container::before {
            left: -20px;
            right: -20px;
            bottom: -20px;
            height: 40px;
          }
          .nav-container::after {
            top: 20px;
            bottom: 0;
            width: 40px;
            left: -20px;
            box-shadow: calc(100% + 40px) 0 0 rgba(0, 123, 255, 0.2);
          }
        `}</style>
      </div>
    </nav>
  )
}

