import AjaxInner from "./svg/AjaxInner";
import AjaxOuter from "./svg/AjaxOuter";
import AjaxColor from "./svg/AjaxColor";
import AjaxGroup from "./svg/AjaxGroup";

const Ajax = () => {
  return (
    <div className="w-full h-full">
      {/* Inner Layer */}
      {/* <div className="absolute bottom-0 w-full h-full z-10">
        <AjaxInner color="#d3493a" />
      </div> */}
      {/* Outer Layer */}
      {/* <div className="absolute bottom-0 w-full h-full z-10">
        <AjaxOuter color="#d3493a" />
      </div> */}
      {/* Color Layer
      <div className="w-full h-full z-0">
        <AjaxColor color="#191919" />
      </div> */}

      <div className="z-10">
        <AjaxGroup color="#d3493a" />
      </div>
    </div>
  );
};

export default Ajax;
