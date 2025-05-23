import { Link } from "react-router";
import Loader from "../assets/icon/playWhite.gif";
const Button = ({ variant, link, title, scrollToId, type }) => {
  let buttonClassName = `py-1.5 px-6 transition-all text-center h-10 rounded-lg  active:scale-90 ${
    variant == "outline" ? "bg-neutral-0 text-primary hover:bg-hover border border-primary" : "bg-primary text-white hover:bg-[#1D2F99]"
  }`;
  const handleClick = () => {
    // Scroll to the specified ID when the button is clicked
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        const offset = 80; // offset based navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      {!link ? (
        <button onClick={handleClick} className={buttonClassName} to={link}>
          {title}
        </button>
      ) : (
        <Link className={buttonClassName} to={link} type={type}>
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;
