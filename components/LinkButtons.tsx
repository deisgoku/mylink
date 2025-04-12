import { FaTwitter, FaGithub, FaTelegram } from 'react-icons/fa';

const links = [
  { title: 'Twitter', url: 'https://x.com/Deisgoku?t=y6q537zFLu1Ni8kjI6YNjw&s=09', icon: <FaTwitter /> },
  { title: 'GitHub', url: 'https://github.com/yourhandle', icon: <FaGithub /> },
  { title: 'Telegram', url: 't.me/DeisGoku', icon: <FaTelegram /> },
];

export default function LinkButtons() {
  return (
    <div className="flex flex-col items-center mt-4">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-64 px-4 py-2 mb-4 text-white bg-blue-600 rounded hover:bg-blue-700 animate-pulse"
        >
          <span className="mr-2">{link.icon}</span>
          {link.title}
        </a>
      ))}
    </div>
  );
}