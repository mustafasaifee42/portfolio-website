import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@undp/design-system-react/Tooltip';

export default function LogoTicker({
  logos,
}: {
  logos: { logo: string; helpText: string }[];
}) {
  return (
    <div className='overflow-hidden py-6 animate-blur-in'>
      <div className='absolute left-0 top-0 h-full w-30 bg-gradient-to-r from-background to-transparent z-10' />
      <div className='absolute right-0 top-0 h-full w-30 bg-gradient-to-l from-background to-transparent z-10' />
      <div className='flex w-max items-center animate-logo-ticker hover:[animation-play-state:paused] space-x-12 will-change-transform [animation-delay:1.25s] py-4'>
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
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <img
                  alt='logo'
                  key={i}
                  src={logo.logo}
                  className={`shrink-0 ${logo.logo.includes('undp') ? 'h-13' : 'h-4.5'}`}
                />
              </TooltipTrigger>
              <TooltipContent className='text-[14px]! py-0.5 px-1 bg-grey-05 border-0'>
                {logo.helpText}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
