import React from "react";
import Login from "./app/components/Login";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Login />
      <div className="bg-gradient-to-b from-[#000AFF] to-[#0235B900] absolute -bottom-32 -left-48 w-[600px] h-[600px] rounded-[113px] skew-y-[14deg] skew-x-6 -z-10"></div>
      <div className="bg-gradient-to-t from-[#FF0000] to-[#0236b900] absolute -top-32 -right-48 w-[600px] h-[600px] rounded-[113px] skew-y-[14deg] skew-x-6 -z-10"></div>
      <div className="bg-[#27B902CC] absolute w-[116px] h-[121px] top-20 left-36 poly1 -z-10"></div>
      <div className="bg-[#27B902CC] absolute w-[116px] h-[121px] bottom-20 right-36 poly2 -z-10"></div>
    </div>
  );
};

export default App;
