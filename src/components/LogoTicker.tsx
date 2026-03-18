export default function LogoTicker({ logos }: { logos: string[] }) {
  return (
    <div className='overflow-hidden py-6 animate-blur-in'>
      <div className='absolute left-0 top-0 h-full w-30 bg-gradient-to-r from-background to-transparent z-10' />
      <div className='absolute right-0 top-0 h-full w-30 bg-gradient-to-l from-background to-transparent z-10' />

      <div className='flex w-max items-center animate-logo-ticker space-x-12 will-change-transform [animation-delay:1.25s]'>
        {[
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
        ].map((logo, i) => (
          <img
            alt='logo'
            key={i}
            src={logo}
            className={`shrink-0 ${logo.includes('undp') ? 'h-13' : 'h-4.5'}`}
          />
        ))}
      </div>
    </div>
  );
}
