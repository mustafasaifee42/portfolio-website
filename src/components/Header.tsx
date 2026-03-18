// import { Link } from '@tanstack/react-router';
import { Github, Linkedin, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeaderEl() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className='px-6 py-2 fixed top-0 z-10 w-full'>
      <div
        className={`flex max-w-[1348px] mx-auto items-center w-full justify-between p-4 rounded-md transition-all duration-300
        ${
          scrolled
            ? 'backdrop-blur-3xl bg-grey-04/background-muted shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className='flex justify-center gap-2'>
          <div className='size-6 box-border border border-grey-03 text-grey-02 rounded-lg flex justify-center items-center'>
            <Terminal size={16} />
          </div>
          <div className='font-mono text-lg'>ms</div>
        </div>
        <div className='flex justify-center gap-4'>
          <a
            href='https://www.linkedin.com/in/mustafasaifee/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='https://github.com/mustafasaifee42'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
