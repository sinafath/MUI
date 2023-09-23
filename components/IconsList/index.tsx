import Moma from "./icons/Moma";
import Nike from "./icons/Nike";
import MIdontKnow from "./icons/MIdontKnow";
import Marvel from "./icons/Marvel";

function IconsList() {
  return (
    <div className="flex flex-row gap-4 overflow-x-scroll max-w-7xl mx-auto md:overflow-hidden mt-20">
           <div className="flex justify-center items-center md:w-1/4 w-[60vw] ">
        <Marvel className=" h-16 max-md:w-[60vw] " />
      </div>{" "}
      <div className="flex justify-center items-center md:w-1/4 w-[60vw] ">
        <MIdontKnow className=" h-16 max-md:w-[60vw] " />
      </div>
   
   
      <div className="flex justify-center items-center md:w-1/4 w-[60vw]">
        <Nike className=" h-16 max-md:w-[60vw] " />
      </div>{" "}
      <div className="flex justify-center items-center md:w-1/4 w-[60vw] ">
        <Moma className=" h-16 max-md:w-[60vw] " />
      </div>
  x
    </div>
  );
}
export default IconsList;
