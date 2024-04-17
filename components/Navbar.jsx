import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <Link href="/">
            <Image height={26} width={139} src="/assets/logo.svg" alt="logo" />
          </Link>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  height={24}
                  width={24}
                  src="/assets/ring.svg"
                  alt="ring"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/sun.svg"
                  alt="sun"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  height={24}
                  width={24}
                  src="/assets/shopping-cart.svg"
                  alt="shopping-cart"
                />
              </a>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
