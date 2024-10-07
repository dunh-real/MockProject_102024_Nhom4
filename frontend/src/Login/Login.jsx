import React, { useState } from "react"
import "../index.css";

function Login() {
  const [isHide, setHide] = useState(true);
  const OnClickHide = (e) => {
    setHide(!isHide);
  };
  return (
    <>
      <div>
        <div className="w-screen h-screen flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center">
          <div className="hidden lg:basis-1/2 bg-dark lg:h-full lg:flex flex-col justify-center items-center">
            <img className="h-screen" src="https://www.rabideaulaw.ca/wp-content/uploads/pexels-expect-best-323705.jpg" />
          </div>

          <div className="lg:basis-1/2 dark:bg-white dark:text-dark flex flex-col justify-center lg:flex-row items-center h-screen">
            <div className="lg:w-7/12 w-screen px-4 lg:mt-0 lg:px-0 mx-auto">
              <div className="lg:hidden basis-1/2 flex-col justify-center items-center">
                <img className="h-full w-screen" src="https://png.pngtree.com/png-vector/20220703/ourmid/pngtree-building-logo-template-estate-real-png-image_5562213.png"/>
              </div>
 
              <div className="text-3xl mb-6 text-blue-600">Sign In</div>
              <form action="#" className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950"
                    name="email"
                    id="email"
                    placeholder="quangluan@example.com"
                    value="quangluan@mail.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="relative rounded-md">
                    <input
                      type={isHide ? "password" : "text"}
                      className="flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950"
                      name="password"
                      id="password"
                      placeholder="****"
                      value="password"
                    />
                    <button
                      className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md"
                      type="button"
                      onClick={OnClickHide}
                    >
                      {isHide ? (
                        <svg 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-width="2" 
                        viewBox="0 0 24 24" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        height="18" 
                        width="18" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" y1="2" x2="22" y2="22"></line>
                      </svg>
                      
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 2.057-3.065 4.228-5.542 5.375M15 12a3 3 0 01-6 0"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <button
                  className="bg-blue-600 text-slate-50 rounded-md text-sm font-medium h-9 px-4 py-2 w-full"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
