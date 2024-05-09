import Trending from './(Home)/Trending'
import Tech from './(Home)/Tech'
import Travel from './(Home)/Travel'
import Other from './(Shared)/Other'
import Subscribe from './(Shared)/Subscribe'

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending/>
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech/>
          <Travel/>
          <Other/>
          <div className="hidden md:block">
            <Subscribe/>
          </div>
        </div>
        <div className="basis-1/4">
          {/* <Sidebar/> */}
        </div>
      </div>
    </main>
  );
}
