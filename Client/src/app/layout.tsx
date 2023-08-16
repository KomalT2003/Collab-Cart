'use client'
import './globals.css'
import {useState} from 'react'
import UserModal from '../components/Modal'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Floating from '../components/Floating'
import {addUser} from './features/user/userSlice'
import {Provider} from 'react-redux'
import {store} from './store'
import { io } from 'socket.io-client'
import ChatBox from '@/components/chat/ChatBox'
import { useAppDispatch } from './hooks'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

export const socket = io('http://localhost:5000',
{autoConnect: false, }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  return (
    <html lang="en">
      <body className={inter.className} >
        <Provider store={store}>
        <ChatBox />
        <div className='min-h-[65vh] w-full font-primary light'>
          <Navbar openModal={() => setIsModalOpen(true)} />
          <Floating/>
          {children}
          <Footer/>
          <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        </Provider>
      </body>
    </html>
  )
}
