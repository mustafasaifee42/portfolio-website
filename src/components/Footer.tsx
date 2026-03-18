import { MoveUpRight } from 'lucide-react';

export default function FooterEl() {
  const params = new URLSearchParams(window.location.search);
  const resumeType = params.get('cat')?.toUpperCase() === 'DV' ? 'DV' : 'UX';
  return (
    <footer>
      <div className='flex max-w-[1348px] mx-auto items-center w-full justify-between p-4 bg-transparent border-t border-gray-400 flex-wrap'>
        <div className='flex items-center gap-6 flex-wrap'>
          <div className='font-mono text-[16px]'>Mustafa Saifee</div>
          <a
            href='https://www.linkedin.com/in/mustafasaifee/'
            target='_blank'
            className='font-mono text-[16px] flex items-center gap-1 bg-transparent'
            rel='noopener noreferrer'
          >
            LinkedIn
            <MoveUpRight size={16} />
          </a>
          <a
            href='https://github.com/mustafasaifee42'
            target='_blank'
            className='font-mono text-[16px] flex items-center gap-1 bg-transparent'
            rel='noopener noreferrer'
          >
            Github
            <MoveUpRight size={16} />
          </a>
          <a
            href='mailto:saifee.mustafa@gmail.com'
            target='_blank'
            className='font-mono text-[16px] flex items-center gap-1 bg-transparent'
            rel='noopener noreferrer'
          >
            Email
            <MoveUpRight size={16} />
          </a>
          <a
            href={`./docs/Resume_${resumeType}.pdf`}
            target='_blank'
            className='font-mono text-[16px] flex items-center gap-1 bg-transparent'
            rel='noopener noreferrer'
          >
            Resume
            <MoveUpRight size={16} />
          </a>
        </div>
        <div className='font-mono text-[16px]'>© 2026</div>
      </div>
    </footer>
  );
}
