import React from "react";

const LoginSignupMain = ({ children }) => {
  return (
    <>
      <main className="w-full px-8 font-primary xl:px-6 md:px-0">
        <div className="w-full bg-loginSignupBg bg-cover bg-center bg-no-repeat flex items-center justify-center px-8">
          <div className="w-full max-w-[570px] xl:max-w-[454px] lg:max-w-[340px] bg-white px-24 py-14 my-14 xl:px-20 lg:my-10 lg:px-14 lg:py-6 md:px-6 md:py-10">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginSignupMain;
