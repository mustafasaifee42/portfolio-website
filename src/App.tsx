import { H2, H3, H6, P } from '@undp/design-system-react/Typography';
import { Spacer } from '@undp/design-system-react/Spacer';
import { Terminal } from 'lucide-react';

import LogoTicker from './components/LogoTicker';
import TagsList from './components/TagsList';
import { ProjectData, SideProjectData } from './ProjectData';
import { LinkOrDiv } from './components/LinkOrDiv';

function App() {
  const params = new URLSearchParams(window.location.search);
  const order = params.get('o') || '0_5_4_6_1_2_7_8_3';
  const orderArray = [
    ...new Set(
      order
        .split('_')
        .map(Number)
        .filter(n => !isNaN(n)),
    ),
  ];
  const orderedProjects = orderArray
    .map(i => (i < ProjectData.length ? ProjectData[i] : null))
    .filter(d => d !== null);
  const colorList = [
    'red',
    'orange',
    'blue',
    'green',
    'yellow',
    'cyan',
    'primary',
  ];
  return (
    <div className='bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px]'>
      <div className='parent relative min-h-screen w-full justify-center flex flex-col'>
        <div className='px-6 max-w-[1348px] mx-auto py-50 w-full'>
          <H2 className='animate-blur-in font-normal'>
            <span className='text-subtle-foreground'>Hello! I'm</span> Mustafa
            Saifee
          </H2>
          <H3 className='animate-blur-in font-normal'>
            Designer + developer{' '}
            <span className='text-subtle-foreground'>based in</span> Helsinki,
            FI
          </H3>
          <H3 className='animate-blur-in font-normal leading-[1.5]'>
            10+ years{' '}
            <span className='text-subtle-foreground'>
              designing and developing data-heavy apps and SaaS
            </span>{' '}
            <span className='text-subtle-foreground'>products across</span>{' '}
            space industry, humanitarian sectors, tech industry, energy,
            financial, <span className='text-subtle-foreground'>and</span>{' '}
            logistics sector.
          </H3>
          <Spacer size='4xl' />
          <H6
            className='animate-blur-in text-subtle-foreground'
            marginBottom='none'
          >
            Designed and developed for
          </H6>
          <LogoTicker
            logos={[
              './imgs/undp-logo.png',
              './imgs/iceye-logo.png',
              './imgs/aiven-logo.png',
              './imgs/nordea-logo.png',
              './imgs/vr-logo.png',
              './imgs/fortum-logo.png',
              './imgs/fingrid-logo.png',
              './imgs/macgregor-logo.png',
            ]}
          />
        </div>
      </div>
      <div className='px-6 mx-auto w-full max-w-[1348px] mx-auto'>
        <P
          className='font-mono shrink-0 text-primary'
          marginBottom='sm'
          size='sm'
        >
          [client work]
        </P>
        <div className='flex gap-3 items-center'>
          <Terminal className='text-subtle-foreground' />
          <P className='font-mono shrink-0' marginBottom='none' size='xl'>
            Selected works
            <span className='animate-[blink_1s_step-end_infinite] font-bold'>
              _
            </span>
          </P>
        </div>
        <Spacer size='8xl' />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16'>
          {orderedProjects.map((project, i) => (
            <LinkOrDiv
              key={i}
              as={project.link ? 'a' : 'div'}
              href={project.link}
            >
              <div className='group relative flex flex-col gap-4 cursor-pointer'>
                <div className='relative'>
                  <div
                    className='aspect-[125/79] w-full rounded-[8px] bg-cover bg-center bg-no-repeat'
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />
                  <div className='absolute inset-0 w-full aspect-[125/79] rounded-[8px] overflow-hidden'>
                    <div className='absolute inset-0 w-full aspect-[125/79]'>
                      <div
                        className={`w-full h-full mask-[url('./imgs/covers/cover-01.svg')] mask-center mask-no-repeat mask-contain -webkit-mask-[url('./imgs/covers/cover-01.svg')] -webkit-mask-center -webkit-mask-no-repeat -webkit-mask-contain scale-0 transition-transform duration-500 group-hover:scale-[2.25]`}
                        style={{
                          backgroundColor: `var(--color-${project.color})`,
                        }}
                      />
                      <div className='text-white absolute inset-0 w-full p-10 scale-0 transition-transform duration-500 group-hover:scale-[1]'>
                        <div className='h-full flex flex-col gap-4'>
                          <div className='grow'>
                            <P className='text-[24px]! leading-[1.5] opacity-background-frosted'>
                              {project.description}
                            </P>
                            <P
                              className='text-[16px]! opacity-text-muted'
                              marginBottom='none'
                            >
                              Client:{' '}
                              <span className='italic'>{project.client}</span>
                            </P>
                            <Spacer size='sm' />
                            <P
                              className='text-[16px]! opacity-text-muted'
                              marginBottom='none'
                            >
                              Role:{' '}
                              <span className='italic'>{project.role}</span>
                            </P>
                          </div>
                          <P
                            className='text-[16px]! italic opacity-background-frosted'
                            marginBottom='none'
                          >
                            {project.linkText}
                          </P>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                </div>
                <div>
                  <P className='font-mono' marginBottom='none'>
                    {project.projectTitle}
                  </P>
                  <Spacer size='lg' />
                  <TagsList tags={project.tags} color={project.color} />
                </div>
              </div>
            </LinkOrDiv>
          ))}
        </div>
        <Spacer size='8xl' />
        <Spacer size='8xl' />
        <P
          className='font-mono shrink-0 text-primary'
          marginBottom='sm'
          size='sm'
        >
          [experiments and exploration]
        </P>
        <div className='flex gap-3 items-center'>
          <Terminal className='text-subtle-foreground' />
          <P className='font-mono shrink-0' marginBottom='none' size='xl'>
            Side projects
            <span className='animate-[blink_1s_step-end_infinite] font-bold'>
              _
            </span>
          </P>
        </div>
        <Spacer size='8xl' />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-16'>
          {SideProjectData.map((project, i) => (
            <LinkOrDiv
              key={i}
              as={project.link ? 'a' : 'div'}
              href={project.link}
            >
              <div className='group relative flex flex-col gap-4 cursor-pointer'>
                <div className='relative'>
                  <div
                    className='aspect-[9/16] w-full rounded-[8px] bg-cover bg-center bg-no-repeat'
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />
                  <div className='absolute inset-0 w-full aspect-[9/16] rounded-[8px] overflow-hidden'>
                    <div className='absolute inset-0 w-full aspect-[9/16]'>
                      <div
                        className={`w-full h-full mask-[url('./imgs/covers/cover-01.svg')] mask-center mask-no-repeat mask-contain -webkit-mask-[url('./imgs/covers/cover-01.svg')] -webkit-mask-center -webkit-mask-no-repeat -webkit-mask-contain scale-0 transition-transform duration-500 group-hover:scale-[2.5]`}
                        style={{
                          backgroundColor: `var(--color-${colorList[i % 7]})`,
                        }}
                      />
                      <div className='text-white absolute inset-0 w-full p-10 scale-0 transition-transform duration-500 group-hover:scale-[1]'>
                        <div className='h-full flex flex-col gap-4'>
                          <div className='grow'>
                            <P className='text-[24px]! leading-[1.5] opacity-background-frosted'>
                              {project.description}
                            </P>
                            <P
                              className='text-[16px]! opacity-text-muted'
                              marginBottom='none'
                            >
                              {project.tags.map((tag, j) => (
                                <span key={j} className='mr-2'>
                                  {tag}
                                </span>
                              ))}
                            </P>
                          </div>
                          <P
                            className='text-[16px]! italic opacity-background-frosted'
                            marginBottom='none'
                          >
                            Click to explore the project
                          </P>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                </div>
                <div>
                  <P className='font-mono' marginBottom='none'>
                    {project.projectTitle}
                  </P>
                </div>
              </div>
            </LinkOrDiv>
          ))}
        </div>
        <Spacer size='8xl' />
        <Spacer size='8xl' />
      </div>
    </div>
  );
}

export default App;
