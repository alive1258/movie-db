import MovieCard from './MovieCard'
import Sidebar from './Sidebar'

const Landing = ({ dict }) => {
  return (
    <>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        {/* <!-- Sidebar --> */}
        <Sidebar dict={dict} />

        {/* <!-- Content --> */}
        <div class="content">
          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {/* <!-- Begin Card --> */}
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
