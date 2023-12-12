'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import teamsImage from './../../assets/young-office-team-standing-in-modern-office-picjumbo-com.jpg'
import Image from 'next/image'
import newTeams from './../../assets/pexels-fauxels-3184433.jpg'
import { FaArrowRight } from 'react-icons/fa6'
import './../../styles/fonts.css'
import clsx from 'clsx'

export default function Home() {

  const [openNav, setOpenNav] = useState(false)


  function handleModal() {
    setOpenNav(!openNav)
  }

  return (
    <main className='home min-h-screen bg-slate-100'>
      <header>
        <div className="main-nav py-10  px-8 md:px-14 flex justify-between ">
          <Link href='/' className='text-3xl '>Jobify</Link>
          <div onClick={handleModal} className='flex cursor-pointer md:hidden gap-1 flex-col'>
            <span className='border border-black w-[1rem]'></span>
            <span className='border border-black w-[1rem]'></span>
            <span className='border border-black w-[1rem]'></span>
          </div>
          <nav className={clsx('md:hidden h-[40vh] p-10  justify-center  left-0  bg-white top-20 w-full absolute  ', openNav ? 'flex' : 'hidden')}>
            <ul className='flex flex-col h-full items-center justify-between'>
              <li>
                <Link href='/'>Jobs</Link>

              </li>
              <li>
                <Link href='/'>Projects</Link>
              </li>
              <li>
                <Link href='/' className='text-white p-3 whitespace-nowrap rounded-md bg-blue-500'>Book a call</Link>
              </li>
            </ul>
          </nav>
          <nav className='hidden md:block md:basis-2/4'>
            <ul className='flex justify-between'>
              <li>
                <Link href='/'>Jobs</Link>
                {/* <aside>
                  <ul>
                    <li><Link href='/'>Software Development</Link></li>
                    <li><Link href='/'>Sales</Link></li>
                    <li><Link href='/'>Artificial Intelligence</Link></li>
                  </ul>
                </aside> */}
              </li>
              <li>
                <Link href='/'>Projects</Link>
                {/* <aside>
                  <ul>
                    <li>
                      <Link href='/'>Game Development</Link>
                    </li>
                    <li>
                      <Link href='/'>Video Editing</Link>
                    </li>
                  </ul>
                </aside> */}
              </li>
              <li>
                <Link href='/' className='text-white p-3 whitespace-nowrap rounded-md bg-blue-500'>Book a call</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero flex">
        <div className="text-intro my-auto justify-center  flex gap-5 flex-col md:basis-1/2 pt-14 pl-10">

          <p className='text-5xl font-medium leading-[1.1]  '>Get the best of the best professional hands in any field</p>
          <p className='text-2xl'>Work with established teams and certified professionals</p>

          <div>
            <button className=' text-xl rounded-md text-white p-3 bg-blue-500'>Get Started</button>
          </div>
        </div>
        <div className='hidden md:block basis-0 md:basis-1/2 w-full p-10'>
          <Image src={newTeams} alt='teams' className='rounded-md h-full w-full ro' />
        </div>
      </section>
      <section className='flex min-h-[50vh] justify-center items-center'>
        <div className="hero-section px-10 md:px-0 leading-relaxed  flex flex-col">
          <h3 className='inline-flex items-center self-center font-bold text-3xl'>Why should you work with us?</h3>
          <p>We have worked with over 50 companies and established more than 100 teams</p>
          <p>We have successfully overseen the execution of more than 200 projects completed</p>
        </div>
      </section>
      <section className='flex justify-center items-center flex-col gap-5 my-10'>
        <h3 className='font-bold text-2xl'>Need a service? We&apos;ve got it</h3>
        <div className='flex flex-col w-full gap-5'>
          <ul className="flex gap-5 justify-between px-10 md:px-20 py-10 flex-wrap">
            <li className=" flex w-[45%] md:w-[30%] flex-col gap-3 items-center justify-center">
              <span><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M2 21L17 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L22 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="#000000" stroke-width="1.5"></path></svg></span>
              <span>
                Software Development
              </span>
            </li>
            <li className="flex w-[45%] md:w-[30%] flex-col gap-3 items-center justify-center">
              <span>
                <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 9L13.5 15L15 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 15V9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 15V12M6 12V10.5C6 9.67157 6.67157 9 7.5 9V9C8.32843 9 9 9.67157 9 10.5L9 12M6 12H9M9 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span>
                Video Editing
              </span>
            </li>
            <li className="flex w-[45%] md:w-[30%] flex-col gap-3 items-center justify-center">
              <span><svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 16L7 12M7 12L7 8L9 8C10.1046 8 11 8.89543 11 10V10C11 11.1046 10.1046 12 9 12L7 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 11V11C16.6936 10.3871 16.0672 10 15.382 10H15C14.1716 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 14.1716 13 15 13H15.5C16.3284 13 17 13.6716 17 14.5V14.5C17 15.3284 16.3284 16 15.5 16H15.118C14.4328 16 13.8064 15.6129 13.5 15V15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              <span>Graphics</span>
            </li>
            <li className="flex w-[45%] md:w-[30%] flex-col gap-3 items-center justify-center">
              <span><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M2 19V9C2 7.89543 2.89543 7 4 7H4.5C5.12951 7 5.72229 6.70361 6.1 6.2L8.32 3.24C8.43331 3.08892 8.61115 3 8.8 3H15.2C15.3889 3 15.5667 3.08892 15.68 3.24L17.9 6.2C18.2777 6.70361 18.8705 7 19.5 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              <span>Photography</span>
            </li>
            <li className="flex w-[45%] md:w-[30%] flex-col gap-3 items-center justify-center">
              <span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.167 8.031c-.087-.263.11-.532.383-.532.168 0 .326.107.382.277l2.371 5.953c.071.212-.044.44-.256.51-.211.071-.439-.044-.509-.255 0 0-1.496-.502-3.272.088l1.167 1.813c.121.179.036.423-.165.489l-.794.265-.167.027c-.149 0-.294-.063-.396-.178l-1.604-1.77c-.873.275-1.862-.043-2.192-.865-.076-.189-.115-.391-.115-.593 0-.586.328-1.184 1.039-1.533 3.559-1.747 4.128-3.696 4.128-3.696zm2.528.38c.632.267 1.162.777 1.441 1.465.279.688.253 1.426-.014 2.059l.614.261c.173-.411.264-.856.264-1.309 0-1.32-.78-2.556-2.046-3.091l-.259.615zm-.444 1.052c.365.153.67.446.83.843.162.396.146.82-.006 1.184l.597.255c.219-.52.241-1.122.012-1.685-.228-.563-.662-.98-1.18-1.198l-.253.601zm3.749 9.536h-12v-14.024h12v14.024zm-6 3c-.553 0-1-.448-1-1 0-.551.447-1 1-1 .552 0 1 .449 1 1 0 .552-.448 1-1 1zm-1.5-20h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.275 0-.5-.224-.5-.5s.225-.5.5-.5zm9.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20z" /></svg></span>
              <span>Digital Marketing</span></li>
            <li className="flex w-[45%] md:w-[30%] flex-col gap-3 items-center justify-center">
              <span><svg width="24px" height="24px" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z" fill-rule="nonzero" /></svg></span>
              <span>Copywriting</span></li>
          </ul>


        </div>
      </section>
      <section className='flex my-20 gap-5 flex-col min-h-[70vh] justify-start '>
        <h2 className='text-2xl pl-5 md:w-[60%] font-semibold'>Assign us projects regarding any remote fields and we will deliver beyond your expectations</h2>
        <div className="flex flex-col md:flex-row gap-5 justify-center  p-20">
          <a href='' className="form  rounded-3xl  md:w-[45%] flex justify-end items-end h-[20rem] bg-orange-400 ">
            <div className='text-white justify-center items-center flex gap-2 pb-5 pr-5 '><p className='text-lg'>Fill a Form</p> <span className=''><FaArrowRight /></span></div>
          </a>
          <a href='' className="call rounded-3xl md:w-[45%] flex justify-end items-end h-[20rem] bg-purple-600">
            <div className='text-white flex justify-center items-center gap-2 pb-5 pr-5'><p className='text-lg'>Place a call</p><span className=""><FaArrowRight /></span></div>
          </a>
        </div>
      </section>
      <section className='flex flex-col gap-10'>
        <div className='flex px-10 md:px-20 gap-2 flex-col md:w-[60%]'>
          <h2 className='font-bold text-3xl leading-snug'>Supercharging business enterprises to move faster and reducing time lag on outsourcing</h2>
          <p className='text-xl '>Jobify is a catalyst aimed at improving business life and it shows in our track records </p>
        </div>
        <div className="track">
          <div className="logo-row flex-wrap flex px-10 justify-evenly">
            <div className="logo w-[50%] md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0.512 0.511 748.99 256.61"><g transform="translate(4636.413 -2865.209)"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-11445.563" y1="603.918" x2="-11445.563" y2="465.768" gradientTransform="matrix(1.3509 0 0 -1.3509 10917.478 3681.026)"><stop offset="0" stop-color="#196eef" /><stop offset=".5" stop-color="#186dee" /><stop offset="1" stop-color="#1065e7" /></linearGradient><path d="M-4520.08 2990.41h32.21v45.24c-10.05 3.229-22.74 5-35.931 5-53.46 0-84.88-45.78-84.88-90.49 0-43.851 28.42-74.61 68.07-74.61 25.09 0 39.689 8.5 52.75 20.34v14.76l24.49-24.49c-15.49-10.48-37.92-20.44-69.98-20.44-70.38 0-102.55 50.351-102.55 91.73 0 58.899 42.9 94.38 96.811 94.38 26.14 0 49.35-3.99 76.16-11.45v-46.74c0-2.39 1.05-4.03 2.62-5.47l8.46-8.46h-57.45l-10.78 10.7z" fill="url(#a)" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-11323.519" y1="556.948" x2="-11323.519" y2="467.618" gradientTransform="matrix(1.3509 0 0 -1.3509 10917.478 3681.026)"><stop offset="0" stop-color="#de5744" /><stop offset=".5" stop-color="#db4632" /><stop offset="1" stop-color="#d13d29" /></linearGradient><path d="M-4375.79 2928.93c-40.51 0-65.61 29.601-65.61 61.021 0 27.12 20.221 59.319 61.19 59.319 39.41 0 63.59-29.659 63.59-61.629 0-29.78-23.63-58.7-59.17-58.7v-.011zm-6.721 8.63c28.561 0 41.28 37.21 41.28 63.75 0 39.47-29.61 40.25-33.15 40.25-13.55 0-23.02-8.189-30.109-18.93-6.24-9.899-12.34-28.29-12.34-46.26 0-17.9 5.859-26.64 15.08-33.07 7.54-4.82 14.6-5.74 19.229-5.74h.01z" fill="url(#b)" /><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-11130.575" y1="556.948" x2="-11130.575" y2="413.518" gradientTransform="matrix(1.3509 0 0 -1.3509 10917.478 3681.026)"><stop offset="0" stop-color="#1a6fef" /><stop offset=".25" stop-color="#1e72ef" /><stop offset=".5" stop-color="#166bec" /><stop offset=".75" stop-color="#1267e9" /><stop offset="1" stop-color="#1063e5" stop-opacity=".87" /></linearGradient><path d="M-4110.979 2928.92c-35.381 0-54.521 22.4-54.521 47.41 0 19.04 13.64 40.52 41.78 40.52h7.119s-1.939 4.71-1.949 9.26c0 6.711 2.41 10.48 7.529 16.28-48.42 2.95-67.88 22.48-67.88 43.47 0 18.381 17.601 36.471 54.59 36.471 43.79 0 66.47-24.311 66.47-48.17 0-16.82-8.38-26.04-29.6-41.94-6.24-4.85-7.45-7.939-7.45-11.569 0-5.2 3.11-8.641 4.25-9.94 2.01-2.12 5.49-4.54 6.79-5.7 7.13-6.04 17.2-14.979 17.2-32.82 0-12.24-5.091-22.77-16.69-32.63h14.16l10.64-10.64h-52.438zm-9.76 7.96c6.42 0 11.779 2.27 17.439 6.98 6.279 5.66 16.311 20.87 16.311 39.69 0 20.31-15.78 25.87-24.32 25.87-4.18 0-9.189-1.17-13.43-4.07-9.42-6.109-18.771-22.37-18.771-41.72 0-17.46 10.4-26.75 22.771-26.75zm14.01 113.22c2.699 0 4.64.221 4.64.221s6.37 4.55 10.82 7.949c10.36 8.19 16.819 14.45 16.819 25.601 0 15.33-14.22 27.35-37.25 27.35-25.279 0-44.6-11.77-44.6-30.989 0-15.921 13.24-29.623 49.571-30.132z" fill="url(#c)" /><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-11061.771" y1="601.408" x2="-11061.771" y2="470.128" gradientTransform="matrix(1.3509 0 0 -1.3509 10917.478 3681.026)"><stop offset="0" stop-color="#0aa561" /><stop offset=".5" stop-color="#009b58" /><stop offset="1" stop-color="#00914b" /></linearGradient><path d="M-4050.88 3045.76h48.57l7.399-7.399-13.93-1.74c-3.75-.46-5.979-3.7-5.979-6.84v-146.71c0-2.89 1.34-4.37 2.319-5.311l8.761-8.76h-41.42l-10.78 10.78h16.1v151.97c0 2.16-.68 3.63-2.14 5.14l-8.9 8.87z" fill="url(#d)" /><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="-10998.289" y1="556.948" x2="-10998.289" y2="467.864" gradientTransform="matrix(1.3509 0 0 -1.3509 10917.478 3681.026)"><stop offset="0" stop-color="#de5644" /><stop offset=".5" stop-color="#da4531" /><stop offset="1" stop-color="#ce3a28" /></linearGradient><path d="M-3936.5 2928.93c-27.12 0-55.93 20.67-55.93 57.78 0 30.649 20.67 62.56 59.29 62.56 9.63 0 17.56-1.239 24.99-4.649 7.97-3.67 15.64-9.63 21.239-17.12-10.569 5.33-19.189 8.83-30.64 8.83-21.76 0-42.74-15.7-50.08-44.56l76.87-31.07c-4.44-15.83-16.96-31.771-45.729-31.771h-.01zm-5.021 8.49c14.551 0 25.07 11.97 25.07 21.34 0 3.03-1.899 4.63-5.66 6.11l-47.25 19.11s-1.279-5.95-1.279-12.38c0-26.97 19.5-34.18 29.119-34.18z" fill="url(#e)" /><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="-11221.762" y1="556.754" x2="-11221.762" y2="467.795" gradientTransform="matrix(1.3509 0 0 -1.3509 10917.478 3681.026)"><stop offset="0" stop-color="#ffc01a" /><stop offset=".5" stop-color="#ffba03" /><stop offset="1" stop-color="#ffb300" /></linearGradient><path d="M-4238.33 2928.93c-40.51 0-65.61 29.601-65.61 61.021 0 27.12 20.221 59.319 61.19 59.319 39.41 0 63.59-29.659 63.59-61.629 0-29.78-23.63-58.7-59.17-58.7v-.011zm-6.721 8.63c28.561 0 41.28 37.21 41.28 63.75 0 39.47-29.61 40.25-33.15 40.25-13.55 0-23.02-8.189-30.109-18.93-6.24-9.899-12.34-28.29-12.34-46.26 0-17.9 5.859-26.64 15.08-33.07 7.54-4.82 14.6-5.74 19.229-5.74h.01z" fill="url(#f)" /></g></svg>
            </div>
            <div className="logo w-[50%] md:w-auto ">
              <svg viewBox="0 0 603.9000000000002 129" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M213.2 74.3l-3.6 10.2h-.3c-.6-2.3-1.7-5.8-3.5-10L186.5 26h-18.9v77.3h12.5V55.6c0-3 0-6.4-.1-10.6-.1-2.1-.3-3.7-.4-4.9h.3c.6 3 1.3 5.2 1.8 6.6l23.2 56.4h8.8l23-56.9c.5-1.3 1-3.9 1.5-6.1h.3c-.3 5.7-.5 10.8-.6 13.9v49h13.3V25.8H233zm50.6-26.7h13V103h-13zm6.6-23.4c-2.2 0-4 .8-5.5 2.2s-2.3 3.2-2.3 5.4c0 2.1.8 3.9 2.3 5.3s3.3 2.1 5.5 2.1 4.1-.8 5.5-2.1c1.5-1.4 2.3-3.2 2.3-5.3s-.8-3.9-2.3-5.4c-1.3-1.4-3.2-2.2-5.5-2.2m52.5 22.9c-2.4-.5-4.9-.8-7.3-.8-5.9 0-11.3 1.3-15.8 3.9s-8.1 6.2-10.4 10.7c-2.4 4.6-3.6 9.9-3.6 16 0 5.3 1.2 10 3.5 14.3 2.3 4.2 5.5 7.6 9.8 9.9 4.1 2.3 8.9 3.5 14.3 3.5 6.2 0 11.5-1.3 15.7-3.7l.1-.1v-12l-.5.4c-1.9 1.4-4.1 2.6-6.3 3.3-2.3.8-4.4 1.2-6.2 1.2-5.2 0-9.3-1.5-12.2-4.8-3-3.2-4.5-7.6-4.5-13.1 0-5.7 1.5-10.2 4.6-13.5s7.2-5 12.2-5c4.2 0 8.5 1.4 12.4 4.2l.5.4V49.2l-.1-.1c-1.7-.7-3.6-1.5-6.2-2m42.9-.4c-3.2 0-6.2 1-8.8 3.1-2.2 1.8-3.7 4.4-5 7.5h-.1v-9.7h-13V103h13V74.7c0-4.8 1-8.8 3.2-11.7 2.2-3 5-4.5 8.4-4.5 1.2 0 2.4.3 3.9.5 1.4.4 2.4.8 3.1 1.3l.5.4v-13l-.3-.1c-.9-.6-2.7-.9-4.9-.9m35.4-.3c-9.1 0-16.4 2.7-21.5 8-5.2 5.3-7.7 12.6-7.7 21.8 0 8.6 2.6 15.6 7.6 20.7 5 5 11.8 7.6 20.3 7.6 8.9 0 16-2.7 21.1-8.1 5.2-5.4 7.7-12.6 7.7-21.5 0-8.8-2.4-15.8-7.3-20.9-4.7-5.1-11.6-7.6-20.2-7.6M411.6 89c-2.4 3.1-6.2 4.6-10.9 4.6s-8.5-1.5-11.2-4.8c-2.7-3.1-4-7.6-4-13.3 0-5.9 1.4-10.4 4-13.6 2.7-3.2 6.4-4.8 11.1-4.8 4.6 0 8.2 1.5 10.8 4.6s4 7.6 4 13.5c-.2 6-1.3 10.7-3.8 13.8m46.1-18.4c-4.1-1.7-6.7-3-7.9-4.1-1-1-1.5-2.4-1.5-4.2 0-1.5.6-3 2.1-4s3.2-1.5 5.7-1.5c2.2 0 4.5.4 6.7 1s4.2 1.5 5.8 2.7l.5.4V48.7l-.3-.1c-1.5-.6-3.5-1.2-5.9-1.7-2.4-.4-4.6-.6-6.4-.6-6.2 0-11.3 1.5-15.3 4.8-4 3.1-5.9 7.3-5.9 12.2 0 2.6.4 4.9 1.3 6.8s2.2 3.7 4 5.2c1.8 1.4 4.4 3 8 4.5 3 1.3 5.3 2.3 6.7 3.1s2.3 1.7 3 2.4c.5.8.8 1.8.8 3.1 0 3.7-2.8 5.5-8.5 5.5-2.2 0-4.5-.4-7.2-1.3s-5.2-2.2-7.3-3.7l-.5-.4v12.7l.3.1c1.9.9 4.2 1.5 7 2.2 2.8.5 5.3.9 7.5.9 6.7 0 12.2-1.5 16.1-4.8 4-3.2 6.1-7.3 6.1-12.6 0-3.7-1-7-3.2-9.5-2.9-2.4-6.5-4.9-11.7-6.9m49.2-24.2c-9.1 0-16.4 2.7-21.5 8s-7.7 12.6-7.7 21.8c0 8.6 2.6 15.6 7.6 20.7 5 5 11.8 7.6 20.3 7.6 8.9 0 16-2.7 21.1-8.1 5.2-5.4 7.7-12.6 7.7-21.5 0-8.8-2.4-15.8-7.3-20.9-4.7-5.1-11.6-7.6-20.2-7.6M517.2 89c-2.4 3.1-6.2 4.6-10.9 4.6-4.8 0-8.5-1.5-11.2-4.8-2.7-3.1-4-7.6-4-13.3 0-5.9 1.4-10.4 4-13.6 2.7-3.2 6.4-4.8 11.1-4.8 4.5 0 8.2 1.5 10.8 4.6s4 7.6 4 13.5c0 6-1.3 10.7-3.8 13.8m86.7-30.7V47.6h-13.1V31.2l-.4.1L578 35l-.3.1v12.5h-19.6v-7c0-3.2.8-5.7 2.2-7.3s3.5-2.4 6.1-2.4c1.8 0 3.7.4 5.8 1.3l.5.3V21.2l-.3-.1c-1.8-.6-4.2-1-7.3-1-3.9 0-7.3.9-10.4 2.4-3.1 1.7-5.4 4-7.1 7.1-1.7 3-2.6 6.4-2.6 10.3v7.7h-9.1v10.6h9.1V103h13.1V58.3h19.6v28.5c0 11.7 5.5 17.6 16.5 17.6 1.8 0 3.7-.3 5.5-.6 1.9-.4 3.3-.9 4.1-1.3l.1-.1V91.7l-.5.4c-.8.5-1.5.9-2.7 1.2-1 .3-1.9.4-2.6.4-2.6 0-4.4-.6-5.7-2.1-1.2-1.4-1.8-3.7-1.8-7.1V58.3h13.3z" fill="#737373" /><path d="M0 0h61.3v61.3H0z" fill="#f25022" /><path d="M67.7 0H129v61.3H67.7z" fill="#7fba00" /><path d="M0 67.7h61.3V129H0z" fill="#00a4ef" /><path d="M67.7 67.7H129V129H67.7z" fill="#ffb900" /></svg>
            </div>
            <div className="logo w-[50%] md:w-auto">
              <svg width="100" height="100" viewBox="0 0 512 214" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M35.982 83.484c0-5.546 4.551-7.68 12.09-7.68 10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92 0 6.541-5.688 8.675-13.653 8.675-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106 29.582 0 49.92-14.648 49.92-40.106-.142-42.382-54.329-34.845-54.329-50.774zm96.142-66.986l-34.702 7.395-.142 113.92c0 21.05 15.787 36.551 36.836 36.551 11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862zm71.112 41.386L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524zm38.257-10.524h35.698v124.444h-35.698V47.36zm0-10.809l35.698-7.68V0l-35.698 7.538V36.55zm109.938 8.391c-13.938 0-22.898 6.542-27.875 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96 25.458 0 48.64-20.48 48.64-65.564-.142-41.245-23.609-63.716-48.498-63.716zm-8.533 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968 12.942 0 21.902 14.506 21.902 33.137 0 19.058-8.818 33.28-21.902 33.28zM512 110.08c0-36.409-17.636-65.138-51.342-65.138-33.85 0-54.33 28.73-54.33 64.854 0 42.808 24.179 64.426 58.88 64.426 16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756 8.675 0 17.92 6.685 17.92 22.756h-36.694z" fill="#6772E5" /></svg>
            </div>
            <div className="logo w-[50%] md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1000 758.994"><path fill="#E669A2" d="M1000 325.903H636.264v-93.1H1000v93.1z" /><path fill="#F3BE26" d="M952.755 325.903H636.264V93.051h316.491v232.852z" /><path fill="#EE9C34" d="M821.998 325.903H636.264V0h185.734v325.903z" /><path fill="#F3BC87" d="M858.538 325.903H636.264V36.365h222.274v289.538z" /><path fill="#E3721C" d="M636.213 36.42v289.453h185.765V36.42H636.213z" /><path fill="#AD1B02" d="M450.016 325.903h186.248v46.555H450.016v-46.555z" /><path fill="#E88D14" d="M636.213 93v232.873h222.432V93H636.213z" /><path fill="#D85604" d="M636.213 93v232.873h185.765V93H636.213z" /><path fill="#C14303" d="M752.413 325.903H636.264V186.142h116.149v139.761z" /><path fill="#DB4E18" d="M636.213 232.869v93.004h316.649v-93.004H636.213z" /><path fill="#D1390D" d="M636.213 232.869v93.004h222.432v-93.004H636.213z" /><path fill="#C22303" d="M636.213 232.869v93.004h185.765v-93.004H636.213z" /><path fill="#AD1B02" d="M636.213 232.869v93.004h116.315v-93.004H636.213z" /><path d="M676.76 501.249c-31.689 5.634-48.59 29.577-48.59 71.126 0 42.254 22.534 70.423 55.633 70.423 16.197 0 30.281-5.634 59.858-20.423v34.508c-35.915 16.9-57.042 21.126-85.21 21.126-31.69 0-54.227-7.746-71.832-26.76-18.31-18.311-28.169-42.254-28.169-69.72 0-59.858 45.07-101.407 110.563-101.407 42.958 0 73.24 20.423 73.24 49.296 0 19.014-14.086 32.395-34.508 32.395-10.563 0-19.015-3.521-30.986-9.86M518.31 581.53c28.873-35.915 39.437-50.704 39.437-68.31s-14.085-33.1-33.803-33.1c-11.268 0-21.83 6.339-26.76 11.973v73.943L450 629.416V485.756h-45.07l-74.649 123.24v-123.24h-25.353l-68.31 15.494v17.605l37.324 3.52v152.818h47.183l71.831-118.31v118.31h52.817M93.662 651.249h10.563c38.027 0 59.154-23.24 59.154-69.72 0-38.731-16.9-59.858-48.592-59.858-4.225 0-10.563.704-21.126 2.817v126.76h.001zm0 83.098l30.985 7.042v17.605H2.817v-17.605l28.168-7.042V521.67H0v-17.605l73.943-22.535h19.72v25.353c34.506-21.127 46.478-24.648 64.787-24.648 40.846 0 71.831 38.028 71.831 90.846 0 60.563-41.549 102.112-104.93 102.112-7.042 0-19.014-.704-31.689-1.408" /></svg>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="flex flex-col px-4 md:px-0 gap-3 w-[95%] md:w-[80%] rounded-3xl mx-auto items-center justify-center my-10 min-h-[40vh] md:min-h-[60vh] bg-blue-300">

          <p className='text-xl md:text-2xl font-bold'>Subscribe to receive our latest deals and news</p>
          <div className='flex border w-[60%] border-black/30 rounded-3xl  p-1'>
            <input placeholder='Enter your email address' className=' border-none md:text-xl w-[90%] bg-transparent p-3 outline-none' type="text" />
            <button className='rounded-3xl text-white bg-blue-500 px-4 py-2'>Subscribe</button>
          </div>
          <p className='text-center '>Your privacy is important to us, so we&apos;ll never spam you or share your info with third parties. </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between min-h-[30vh] mx-auto max-w-[80vw] items-center">
        <div className='gap-3 flex flex-col'>
          <p className='text-xl'>Try Jobify now</p>
          <h3 className='font-bold text-3xl'>Start work on your project within record time</h3>
        </div>
        <div>
          <button className='text-white bg-blue-500 py-2 px-6 leading h-[3rem] rounded-xl font-bold'>Place a call now</button>
        </div>
      </section>
      <footer className="flex min-h-[60vh] justify-center items-center ">
        <div className='flex flex-col gap-10 md:gap-0 mt-20 mb-5 md:flex-row justify-between w-full px-10 md:px-20'>

          <div className='flex flex-col gap-5'>
            <div className="logo text-3xl">Jobify</div>
            <p>A108 Adam Street <br />
              New York, NY 535022 <br />
              United States</p>
          </div>

          <ul className='gap-5'>
            <li className='font-bold mb-4'>Socials</li>
            <li>
              <Link target='_blank' className='hover:underline hover:text-blue-500' href='https://x.com/jobify'>X</Link>
            </li>
            <li>
              <Link target='_blank' className='hover:underline hover:text-blue-500' href='https://linkedin.com/in/jobify'>LinkedIn</Link>
            </li>
            <li>
              <Link href='https://instagram.com/jobify' className='hover:underline hover:text-blue-500' target='_blank'>Instagram</Link>
            </li>
          </ul>

          <div>
            <p className='font-bold mb-4'>Contact Us</p>
            <a className='hover:text-blue-500' href="mailto:hello@jobify.com">hello@jobify.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

