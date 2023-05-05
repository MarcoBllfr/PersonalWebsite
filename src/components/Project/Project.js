import React from "react";


const Project = ({img, slide, onButtonNext, onButtonPrev}) => {

    return (
        <div className="justify-center grid grid-flow-row auto-rows-max py-10 px-3  bg-cover bg-slate-800 ">
            <div className="flex justify-center p-2">
    
            <p className="font-mono font-extrabold text-2xl text-gray-400 p-2">My Personal Project</p>
            </div>
            <div>
            <figure className="p-1 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                     <a href={img[slide].ref}><img className="rounded-lg" src={img[slide].immagine} alt="placeholder"/> </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6 ">
                        <p>{img[slide].testo}</p>
                    </figcaption>
            </figure>
                <div className="flex flex-wrap items-center justify-between bg-cover bg-slate-800 ">   
                    <button onClick={onButtonPrev}  type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fillRule="evenodd" clipRule="evenodd"/></svg>
                        <span className="sr-only"></span>
                    </button>
                    <button onClick={onButtonNext} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="2 2 20 20"  xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1zm1.5-4.498v-3.008l4.751 4.507-4.751 4.507v-3.008h-10.022v-2.998z" fillRule="evenodd" clipRule="evenodd"/></svg>
                        <span className="sr-only"></span>
                    </button>
                </div>
            </div>
       </div>
    );
}

export default Project;
