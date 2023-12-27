import React from "react";

function Leftsider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://github.com/Pathangy-Vivek">
            <i class="ri-github-fill text-gray-400"></i>
          </a>
          <a href="https://in.linkedin.com/in/pathangy-vivek-03288b263">
            <i class="ri-linkedin-line text-gray-400"></i>
          </a>
          <i class="ri-instagram-line text-gray-400"></i>
          <a href="https://api.whatsapp.com/send/?phone=%2B919154830868&text&type=phone_number&app_absent=0">
            <i class="ri-whatsapp-fill text-gray-400"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default Leftsider;
