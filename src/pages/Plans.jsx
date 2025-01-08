import { motion } from "framer-motion";
import React from "react";
import Button from "../components/Button";
const plans = [
  {
    individual: {
      name: "INDIVIDUAL",
      price: "$11.99",
      account: 1,
      feature: [
        "Ad-free",
        "Download music",
        "High Fidelity Sound",
        "Unlimited and on demand",
      ],
    },
  },
  {
    family: {
      name: "FAMILY",
      price: "$19.99",
      account: 6,
      feature: [
        "Ad-free",
        "Download music",
        "High Fidelity Sound",
        "Unlimited and on demand",
      ],
    },
  },
];

const card = (index, name, account, feature, price) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 * index }}
        className="drop-shadow-md md:max-w-60 lg:max-w-72 xl:max-w-sm bg-white rounded-xl px-4 py-6 | flex flex-col justify-between items-center gap-4 xl:gap-10"
      >
        <h1 className="text-xl xl:text-3xl lg:text-2xl text-secondary text-center font-black">
          {name}
        </h1>
        <p className="text-sm lg:text-base xl:text-xl text-gray-700 text-center">
          {account}
        </p>
        <p className="text-secondary font-medium">Learn More</p>
      </motion.div>
    </>
  );
};
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
            <div className="flex flex-col gap-6 w-auto">
              <p className="text-neutral-500 w-auto">
                We will remind you 7 days before your trial ends.
              </p>
              <Button
                variant={"primary"}
                type={"clickable"}
                title={"Subscirbe"}
              ></Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 xl:gap-10">
            <div className="text-white lg:text-xl font-normal xl:max-w-xl">
              Innovative Software House to Bring Your Ideas to Life. We are your
              trusted partner in web, mobile, and software development.
            </div>
          </div>
        </motion.div>
      </div>
      {/* Plan List */}
      <motion.div
        transition={{ duration: 1, type: "tween" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="about"
        className="bg-primary w-full items-center justify-center flex flex-col h-auto my-16 gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0"
      >
        <div className="text-white text-3xl md:text-6xl lg:text-7xl font-black py-4 text-center flex flex-col gap-8">
          <p>Find The Perfect Plan</p>
          <p>Match Your Style!</p>
        </div>
        <section className="flex gap-6 sm:flex-row w-full justify-center">
          {plans.map((plan, index) =>
            card(index, plan.name, plan.account, plan.feature, plan.price)
          )}
        </section>
      </motion.div>
      {/* Services Section */}

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
