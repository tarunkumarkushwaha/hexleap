import Card from "@/component/Card";
import Card2 from "@/component/Card2";


export default function Home() {
  return (<>
    <header>
      <nav className="flex justify-center my-4 font-bold text-3xl">
        <h1>Sports</h1>
      </nav>
    </header>
    <main>
      <section className="flex flex-col justify-center items-center p-20">
        <div className="flex flex-row flex-wrap">
          <Card />
        </div>
        <div className="flex justify-center py-20">
          <button className="h-[30px] w-[80px] bg-blue-500 rounded-lg btn">
            See More
          </button>
        </div>
        <section>
          <div className="flex text-3xl font-semibold justify-center my-8 ">Collection Spotlight</div>
          <div className="flex flex-col justify-center mx-16">
            <p className="text-xl my-10">
              Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
            </p>
            <div className="flex">
              <Card2/>
            </div>
          </div>
        </section>
      </section>
    </main>
  </>
  );
}
