import React from 'react';


export function Skills ({icon, name, bgColor}) {

  return (


    <div className={`p-4 w-30 text-center rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] backdrop-blur-md ${bgColor}`}>
      <div className="flex flex-col items-center text-center">
          <i className="text-white text-2xl">{icon}</i>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
      </div>
    </div>
  );
};