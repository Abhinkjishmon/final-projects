import React from "react";
import { Facebook, Instagram, Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-xl font-semibold">Easy Way</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              A great platform for international students passionate about
              learning and exploration. Discover opportunities, pursue your
              dreams, and shape your future career with us!
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/find-accommodations"
                  className="text-sm hover:text-white transition-colors"
                >
                  Find Accommodations
                </a>
              </li>
              <li>
                <a
                  href="/find-job"
                  className="text-sm hover:text-white transition-colors"
                >
                  Part Time Job
                </a>
              </li>
              <li>
                <a
                  href="/culturalIntergretion"
                  className="text-sm hover:text-white transition-colors"
                >
                  Cultural Integration
                </a>
              </li>
              <li>
                <a
                  href="/visaImmigrationAssistance"
                  className="text-sm hover:text-white transition-colors"
                >
                  Visa Assistance
                </a>
              </li>
              <li>
                <a
                  href="/acadamic"
                  className="text-sm hover:text-white transition-colors"
                >
                  Academic
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get job notifications
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
