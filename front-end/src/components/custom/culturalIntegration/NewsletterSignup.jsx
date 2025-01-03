import React from "react";
import { Link } from "react-router-dom";

const NewsletterSignup = () => {
  return (
    <div className="bg-teal-500   md:py-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Welcome to Our Community!
        </h2>
        <p className="mt-4 text-lg text-teal-100">
          We value your feedback and experiences. Sharing your journey helps us
          grow and improve.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-md">
            <Link to={"/culturalIntergretion/create-blog"}>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-teal-500 bg-white border border-transparent rounded-md shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:border-white"
              >
                <span> Share Your Experience</span>
                <svg
                  className="w-5 h-5 ml-3 -mr-1 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
