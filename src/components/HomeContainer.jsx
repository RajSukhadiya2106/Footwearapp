import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/red.png"


import { heroData } from "../utils/data";
import Typewriter from 'typewriter-effect';



const HomeContainer = () => {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
            id="home"
        >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full shadow-2xl">
                    <p className="text-base text-orange-500 font-semibold">
                        Working In This Module to give best service and home Delivery
                    </p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery"
                        />
                    </div>
                </div>
                <div className="text-4xl font-bold text-center mt-8 text-red-600 ">
                    <Typewriter
                        options={{
                            strings: ['Welcome To Our Website'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>


                <p className="text-base text-orange-900 text-2xl text-center md:text-left md:w-[80%]">
                    Hello All,Welcome to our website. Here you will get a best offer for any kinds of shoes and will also get best offers in it. All we have different categories for shoes such as for mens,womens,kids,olds and many more.

                </p>

                <p className="text-base text-green-500 text-center md:text-left md:w-[80%]">

                </p>

                <button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 shadow-o"
                >
                    Order Now
                </button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img
                    src={HeroBg}
                    className=" ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-full "
                    alt="hero-bg"
                />

                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
                    {heroData &&
                        heroData.map((n) => (
                            <div
                                key={n.id}
                                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img
                                    src={n.imageSrc}
                                    className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                                    alt="I1"
                                />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                    {n.name}
                                </p>

                                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                    {n.decp}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">Rs</span> {n.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;