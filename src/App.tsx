import "./App.css";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Map from "./components/Map";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <div className="max-container max-h-screen ">
        <div>
          <div className="w-full h-20 flex  sm:pt-8 pt-4 pl-4">
            <div className=" h-60 w-60  ">
              <img src="../src/assets/laserLogo.png" alt="" />
            </div>
          </div>
          <section className="pt-12 pr-8 pl-8 pb-12">
            <Form />
          </section>
          <section className="pt-12  pb-12">
            <Map />
          </section>
          <section className="pt-12 pr-8 pl-8 pb-12">
            <CardsSection />
          </section>
          <section className="relative ">
            <div className="relative  ">
              <Footer />
              <div className="pl-28">
                <div
                  className="flex flex-1  bg-red-600 p-6 
              sm:w-auto w-[356px] shadow-lg absolute bottom-64 rounded-tr-md rounded-bl-md rounded-tl-4xl  rounded-br-4xl "
                >
                  <Newsletter />
                </div>
              </div>

              <div className="w-full flex justify-end bg-black ">
                <div className="  mt-24 mr-20 mb-20 text-2xl ml-4">
                  <img src="../src/assets/Group.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
