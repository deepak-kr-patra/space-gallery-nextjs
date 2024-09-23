'use client'

import { useEffect } from 'react'
import './styling/home.css'
import Link from 'next/link';
import useScreenWidth from './zustand/useScreenWidth';


const Home = () => {

  const { setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showAlphabet');
        }
      });
    });

    const hiddenAlpha = document.querySelectorAll('.alphabet');
    hiddenAlpha.forEach((el) => observer.observe(el));

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-intro-n-btn');
        }
      });
    });

    const hiddenItems = document.querySelectorAll('.intro-n-btn');
    hiddenItems.forEach((el) => observer2.observe(el));
  }, []);

  return (
    <div className='text-white w-full h-screen flex flex-col items-center justify-center'>
      <div className="w-full relative flex items-center justify-center overflow-hidden">
        <h1 className='text-[6vmin]'>
          <span className="alphabet">S</span>
          <span className="alphabet">P</span>
          <span className="alphabet">A</span>
          <span className="alphabet">C</span>
          <span className="alphabet">E</span>
          <span className="alphabet"> </span>
          <span className="alphabet">G</span>
          <span className="alphabet">A</span>
          <span className="alphabet">L</span>
          <span className="alphabet">L</span>
          <span className="alphabet">E</span>
          <span className="alphabet">R</span>
          <span className="alphabet">Y</span>
        </h1>
        <img src="/rocket.png" alt="rocket image" className='absolute rocket-image' />
      </div>

      <div className="max-w-mddd w-full flex flex-col items-center justify-center text-center p-4 gap-4">
        <p className="intro-n-btn home-text">The place for beautiful pictures of the cosmos.</p>
        <Link href="/explore" className='intro-n-btn'><button className="btn rounded-3xl apod-button">Explore</button></Link>
      </div>
    </div>
  )
}

export default Home