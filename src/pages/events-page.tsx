import { useState } from "react";
import { X } from "lucide-react";
import DynamicForm from "../atoms/dynamic-event-form";
import Nav from "../atoms/Nav";
import Buttons from "../atoms/Buttons";

const EventRegistrationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };
  return (
    <div className="bg-[#000022] text-[#ffffff]  w-full  flex-col">
      <Nav />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 h-screen">
        {/* Left Section - Event Banner */}
        <div className="md:w-2/5">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-black py-1 px-3 rounded-md flex items-center text-sm">
                <img
                  src="/api/placeholder/20/20"
                  alt="SUI logo"
                  className="w-5 h-5 mr-1"
                />
                SUI ON CAMPUS
              </div>
              <div className="bg-blue-600 text-white py-1 px-3 rounded-md text-sm">
                HACKATHON
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-2">
              Uniuyo <span className="text-blue-400">Sui</span>
            </h2>
            <h2 className="text-4xl font-bold mb-4">Buildathon</h2>

            <div className="bg-blue-600 inline-block px-3 py-1 rounded text-sm mb-8">
              ROAD TO OVERFLOW
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md mr-2">
                  7th
                </div>
                <span>& 8th March, 2025.</span>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md mr-2">
                  10
                </div>
                <span>am</span>
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md mx-2">
                  U
                </div>
                <span>Uniuyo</span>
              </div>
            </div>

            <div className="bg-white text-black p-3 rounded-md absolute right-4 top-1/3 w-1/3">
              <div className="text-sm font-bold">What to Expect:</div>
              <ul className="text-xs">
                <li>- Dev Onboarding</li>
                <li>- Exclusive Networking Opportunities</li>
                <li>- Free Lunch</li>
                <li>- Free Swag</li>
              </ul>
              <div className="bg-blue-600 text-white text-xs p-1 rounded text-center mt-2">
                Guide to Sui Overflow Ecosystem
              </div>
            </div>

            <div className="mt-12 flex justify-between gap-2 text-xs">
              <div className="text-center">
                <div className="text-purple-500 mb-2">1st Prize:</div>
                <div className="font-bold">$500 (N750,000)</div>
              </div>
              <div className="text-center">
                <div className="text-blue-500 mb-2">2nd Prize:</div>
                <div className="font-bold">$300 (N450,000)</div>
              </div>
              <div className="text-center">
                <div className="text-blue-300 mb-2">3rd Prize:</div>
                <div className="font-bold">$200 (N300,000)</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 font-bold">Hosted By</div>
            <div className="space-y-3">
              {/**
               *
               * map over an array of hosts and display their info and image
               */}
            </div>
          </div>
        </div>

        {/* Right Section - Event Details */}
        <div className="md:w-3/5">
          <h1 className="text-5xl font-bold mb-8">
            SUI ON CAMPUS
            <br />
            BUILDERTHON UNIUYO
          </h1>

          <div className="mb-8">
            <div className="flex items-center mb-2">
              <div className="bg-gray-800 rounded-full px-2 py-1 mr-4 text-xs inline-block">
                MAR
                <br />7
              </div>
              <div>
                <div className="text-2xl">Friday 7 March</div>
                <div className="text-gray-400">10:00 - 8 Mar, 16:00</div>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div>Register to See Address</div>
                <div className="text-gray-400">Uyo, Akwa Ibom</div>
              </div>
            </div>
          </div>

          {/* Registration Box */}
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h3 className="text-xl mb-4">Registration</h3>
            <p className="mb-6">
              Welcome! To join the event, please register below.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-gray-200 text-black py-3 rounded-md hover:bg-white font-medium"
            >
              Register
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-xl mb-4">About Event</h3>
            <div className="flex mb-4">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-red-600 rounded-md flex items-center justify-center text-xs mr-1"
                >
                  🔥
                </div>
              ))}
            </div>

            <div className="text-xl font-bold mb-4">
              SUI ON CAMPUS BUILDERTHON UNIUYO
            </div>

            <p className="mb-4">
              We are pleased to announce a 2-DAY Sui On Campus Buildathon (Road
              to overflow) at the University of Uyo coming up on 7th and 8th
              March 2025.
            </p>
            <p>
              It offers a unique opportunity for fifty (50) developers to
              collaborate and build innovative projects using the Sui blockchain
              technology.
            </p>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-12">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {!formSubmitted ? (
              <DynamicForm formApiUrl="/api/events/register" />
            ) : (
              <div>
                <h1>Registration Successful</h1>
                <Buttons
                  name="See more events"
                  link="/new-events"
                  onclick={handleFormSubmit}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistrationPage;
