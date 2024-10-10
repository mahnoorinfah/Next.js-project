import React from "react";
import Navbar from "./Navbar";
 const Header = () => {
    return(
        <div id = "head" className='min-h-screen bg-no-repeat bg-[url(/picture_bg.png)] bg-leftt lg:bg-[15%] bg-cover'
        style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px" }}
        >
            <Navbar/>
            <div className="container grid lg:grid-cols-2 h-[calc(100vh 60px)]">
                <div className="hidden lg:block"></div>
                <div className="text-[50px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
                    <div>
                        <p data-aos="zoom-in-up">This is</p>
                        <p data-aos="zoom-in-up">Mahnoor</p>
                        <p data-aos="zoom-in-up">Shafiq</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header