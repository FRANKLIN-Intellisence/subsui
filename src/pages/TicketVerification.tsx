import Nav from "../atoms/Nav.tsx";
import Buttons from "../atoms/Buttons.tsx";
const TicketVerification = () => {
  return (
    <div>
      <Nav />

      <div className="flex flex-col gap-[2rem] items-center justify-between bg-[#000022] pt-[1rem] pb-[3rem] md:pb-[7rem] min-h-full">
        <div>
          <h2 className="text-[1.8rem] md:text-[3rem] text-[#fff]">
            Ticket Verification
          </h2>
        </div>
        <div className="bg-[#fff] text-[#000000] w-[95%] md:w-[50%] lg:w-[35%] m-auto text-center py-[3rem] rounded-[10px] shadow-[#00ffff] shadow-md">
          <form
            action=""
            className="flex flex-col gap-[2rem] w-[90%] md:w-[80%] m-auto "
          >
            <input
              type="text"
              placeholder="Enter your full name"
              className="h-[3rem] text-[#000] font-semibold rounded-[5px]
                                                                                        pl-2 outline-[#000022] outline-2"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-[3rem] text-[#000] font-semibold rounded-[5px]
                                                                                         pl-2 outline-[#000022] outline-2"
            />
            <input
              type="text"
              placeholder="Ticket number"
              className="h-[3rem] text-[#000000] font-semibold rounded-[5px]
                                                                                 pl-2 outline-[#000022] outline-2"
            />
            <Buttons name="Verify Ticket" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketVerification;
