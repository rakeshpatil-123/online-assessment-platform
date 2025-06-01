import React from "react";
import { useNavigate } from "react-router-dom";
import SnapVideo from "../../assets/SNAP (online assessment platform).mp4";
import Footer from "../Footer";
function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="h-screen w-screen bg-black text-white z-20 justify-center items-center flex flex-col gap-10">
        <h1 className=" text-2xl text-violet-900">
          Restricted by opportunities?
        </h1>
        <h1 className="text-7xl">
          Get the tech career <br /> you deserve. Faster.
        </h1>
        <h5 className=" text-slate-500">
          Structured coding courses that get you there faster with confidence.
        </h5>
        <button
          onClick={handleClick}
          className="h-12 w-36 text-base hover:bg-lime-600 .2em ease-in-out text-black bg-lime-500 rounded-full"
        >
          Explore Offerings
        </button>
      </div>
      <div className="bg-black ">
        <video className=" h-4/5 w-4/5 mx-auto rounded-3xl " controls>
          <source src={SnapVideo} type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen    bg-white">
        <h1 className="text-6xl text-slate-400 ">OUR OFFERINGS</h1>
        <h2 className="text-slate-500/70">Job Bootcamp For professionals</h2>

        <div className="flex text-slate-700 mt-10 gap-10">
          <div className="card w-96 rounded-2xl shadow-2xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEr8ha_QFKuPFpGBH-HFNK63pjWyz82U7qs2FrPqmftxxByLx5o6OqN2gwe9YGNXXAvxI&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-green-500">
                5k+ Assessment Best Reviews
              </h2>
              <p className="">Assessment drives growth and learning...</p>
              <div className="card-actions pt-3">
                <button className="btn btn-primary bg-green-500 h-10 w-24 rounded-lg">
                  Try it
                </button>
              </div>
              <br />
            </div>
          </div>

          <div className="card bg-base-100 w-96 rounded-2xl shadow-2xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pgPaDY5yi7B_wK37RzITM3DOEoGmlKwiLyotnwScqHr--s8-LP6sKYVn8DrOfRNNplE&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-green-500">
                998+ Assessment Records
              </h2>
              <p>Measure progress, refine your abilities...</p>
              <div className="card-actions pt-3 text-white">
                <button className="btn btn-primary  bg-green-500 h-10 w-24 rounded-lg">
                  Try it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className=" font-black tracking-tight flex flex-col justify-center items-center text-7xl h-[100vh] text-white bg-black">
        <pre>
          <p className="image_on_text">
            {`   4 years of
transforming
 tech careers`}
          </p>
        </pre>
      </div>
      <div className="font-black  flex flex-col justify-center items-center  h-[100vh] text-white bg-black">
        <h1 className="text-7xl tracking-tight font-semibold">
          1.5 Lac+ learners
        </h1>
        <br />
        <span className="text-2xl text-slate-500 font-thin ">
          cracked dream roles at top tech companies
        </span>
      </div>

      <div className="font-black  flex flex-col justify-center items-center  h-[100vh] text-white bg-black">
        <h1 className="text-7xl tracking-tight font-[550]">
          1,400 Alumni in MAANG
        </h1>
        <br />
        <span className="text-3xl text-slate-500 font-thin ">
          & more in 103/111 Unicorns
        </span>
      </div>

      <div className="font-black  flex flex-col justify-center items-center  h-[100vh] text-white bg-black">
        <h1 className="text-7xl tracking-tight font-[550]">
          1.5 Cr+ highest CTC
        </h1>
        <br />
        <span className="text-3xl text-slate-500 font-thin ">
          after completing the course
        </span>
      </div>

      <div className="font-black  flex flex-col justify-center items-center  h-[100vh] text-white bg-black">
        <h1 className="text-7xl tracking-tight font-[550]">
          128% average hike
        </h1>
        <br />
        <span className="text-3xl text-slate-500 font-thin ">
          via our placement cell
        </span>
        <button className="h-12 w-36 text-base mt-20 hover:bg-lime-600 .2em ease-in-out text-black bg-lime-500 rounded-full">
          Explore Offerings
        </button>
      </div>

      <div className=" flex flex-col  justify-center items-center h-[100vh]">
        <div className=" text-9xl">WHY US</div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
