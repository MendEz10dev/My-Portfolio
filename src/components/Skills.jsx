import React from 'react';


export function Skills ({icon, name, bgColor}) {

  return (



    
    <div className={`p-4 w-30 text-center transition-transform duration-100 hover:scale-105 hover:shadow-lg rounded-xl ${bgColor}`}>
      <div className="flex flex-col items-center text-center">
          <i className="text-white text-2xl">{icon}</i>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
      </div>
    </div>
  );
};