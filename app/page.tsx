import { CustomFilter, Hero, SearchBar } from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p className="mt-4">Discover the best cars in the world</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter  />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
