import React from "react";
import proimg from './propicimg.jpg'

const Card = () => {
    return (
    
        <div className="p-8 m-8 flex justify-center" >
                <div className="border-double border-8 border-sky-500 flex flex-col items-center max-w-4xl  rounded-lg shadow md:flex-row md:max-w-l lg:h-auto hover:border-blue-700 hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="md:w-80 sm:w-auto min-sm:w-48 lg:w-96 border-black rounded-lg " src={proimg} alt="propic"></img>
                    <div className="flex flex-col justify-between p-4  leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marco Bellafiore</h5>
                        <h1 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Junior Web Developer</h1>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                         Hello, my name is Marco and I'm a web developer with skills in HTML, CSS, JavaScript. I started my web development career recently and gained experience in various web programming projects. 
                         I'm always looking for new challenges and improving my technical and communication skills to become a successful professional in the field of web development with problem-solving capabilities.
                        </p>
                    </div>
                </div>
                
       </div>
       
    );
}

export default Card;