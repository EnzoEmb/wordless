import Header from '../components/Header';
import Canvas from '../components/Canvas';
import Keyboard from '../components/Keyboard';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl flex flex-col justify-between min-h-screen py-10">
      <Header />
      <Canvas />
      <Keyboard />
    </div>
  )
}
