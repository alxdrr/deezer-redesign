import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { div } from "framer-motion/client";
import Accordion from "../components/Accordion";
import logo from "../assets/image/LogoBlack.png";
import { FaCircleCheck } from "react-icons/fa6";
const plans = [
  {
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
  {
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
];
const featureStyle = (feature) => {
  return (
    <>
      <div className="flex gap-3 items-center text-neutral-800">
        <FaCircleCheck className="text-primary text-lg" />
        <p className="font-bold">{feature}</p>
      </div>
    </>
  );
};
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
        className="drop-shadow-md w-96 bg-white rounded-xl px-6 py-6 flex flex-col justify-between items-center gap-4"
      >
        <div className="flex w-full justify-between gap-10 items-center">
          <h1
            className={`${
              name == "INDIVIDUAL" ? "text-primary" : "text-[#FF673D]"
            } text-xl xl:text-3xl lg:text-2xl text-secondary text-center font-black`}
          >
            {name}
          </h1>
          <p className="text-sm  text-gray-700 text-center">
            {account} account
          </p>
        </div>
        <div className="gap-0 w-full">
          <p className="text-neutral-800 font-medium">1 month free</p>
          <p className="text-neutral-500 w-auto">then {price}/month</p>
        </div>
        <div className="flex w-full flex-col gap-3">
          {feature.map((desc, index) => featureStyle(desc))}
        </div>
        <Button
          variant={"primary"}
          type={"clickable"}
          title={"Try for free"}
        ></Button>
      </motion.div>
    </>
  );
};
const Plans = () => {
  return (
    <>
      {/* Navbar & Hero */}
      <Navbar />
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
        className="bg-primary w-full items-center justify-center flex flex-col h-auto py-16 gap-16"
      >
        <div className="text-white text-6xl font-black py-4 text-center flex flex-col gap-8">
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
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <Accordion
            title="What are the advantages of a Sonata Premium subscription?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
          <Accordion
            title="What does offline listening mean?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
          <Accordion
            title="How many devices can be paired to one Sonata Premium account?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
          <Accordion
            title="What is the difference between a Deezer Premium account and Deezer Family account?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
        </div>
      </motion.div>
      {/* CTA Section */}

      {/* Footer */}
    </>
  );
};

export default Plans;
