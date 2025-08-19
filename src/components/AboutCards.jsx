import React from "react";



const AboutCards = ({ CardIcon, CardTitle, CardDesc }) => {
  return (
    <div className="hover:text-white transition-all duration-200 relative overflow-hidden  w-2/5 p-4 flex flex-col gap-2 rounded-lg group cursor-pointer">
      {/* Background color layer */}
      <div className="absolute inset-0 bg-secondary -z-20"></div>

      {/* Water effect layer */}
      <div className="absolute inset-0 -z-10">
        <div className="water-fill absolute inset-0"></div>
      </div>

      {/* Top-right icon */}
      <img
        src={CardIcon}
        alt={CardTitle}
        className="absolute top-2 right-2 w-7 h-7"
      />

      <p className="font-primaryBold text-lg">{CardTitle}</p>
      <p className="font-primary text-sm">{CardDesc}</p>
    </div>
  );
};

export default AboutCards;
