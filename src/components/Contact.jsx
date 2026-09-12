
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent empty form submission
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_750kpv2",
        "template_nyqh9jd",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Khushi",
          to_email: "khushikashyap391@gmail.com",
          message: form.message,
        },
        "Am2vlxuzpwMq9Qm9m"
      );

      alert("Thank you! Your message has been sent successfully.");

      // Clear form after successful submission
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>

            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
