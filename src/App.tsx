import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FaUserAlt, FaClipboardList, FaFolderOpen } from "react-icons/fa";


import AboutMe from "./pages/about_me";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

const NAV_LINKS = [
  {
    icon: FaUserAlt,
    label: "About Me",
    navigate: "/",
  },
  {
    icon: FaClipboardList,
    label: "Resume",
    navigate: "resume",
  },
  {
    icon: FaFolderOpen,
    label: "Portfolio",
    navigate: "portfolio",
  },
];
function App() {
  return (
    <BrowserRouter>
      <Wrapped />
    </BrowserRouter>
  );
}
export default App;

const Wrapped = () => {
  const Navigate = useNavigate();
  var navigating = false;
  const [slide, setSlide] = useState(0);
  const CONTENT_REF = useRef<HTMLDivElement>(null);
  const Page = useLocation().pathname;
  useEffect(()=>{
    switch(Page){
      case '/resume': setSlide(1); break;
      case '/portfolio': setSlide(2); break;
    }
  },[])

  //Sliding page css animations
  const PageSlide = (newPage: string, num: number) => {

    //Typescript account for CONTENT_REF being null
    let direction;
    if (num > slide) direction = 1;
    else direction = -1;
    if (!CONTENT_REF.current || navigating || num == slide) return;
    CONTENT_REF.current.style.transition = "left .75s"; //Slide offscreen
    navigating = true;
    CONTENT_REF.current.style.left = `${-100 * direction}%`;
    setTimeout(
      (direction: number) => {
        if (!CONTENT_REF.current) return; //Typescript account for CONTENT_REF being null
        CONTENT_REF.current.style.transition = "left 0s"; //Move the div to the other side of the screen with no transition, navigate to the new page
        CONTENT_REF.current.style.left = `${100 * direction}%`;
        Navigate(newPage);
        setTimeout(() => {
          if (!CONTENT_REF.current) return; //Typescript account for CONTENT_REF being null
          CONTENT_REF.current.style.transition = "left .75s";
          CONTENT_REF.current.style.left = "0";
          setSlide(num);
          navigating = false;
          //Transition the new content back into frame
        }, 10);
      },
      750,
      direction
    );
  };
  
  return (
    <div
      id="App"
      className="flex flex-col h-screen w-screen bg-space-portrait sm:bg-space-landscape bg-bottom bg-no-repeat bg-cover lg:bg-center p-[3%] text-white [color-scheme:dark] print:bg-none sm:print:bg-none print:text-black/100"
    >
      <div id="title" className="text-center font-tmrw">
        <h1 className="text-xl sm:text-3xl md:text-5xl">
          Nathaniel R. W. Bachelder
        </h1>
        <h2 className="sm:text-xl md:text-3xl">
          {" "}
          Information Technologies Student
        </h2>
      </div>
      <nav
        id="navIcons"
        className="flex justify-around w-full max-w-xl mx-auto my-2 print:hidden"
      >
        {NAV_LINKS.map((item, index) => (
          <a
            key={index}
            className="relative transition-colors select-none group hover:text-blue-c active:text-blue-b hover:cursor-pointer"
            onClick={() => PageSlide(item.navigate, index)}
          >
            <item.icon className="w-8 h-8 sm:h-10 sm:w-10 " />
            <p className="font-kumbh whitespace-nowrap transition-opacity duration-700 opacity-0 group-hover:opacity-100 bg-blue-e/40 px-2 rounded-full text-center w-fit absolute left-[50%] translate-x-[-50%] top-full mt-1 text-white">
              {item.label}
            </p>
          </a>
        ))}
      </nav>
      <div
        id="content-outer"
        className="m-12 border-8 border-white border-double shadow-xl rounded-3xl bg-black/50 grow w-full max-w-[12in] mx-auto overflow-hidden print:overflow-visible relative print:border-0 print:my-0 print:shadow-none print:bg-white print:w-full"
      >
        <div
          id="content-inner"
          className="relative left-0 flex flex-col w-full h-full overflow-y-auto"
          ref={CONTENT_REF}
        >
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
