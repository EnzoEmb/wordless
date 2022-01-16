import Header from '../components/Header';
import Canvas from '../components/Canvas';
import Keyboard from '../components/Keyboard';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className="mx-auto max-w-3xl flex flex-col justify-between py-4 sm:py-10" style={{ minHeight: 'calc(var(--vh) * 100)' }}>
      <Header />
      <Canvas />
      <Keyboard />
    </div>
  )
}
