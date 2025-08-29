import React from "react"; 

 function Card({username,cardtext}){
    // console.log("props",props.username);
    return(
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src="https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          
          {cardtext}
        </p>
      </div>
        </>
    )
 }
 export default Card