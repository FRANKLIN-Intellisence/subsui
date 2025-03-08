import { useState } from "react";
import Nav from "../atoms/Nav";
import { FaRegImage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import Button from "../atoms/Buttons";

const TicketPage = () => {
  const [event, setEvent] = useState({
    name: "Event Name",
    date: "",
    location: "",
    description: "",
    tickets: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(imgURL);
    }
  };
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-start justify-center bg-[#000022] text-[#ffffff] h-screen gap-[2rem] mt-[3rem]">
        <div className="relative w-[24rem] h-[24rem] text-black bg-[#fff] flex items-center justify-center overflow-hidden rounded-md">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Event"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <FaRegImage className="text-gray-400 text-7xl" />
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
        </div>

        <form className="flex flex-col gap-8 w-[30rem]">
          <input
            className="text-[5rem] text-[#ffffff] focus:outline-none rounded-md"
            type="text"
            placeholder="Event Name"
            value={event.name}
            onChange={(e) => {
              setEvent({ ...event, name: e.target.value });
            }}
          />
          <p className="">
            Welcome to the ticket page. Here you can view and manage your
            tickets.
          </p>

          <div className="setDateTime h-fit b-[1px] bg-[#010131] flex flex-row justify-between text-2xl ">
            <div className="flex gap-4 ">
              <p>Start</p>
              <div className="setDate text-[#ffffff]">
                <input
                  type="date"
                  placeholder=""
                  onChange={(e) => {
                    const startDate = new Date(e.target.value);
                    const formattedDate = startDate.toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    );
                    const startDateElement =
                      document.querySelector(".start-date");
                    if (startDateElement) {
                      startDateElement.textContent = formattedDate;
                    }
                  }}
                />
                <p className="start-date"></p>
              </div>
              <div>
                <p>End</p>
                <input
                  type="date"
                  onChange={(e) => {
                    const endDate = new Date(e.target.value);
                    const formattedDate = endDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                    const endDateElement = document.querySelector(".end-date");
                    if (endDateElement) {
                      endDateElement.textContent = formattedDate;
                    }
                  }}
                />
                <p className="end-date"></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 h-fit py-4 b-[1px] bg-[#010131] ">
            <span className="flex gap-5">
              {" "}
              <FaLocationDot />
              <p>Add Event Location</p>
            </span>
            <input type="text" placeholder="Offline Location or Virtual Link" />
          </div>

          <div>
            <span className="flex flex-row gap-5 h-fit py-4 b-[1px] bg-[#010131]">
              <FaBook />

              <p>Add Description</p>
            </span>
            <input type="text" name="" id="" />
          </div>

          <div>
            <p>Event Options</p>

            <div className="flex flex-row h-fit px-4 bg-[#010131] justify-between items-center">
              <div className="flex flex-row gap-8">
                <IoTicketOutline className="text-[#00ffff]" />
                <p>Tickets</p>
              </div>
              <div className="flex flex-row gap-8">
                <p>Free</p>
                <a href="">
                  <FaRegPenToSquare className="text-[#00ffff]" />{" "}
                </a>
              </div>
            </div>
          </div>

          <Button name="Create Event" />
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
