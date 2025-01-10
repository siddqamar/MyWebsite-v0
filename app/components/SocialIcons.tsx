'use client'

import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { SiHuggingface } from 'react-icons/si'

const socialLinks = [
  { icon: FaXTwitter, href: 'https://x.com/siddqamar_ai', label: 'X', hoverColor: 'text-white' },
  { icon: SiHuggingface, href: 'https://huggingface.co/siddqamar', label: 'Hugging Face', hoverColor: 'text-yellow-400' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/siddqamar', label: 'LinkedIn', hoverColor: 'text-blue-500' },
  { icon: FaGithub, href: 'https://github.com/siddqamar', label: 'GitHub', hoverColor: 'text-white' },
]

export default function SocialIcons() {
  return (
    <>
      <style jsx>{`
        .icon-wrapper {
          position: relative;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .icon-wrapper:hover {
          transform: scale(1.2);
        }
        .icon-wrapper::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: linear-gradient(45deg, #00f, #f0f, #00f, #f0f);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .icon-wrapper:hover::before {
          opacity: 1;
          animation: rotate 2s linear infinite;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div className="flex justify-center space-x-8">
        {socialLinks.map((link, index) => (
          <div key={index} className="icon-wrapper">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-4xl text-white hover:${link.hoverColor} transition-colors`}
              aria-label={link.label}
            >
              <link.icon />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

