import React from 'react';
import './globals.css';
import Furialogo from '../../public/furialogo.png';

export default function Home() {
  return (
    <>
      <nav className="w-full text-white py-4 shadow-md bg-white/10 backdrop-blur-md backdrop-saturate-150 border-b border-white/20 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center px-4">
          <img src={Furialogo.src} alt="Logo" className="h-16 sm:h-20 md:h-24" />
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-center space-y-8 px-4 pt-36 bg-[#212121]">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl text-center max-w-4xl text-white leading-snug">
          Agora o time do povo tem um chat para a torcida tirar suas dúvidas e até bater um papo FURIOSO!
        </h1>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-video sm:h-[500px] md:h-[600px]">
            <iframe
              src="https://landbot.online/v3/H-2911837-E8SN04XA6JCRWNCC/index.html"
              width="100%"
              height="100%"
              className="w-full h-full rounded-xl shadow-lg border"
              allow="camera; microphone"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
