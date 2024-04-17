import Image from 'next/image'

const Sidebar = ({ dict }) => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image
                height={24}
                width={24}
                src="/assets/icons/trending.svg"
                alt="trending"
              />
              <span>{dict?.trending}</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                height={24}
                width={24}
                src="/assets/icons/newRelease.svg"
                alt="newRelease"
              />
              <span>{dict?.newReleases}</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                height={24}
                width={24}
                src="/assets/icons/commingSoon.svg"
                alt="commingSoon"
              />
              <span>{dict?.comingSoon}</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                height={24}
                width={24}
                src="./assets/icons/favourite.svg"
                alt="favourite"
              />
              <span>{dict?.favourites}</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                height={24}
                width={24}
                src="./assets/icons/watchLater.svg"
                alt="watchLater"
              />
              <span>{dict?.watchLater}</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
