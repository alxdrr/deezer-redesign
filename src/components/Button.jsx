// import { Link } from "react-router-dom";

const Button = ({ link, title, scrollToId }) => {
  let buttonClassName =
    "w-auto py-1.5 px-4 bg-neutral-0 text-primary transition-all rounded-lg hover:bg-hover active:scale-90";
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
        <Link className={buttonClassName} to={link}>
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;
