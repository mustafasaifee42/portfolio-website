import { H2, H3, P } from '@undp/design-system-react/Typography';
import { Spacer } from '@undp/design-system-react/Spacer';
import {
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
  Terminal,
} from 'lucide-react';
import { MarkdownRenderer } from '@undp/design-system-react/MarkdownRenderer';

import LogoTicker from './components/LogoTicker';
import TagsList from './components/TagsList';
import { ProjectData, SideProjectData } from './ProjectData';
import { LinkOrDiv } from './components/LinkOrDiv';

function App() {
  const params = new URLSearchParams(window.location.search);
  const order = params.get('o');
  const resumeType = params.get('cat')?.toUpperCase() === 'DV' ? 'DV' : 'UX';

  const orderArray = order
    ? [
        ...new Set(
          order
            .toLowerCase()
            .split('')
            .filter(char => char >= 'a' && char <= 'z')
            .map(char => char.charCodeAt(0) - 97),
        ),
      ]
    : [...Array(ProjectData.length).keys()];
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
    <>
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
              designing and building data-rich products across
            </span>{' '}
            space, SaaS, finTech, energy, and international development.
          </H3>
          <Spacer size='xl' />
          <div className='flex gap-4 animate-blur-in'>
            <a
              href='mailto:saifee.mustafa@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full flex gap-2 items-center bg-primary px-6 py-2 text-[18px] text-white hover:bg-primary-hover'
            >
              <Mail size={20} />
              Contact me
            </a>
            <a
              href={`./docs/Resume_${resumeType}.pdf`}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full flex gap-2 items-center bg-grey-05 px-6 py-2 text-[18px] border border-grey-01 hover:border-primary hover:text-primary'
            >
              <Download size={20} />
              Resume
            </a>
          </div>
          <Spacer size='7xl' />
          <P
            className='animate-blur-in font-normal! text-[18px]!'
            marginBottom='none'
          >
            Designed and developed for
          </P>
          <LogoTicker
            logos={[
              {
                logo: './imgs/undp-logo.png',
                helpText: 'United Nations Development Programme',
              },
              {
                logo: './imgs/iceye-logo.png',
                helpText: 'ICEYE (Satellite & SAR Data)',
              },
              {
                logo: './imgs/aiven-logo.png',
                helpText: 'Aiven (Data Infrastructure Platform)',
              },
              {
                logo: './imgs/nordea-logo.png',
                helpText: 'Nordea (Banking & Financial Services)',
              },
              {
                logo: './imgs/vr-logo.png',
                helpText: 'VR Group (Finnish Railways)',
              },
              {
                logo: './imgs/fortum-logo.png',
                helpText: 'Fortum (Energy Company)',
              },
              {
                logo: './imgs/fingrid-logo.png',
                helpText: 'Fingrid (Electricity Transmission Operator)',
              },
              {
                logo: './imgs/macgregor-logo.png',
                helpText: 'MacGregor (Cargo & Load Handling Solutions)',
              },
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
            <div key={i} className='group relative flex flex-col gap-4'>
              <LinkOrDiv
                key={i}
                as={project.link ? 'a' : 'div'}
                href={project.link}
              >
                <div className='relative'>
                  <div className='aspect-[125/79] w-full rounded-[8px] overflow-hidden'>
                    <img
                      className='aspect-[125/79] w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.1] lg:group-hover:scale-[1]'
                      src={project.image}
                      alt='cover'
                    />
                  </div>
                  <div className='hidden lg:block absolute inset-0 w-full aspect-[125/79] rounded-[8px] overflow-hidden'>
                    <div className='absolute inset-0 w-full aspect-[125/79]'>
                      <div
                        className={`w-full h-full mask-[url('./imgs/covers/cover-01.svg')] mask-center mask-no-repeat mask-contain -webkit-mask-[url('./imgs/covers/cover-01.svg')] -webkit-mask-center -webkit-mask-no-repeat -webkit-mask-contain scale-0 transition-transform duration-500 group-hover:scale-[2.25]`}
                        style={{
                          backgroundColor: `var(--color-${project.color})`,
                        }}
                      />
                      <div className='text-white absolute inset-0 w-full p-6 xl:p-10 scale-0 transition-transform duration-500 group-hover:scale-[1]'>
                        <div className='h-full flex flex-col gap-4'>
                          <div className='grow'>
                            <MarkdownRenderer
                              text={project.description}
                              classNames={{
                                p: 'text:[18px]! md:text-[18px]! xl:text-[20px]! leading-[1.5]',
                              }}
                            />
                            <P className='text-[16px]!' marginBottom='none'>
                              <MarkdownRenderer
                                text={`Client: ${project.client}`}
                                classNames={{
                                  p: 'text-[16px]! mb-0',
                                }}
                              />
                            </P>
                            <Spacer size='base' />
                            <P className='text-[16px]!' marginBottom='none'>
                              Role:{' '}
                              <span className='font-bold'>{project.role}</span>
                            </P>
                          </div>
                          {project.link ? (
                            <div className='flex'>
                              <P
                                className='text-[16px]! md:text-[16px]! xl:text-[18px]! bg-white font-medium px-6 py-2 rounded-full flex items-center gap-2'
                                marginBottom='none'
                                style={{
                                  color: `var(--color-${project.color})`,
                                }}
                              >
                                {project.linkText}
                                <ChevronRight className='group-hover:animate-[chevronMove_0.5s_ease-out_infinite]' />
                              </P>
                            </div>
                          ) : (
                            <P
                              className='text-[16px]! md:text-[16px]! xl:text-[18px]! text-white font-medium'
                              marginBottom='none'
                            >
                              {project.linkText}
                            </P>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                </div>
              </LinkOrDiv>
              <div>
                {project.link ? (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 items-center hover:underline hover:underline-offset-4'
                  >
                    <P className='font-sans' marginBottom='none'>
                      {project.projectTitle} ↗
                    </P>
                  </a>
                ) : (
                  <P className='font-sans' marginBottom='none'>
                    {project.projectTitle}
                  </P>
                )}
                <Spacer size='lg' />
                <TagsList tags={project.tags} color={project.color} />
                <div className='text-grey-02 opacity-ghost block lg:hidden'>
                  <Spacer size='lg' />
                  <div>
                    <MarkdownRenderer
                      text={project.description}
                      classNames={{
                        p: 'text-[18px]! leading-[1.5]',
                      }}
                    />
                    <MarkdownRenderer
                      text={`Client: ${project.client}`}
                      classNames={{
                        p: 'text-[16px]! mb-3',
                      }}
                    />
                    <MarkdownRenderer
                      text={`Role: __${project.role}__`}
                      classNames={{
                        p: 'text-[16px]! mb-0',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
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
            <div className='group relative flex flex-col gap-4'>
              <LinkOrDiv
                key={i}
                as={project.link ? 'a' : 'div'}
                href={project.link}
              >
                <div className='relative'>
                  <div className='aspect-[9/16] w-full rounded-[8px] overflow-hidden'>
                    <img
                      className='aspect-[9/16] w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.1] lg:group-hover:scale-[1]'
                      src={project.image}
                      alt='cover'
                    />
                  </div>
                  <div className='hidden lg:block absolute inset-0 w-full aspect-[9/16] rounded-[8px] overflow-hidden'>
                    <div className='absolute inset-0 w-full aspect-[9/16]'>
                      <div
                        className={`w-full h-full mask-[url('./imgs/covers/cover-01.svg')] mask-center mask-no-repeat mask-contain -webkit-mask-[url('./imgs/covers/cover-01.svg')] -webkit-mask-center -webkit-mask-no-repeat -webkit-mask-contain scale-0 transition-transform duration-500 group-hover:scale-[2.5]`}
                        style={{
                          backgroundColor: `var(--color-${colorList[i % 7]})`,
                        }}
                      />
                      <div className='text-white absolute inset-0 w-full p-10 scale-0 transition-transform duration-500 group-hover:lg:scale-[1]'>
                        <div className='h-full flex flex-col gap-4'>
                          <div className='grow'>
                            <P className='text-[18px]! md:text-[18px]! xl:text-[20px]! leading-[1.5]'>
                              {project.description}
                            </P>
                            <P className='text-[14px]!' marginBottom='none'>
                              {project.tags.map((tag, j) => (
                                <span key={j} className='mr-2'>
                                  {tag}
                                </span>
                              ))}
                            </P>
                          </div>
                          <div className='flex'>
                            <P
                              className='text-[16px]! md:text-[16px]! xl:text-[18px]! bg-white font-medium px-6 py-2 rounded-full flex items-center gap-2'
                              marginBottom='none'
                              style={{
                                color: `var(--color-${colorList[i % 7]})`,
                              }}
                            >
                              View project
                              <ChevronRight className='group-hover:animate-[chevronMove_0.5s_ease-out_infinite]' />
                            </P>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                </div>
              </LinkOrDiv>
              <div>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex gap-2 items-center hover:underline hover:underline-offset-4'
                >
                  <P className='font-sans' marginBottom='none'>
                    {project.projectTitle} ↗
                  </P>
                </a>
                <div className='text-grey-02 opacity-ghost block lg:hidden'>
                  <Spacer size='lg' />
                  <div>
                    <MarkdownRenderer
                      text={project.description}
                      classNames={{
                        p: 'text-[18px]! leading-[1.5]',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Spacer size='8xl' />
        <Spacer size='8xl' />
        <P
          className='font-mono shrink-0 text-primary'
          marginBottom='sm'
          size='sm'
        >
          [contact]
        </P>
        <Spacer size='8xl' />
        <div className='flex gap-2 items-center'>
          <H3 className='font-normal leading-[1.5]' marginBottom='none'>
            Let's Talk
          </H3>
          <PhoneCall className='animate-[wave_1s_ease-out_infinite]' />
        </div>
        <Spacer size='lg' />
        <P>Have a project in mind? Let’s talk. Or just come say hi.</P>
        <div className='flex flex-wrap gap-x-4 gap-y-2'>
          <a
            href='https://www.linkedin.com/in/mustafasaifee/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full flex gap-2 items-center bg-grey-05 px-6 py-2 text-[18px] border border-grey-01 hover:border-primary hover:text-primary'
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href='https://github.com/mustafasaifee42'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full flex gap-2 items-center bg-grey-05 px-6 py-2 text-[18px] border border-grey-01 hover:border-primary hover:text-primary'
          >
            <Github size={20} />
            Github
          </a>
          <a
            href='mailto:saifee.mustafa@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full flex gap-2 items-center bg-grey-05 px-6 py-2 text-[18px] border border-grey-01 hover:border-primary hover:text-primary'
          >
            <Mail size={20} />
            Email
          </a>
        </div>

        <Spacer size='8xl' />
        <Spacer size='8xl' />
      </div>
    </>
  );
}

export default App;
