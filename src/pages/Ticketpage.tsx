import Nav from "../atoms/Nav";
import { FaRegImage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";



const TicketPage = () => {

  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-between h-[80vh] px-[10rem] bg-[#000022] text-[#ffffff]">
        <div className="image-holder w-[20rem] h-[20rem] text-black bg-[#fff] flex items-center justify-center">
          <img src={<FaRegImage />} className="w-full h-full object-cover" />
          <input
            type="file"
            accept="image/*"
            placeholder=""
            className="absolute opacity-0 w-full h-full cursor-pointer"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(e.target.files[0]);
                img.onload = () => {
                  URL.revokeObjectURL(img.src);
                };
                const imageHolder = document.querySelector(".image-holder");
                if (imageHolder) {
                  imageHolder.innerHTML = "";
                  imageHolder.appendChild(img);
                }
              }
            }}
          />
        </div>

        <div className="event-form  flex flex-col gap-8">
          <input
            className="text-[5rem] text-[#ffffff]"
            type="text"
            placeholder="Event Name"
          />
          <p className="">
            Welcome to the ticket page. Here you can view and manage your
            tickets.
          </p>

          <div className="setDateTime w-[40rem] h-fit py-4 b-[1px] bg-[#010131] flex flex-row justify-between text-2xl ">
            <div className="text-2xl flex flex-col gap-4">
              <p>Start</p>
              {/* <FaArrowsAltV /> */}
              <p>End</p>
            </div>

            <div className="flex flex-col gap-4">
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

          <div className="flex flex-col gap-4 w-[40rem] h-fit py-4 b-[1px] bg-[#010131] ">
            <span className="flex flex-row gap-5">
              {" "}
              <FaLocationDot />
              <p>Add Event Location</p>
            </span>
            <input type="text" placeholder="Offline Location or Virtual Link" />
          </div>


          <div>
          <span className="flex flex-row gap-5 w-[40rem] h-fit py-4 b-[1px] bg-[#010131]" >
            <FaBook />

            <p>Add Description</p>
          </span>
          <input type="text" name="" id="" />
        </div>
         

         <div>
            <p>Event Options</p>

            <div className="flex flex-row w-[40rem] h-fit px-4 py-4 b-[1px] bg-[#010131] justify-between items-center">
                <div className="flex flex-row gap-8">
                <IoTicketOutline className="text-[#00ffff]"/>
                <p>Tickets</p>
                </div>
                <div className="flex flex-row gap-8">
                    <p>Free</p>
                    <a href=""><FaRegPenToSquare className="text-[#00ffff]"/> </a>
                </div>
            </div>


         </div>

        </div>

        
      </div>
    </div>
  );
};

export default TicketPage;
