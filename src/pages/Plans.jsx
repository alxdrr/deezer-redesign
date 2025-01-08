import { motion } from "framer-motion";
import React from "react";
import Button from "../components/Button";

const Plans = () => {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-white h-dvh flex flex-col justify-center">
        <motion.div
          layout
          transition={{ duration: 1, type: "spring" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-screen-xl flex flex-col justify-self-center my-auto mx-28 pt-16 gap-8 xl:gap-10 px-4 lg:px-8 xl:px-0"
        >
          <div>
            <div className="text-neutral-800 text-3xl md:text-6xl lg:text-7xl font-black py-4 w-full">
              Get 1 month of Premium
            </div>
            <div className="text-primary text-3xl md:text-6xl lg:text-7xl font-black py-4">
              For Free
            </div>
            <p className="text-neutral-500">
              We will remind you 7 days before your trial ends.
            </p>
            <Button
              variant={"primary"}
              type={"clickable"}
              title={"Subscirbe"}
            ></Button>
          </div>
          <div className="flex flex-col gap-8 xl:gap-10">
            <div className="text-white lg:text-xl font-normal xl:max-w-xl">
              Innovative Software House to Bring Your Ideas to Life. We are your
              trusted partner in web, mobile, and software development.
            </div>
          </div>
        </motion.div>
      </div>
      {/* About Section */}
      <motion.div
        transition={{ duration: 1, type: "tween" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="about"
        className="About w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto my-16 mx-auto gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0"
      >
        <section className="flex justify-center items-center md:items-start flex-col gap-8 xl:gap-10">
          <h1 className="text-primary text-center text-xl md:text-start md:text-2xl lg:text-4xl max-w-2xl font-black">
            Unlock Your Development Potential With Us
          </h1>
          <p className="max-w-2xl text-center md:text-start lg:text-xl xl:text-xl text-gray-700">
            At our software house, we offer a range of services in web, mobile,
            and system development. With our expertise and dedication, we
            provide tailored solutions to meet your unique needs and help you
            achieve your goals.
          </p>
        </section>
      </motion.div>
      {/* Services Section */}
      <motion.div
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="Services w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0"
      >
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-center text-xl md:text-start md:text-2xl lg:text-4xl max-w-xl font-black">
            Our Services
          </h1>
          <p className="lg:text-base xl:text-xl text-center text-gray-700">
            We offer comprehensive web, mobile, and system development services.
          </p>
        </section>
      </motion.div>
      {/* Recent Projects Section */}
      <div className="w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0">
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-center text-xl md:text-start md:text-2xl lg:text-4xl max-w-xl font-black">
            Recent Projects
          </h1>
          <p className="lg:text-base xl:text-xl text-center text-gray-700">
            Browse through our portfolio of completed projects.
          </p>
        </section>
        <section className="flex flex-col gap-6 md:gap-0 xs:flex-row justify-between w-full xl:px-16"></section>
      </div>
      {/* FAQ Section */}
      <motion.div
        transition={{ duration: 1, type: "tween" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0"
      >
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-4xl text-center font-black">
            FAQ
          </h1>
          <p className="lg:text-base xl:text-xl max-w-4xl text-center text-gray-700">
            Find answers to common questions about our services and processes.
          </p>
        </section>
      </motion.div>
      {/* CTA Section */}

      {/* Footer */}
    </>
  );
};

export default Plans;
