import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handleClick = () => setAccordionOpen(!accordionOpen);
  return (
    <div className="flex flex-col w-full max-w-screen-md shadow-md rounded-3xl bg-white">
      <h2
        onClick={handleClick}
        className="text-neutral-800 flex justify-between rounded-3xl transition-all hover:bg-[#E1E5FF] p-4 cursor-pointer"
      >
        {title}
        <svg
          className="fill-secondary shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </h2>
      <div
        className={` grid px-6 overflow-hidden rounded-b-3xl transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pb-6 pt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
