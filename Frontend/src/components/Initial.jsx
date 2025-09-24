import React from "react";

const Initial = () => {
  return (
    <div className="min-h-screen flex">
      {/* left content */}
      <div className="flex">
        <span className="md:ml-7 gap-3 ">
          <img
            src="/Arrow1left.png"
            alt="arrow"
            className="w-8 md:w-20 h-auto" // width changes on medium screens
          />
        </span>
        <span>fvgjkblhnm</span>


      </div>
      {/* center content */}

      <div className="flex flex-col justify-center items-center gap-10 mx-auto">
        <h1>
          dfgfhjhhmgnbfvdcsxamnbvcx
        </h1>
        <span>
          <img src="/Arrow2center.png" alt="" />
        </span>
        <div>
          <div>
            <span>
              <img src="/logo.png" alt="" />
            </span>
          </div>
          <div>
            <button>Click Me</button>
            <button>Click Me Too</button>
            <button>Click Me Three</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initial;
