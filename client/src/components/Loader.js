import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
      <div className="flex gap-5 text-3xl font-semibold sm:text-3xl">
        <h1 className="text-secondary P">P</h1>
        <h1 className="text-white G">G</h1>
        <h1 className="text-tertiary V">V</h1>
      </div>
    </div>
  );
}

export default Loader;
