import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Furialogo from '../../public/furia-logo.png';

export default function Home() {
  return (
    <>
      <nav className="w-full text-white py-4 shadow-md bg-white/10 backdrop-blur-md backdrop-saturate-150 border-b border-white/20 fixed top-0 z-50">
        <div className="container mx-auto flex justify-center items-center">
          <img src={Furialogo.src} alt="Logo" className="h-24 " />
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4 bg-[#212121] pt-32">
        <h1 className="text-5xl text-center max-w-3xl text-white">
          Agora o time do povo tem um chat para a torcida tirar suas dúvidas e até bater um papo FURIOSO!
        </h1>

        <div className="flex justify-center items-center w-full">
          <iframe
            src="https://landbot.online/v3/H-2911837-E8SN04XA6JCRWNCC/index.html"
            width="100%"
            height="600"
            className="max-w-3xl w-full rounded-xl shadow-lg border shadow-xl"
            allow="camera; microphone"
          ></iframe>
        </div>
      </main>
    </>
  );
}
