import Head from 'next/head'
import dynamic from 'next/dynamic'
import { FaTwitter, FaGithub, FaTelegram } from 'react-icons/fa'

// Import Lottie secara dinamis biar jalan aman di SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import blockchainAnimation from '../public/blockchain-animation.json'

const links = [
  { title: 'Twitter', url: 'https://twitter.com/yourhandle', icon: <FaTwitter /> },
  { title: 'GitHub', url: 'https://github.com/yourhandle', icon: <FaGithub /> },
  { title: 'Telegram', url: 'https://t.me/yourhandle', icon: <FaTelegram /> },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>My Web3 Profile</title>
        <meta name="description" content="Web3 Personal Link Page" />
      </Head>

      {/* Musik Latar */}
      <audio autoPlay loop>
        <source src="/music/emotional-piano.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* NOTE: Ganti /music/romantic-mellow.mp3 jika ingin ubah lagu */}

      <main className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-950 text-white flex flex-col items-center justify-start p-4">
        {/* Background Lottie */}
        <div className="w-full max-w-xl mb-4">
          <Lottie animationData={blockchainAnimation} loop={true} />
        </div>

        <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full border-4 border-blue-300 mb-2" />
        <h1 className="text-2xl font-bold mb-1">Nama Kamu</h1>
        <p className="text-blue-200 mb-6">@username</p>

        <div className="flex flex-col items-center w-full max-w-sm">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full px-4 py-3 mb-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition duration-300 animate-pulse hover:animate-none shadow-lg"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.title}</span>
            </a>
          ))}
        </div>

        {/* Optional: Paragraf + Video */}
        <div className="mt-10 text-center px-4">
          <h2 className="text-lg font-semibold mb-2">Tentang Saya</h2>
          <p className="text-blue-200">Saya adalah penggiat Web3, crypto, dan komunitas blockchain.</p>
          <video controls className="mt-4 rounded-xl max-w-xs mx-auto shadow-lg">
            <source src="/video/perkenalan.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </>
  )
}