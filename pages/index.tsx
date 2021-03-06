import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, Element as ScrollElement, Events, scrollSpy } from 'react-scroll'
import { FC, useEffect, useRef, VFC } from 'react'
import styles from '../styles/Home.module.css'
import { HiExternalLink } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'

const Home: NextPage = () => {

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log("begin", to, element);
    })

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', to, element);
    });

    scrollSpy.update();
  })

  const projects: Project[] = [
    {
      title: 'NoteApp',
      short_description: 'A simple note app to demonstrate skills in Next.js, Typescript, Prisma, MySQL, Redux Toolkit, and Tailwind.',
      description: 'A simple note app to demonstrate skills in Next.js, Typescript, Prisma, MySQL, Redux Toolkit, and Tailwind.',
      image: "/images/noteapp.png",
      link: "https://notes.calebwilson.dev",
      repository: "https://github.com/acalebwilson24/next_notes"
    }
  ]

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Header />
      </div>
      <main className='flex-grow flex flex-col'>
        <ScrollElement name='home' className='px-8 h-full min-h-[70vh] flex items-center' >
          <div className='max-w-7xl mx-auto w-full flex justify-center pb-10 flex-col h-full'>
            <p className='text-slate-300 text-xl mb-0'>My name is <span className='text-sky-300/90'>Caleb Wilson</span></p>
            <h1 className='mb-0 text-[100px]'>I&apos;m a Web Developer</h1>
            <p className='mb-16 text-4xl text-slate-300'>I build websites</p>
          </div>
        </ScrollElement>
        <ScrollElement name='about' className='px-8 bg-slate-700 h-full'>
          <div className='max-w-7xl mx-auto py-16' id="about">
            <h2 className='text-4xl mb-4'>About</h2>
            <div className='mt-2 max-w-xl'>
              <p className='mb-4'>
                I&apos;m a highly motivated full-stack web developer with over a year of experience, largely self-taught and directed. I have experience building a variety of sites, from static pages for local businesses to eCommerce sites and web applications, using a range of front and back-end languages, tooling, and techniques.
              </p>
              <p className='mb-4'>
                Large project diversity has given me great experience in picking up new skills, filling in gaps in my knowledge, and adopting modern programming practices.
              </p>
              <p>
                In my free time, I enjoy running, playing the piano, and cooking.
              </p>
            </div>
          </div>
        </ScrollElement>
        <ScrollElement name='projects' className='px-8 bg-slate-800 h-full'>
          <div className='max-w-7xl mx-auto py-16' id="projects">
            <h2 className='text-4xl mb-4'>Projects</h2>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {projects.map((project, index) => <ProjectCard {...project} key={project.title} />)}
            </div>
          </div>
        </ScrollElement>
        <ScrollElement name='contact' className='px-8 bg-slate-700 h-full'>
          <div className='max-w-7xl mx-auto py-16' id="contact">
            <h2 className='text-4xl mb-4'>Contact</h2>
            <div className='mt-2 flex flex-col gap-4 max-w-sm '>
              <label className='flex flex-col'>
                <span className='mb-2'>Name</span>
                <input type="text" placeholder="Name" className='bg-slate-600 border-transparent placeholder:text-slate-400' />
              </label>
              <label className='flex flex-col'>
                <span className='mb-2'>Email</span>
                <input type="text" placeholder="Email" className='bg-slate-600 border-transparent placeholder:text-slate-400' />
              </label>
              <label className='flex flex-col'>
                <span className='mb-2'>Message</span>
                <textarea placeholder="Message" className='bg-slate-600 border-transparent placeholder:text-slate-400' />
              </label>
              <button>Send</button>
            </div>
          </div>
        </ScrollElement>
      </main>

      <Footer>

      </Footer>
    </>
  )
}

type Project = {
  title: string
  short_description: string
  description: string
  image?: string
  link: string
  repository: string
}

const ProjectCard: VFC<Project> = (props) => {
  const { title, description, image, link, repository } = props;

  return (
    <div className='bg-slate-700 shadow-lg shadow-slate-900/40 p-6 rounded-lg'>
      <h3 className='text-2xl mb-4 border-b pb-3 border-slate-400'>{title}</h3>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center mb-4 relative'>
          {
            image && (
              <div className='mb-2'>
                <Image src={image} height={300} width={500}  className='w-full rounded-md' alt={title + " image"} />
              </div>
            )
          }
          <p className='text-slate-300 text-base mb-0'>{description}</p>
        </div>
        <div className='flex gap-4 items-center'>
          <Link href={link}>
            <a target="_blank" className='text-sky-300/90 flex items-center gap-2 px-4 py-2 border border-sky-300/50 rounded-md hover:bg-slate-600/30'><HiExternalLink /> <span>Live</span></a>
          </Link>
          <Link href={repository}>
            <a target="_blank" className='text-sky-300/90 flex items-center gap-2 px-4 py-2 border border-sky-300/50 rounded-md hover:bg-slate-600/30'><AiFillGithub /> Repo</a>
          </Link>
        </div>
      </div>
    </div>
  )
  
}

const Footer: FC = ({ children }) => {
  return (
    <footer>{children}</footer>
  )
}

const Header: FC = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const links = [
    "Home", "About", "Projects", "Contact"
  ]

  return (
    <>
      <header className='bg-slate-800 px-8 fixed w-full'>
        <div className='max-w-7xl mx-auto py-3 flex justify-between items-center'>
          <h1 className='font-semibold'>Caleb Wilson</h1>
          <div className='flex gap-6 items-center'>
            <ul className='flex'>
              {links.map(l => (
                <li key={l}>
                  <ScrollLink 
                    to={l.toLowerCase()} 
                    activeClass="underline underline-offset-2 decoration-slate-400" 
                    spy={true} 
                    smooth={true} 
                    duration={400} 
                    className="py-1 px-3 rounded-md cursor-pointer"
                  >
                    {l}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <button className='bg-sky-600 px-4 py-1 rounded-md text-sm'>CV</button>
          </div>
        </div>
      </header>
      <div style={{ height: headerRef.current ? headerRef.current.offsetHeight : 0 }} />
    </>
  )
}

export default Home
