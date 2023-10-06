import Navbar from "../../components/Header/Navbar";
import "./findHotel.css";
import hotel1 from '../../assets/Rectangle 26.png'
import hotel2 from '../../assets/Rectangle 27.png'
import hotel3 from '../../assets/Rectangle 28.png'
import { Map, Marker } from "pigeon-maps"

const FindHotel = () => {
  return (
    <div className="mb-12">
      <Navbar></Navbar>
      <hr className="style" />
      <h1 className="text-center mt-8">Stay in Hotels</h1>
      <div className="flex gap-8 px-4">
        <div className="flex-1  ">
          {/* <h1 className="mt-6">Stay in hotel</h1> */}

          <div className="my-8">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={hotel1}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Light bright airy stylish apt & safe peaceful stay
                </h2>
                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                <p>Wif Air conditioning Kitchen</p>
                <p>Cancellation fexibility availiable</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Book</button>
                </div>
              </div>
            </div>
            <br />
          </div> <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={hotel2}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Light bright airy stylish apt & safe peaceful stay
                </h2>
                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                <p>Wif Air conditioning Kitchen</p>
                <p>Cancellation fexibility availiable</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Book</button>
                </div>
              </div>
            </div>
          </div>
          <br />
           <div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={hotel3}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Light bright airy stylish apt & safe peaceful stay
                </h2>
                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                <p>Wif Air conditioning Kitchen</p>
                <p>Cancellation fexibility availiable</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Book</button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div className="flex-1 rounded-xl pt-10 w-full">
   


    <Map height={888} defaultCenter={[21.45, 92.00]} defaultZoom={11} >
      <Marker width={50} anchor={[21.45, 92.00]} />
    </Map>
  
 
        </div>
      </div>
    </div>
  );
};

export default FindHotel;
