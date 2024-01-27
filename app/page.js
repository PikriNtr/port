import { Bars3Icon } from '@heroicons/react/24/solid'
const menus = [
  { href: '/', text: "home"  },
  { href: '/about', text: "about"  },
  { href: '/contact', text: "contact"  },
]

const icons = [
  {
    href: 'https://instagram.com/PikriNtr',
    icon:
  }
]

export default function Home() {
  return (
    <header className="fixed w-full">
      <div className="py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl xl:max-w-7x1">
        <div className="flex items-center space-x-6">
          <a className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center" href="/">
            <img src="https://avatars.githubusercontent.com/u/82983170?v=4" 
              className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full" 
            />
            <span className="font-semibold leading-[160%] text-text">PikriNtr</span> 
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-2 ">
              {menus.map((menu, index) => (
                <li key={index}>
                <a className="px-3 py-2 leading-[160%] text-sm" href={menu.href}>{menu.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-3">

          <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full">anomaly jir</button>

          <button className="md:hidden p-2">
            <Bars3Icon className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </header>
  );
}
