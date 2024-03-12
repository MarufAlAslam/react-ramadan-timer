import React from "react";

const FixedTimer = ({ hour, minute, convertToBangla }) => {
    return <div
        className={`bottom main-timer text-white w-full p-3 flex justify-center items-center`}
    >

        <span className="lh-1 timer-span font-bold text-[30px]">
            {convertToBangla(hour) + ": " + convertToBangla(minute) + " মিনিট"}
        </span>
    </div>
};

export default FixedTimer;
