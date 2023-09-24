import Moma from "./icons/Moma";
import Nike from "./icons/Nike";
import MIdontKnow from "./icons/MIdontKnow";
import Marvel from "./icons/Marvel";

function IconsList() {
  return (
    <div className="flex flex-row gap-4  max-w-7xl mx-auto max-md:max-h-[7rem] mt-7">
      <div className="flex justify-center items-center w-1/4 ">
        <Marvel className=" w-full" />
      </div>
      <div className="flex justify-center items-center w-1/4 ">
        <MIdontKnow className="w-full" />
      </div>
      <div className="flex justify-center items-center w-1/4  ">
        <Nike className=" w-full" />
      </div>
      <div className="flex justify-center items-center w-1/4 ">
        <Moma className=" w-full" />
      </div>
      x
    </div>
  );
}
export default IconsList;
