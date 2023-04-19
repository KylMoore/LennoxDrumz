import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://formspree.io/f/mayajybz",
        data
      );
      setSuccessMessage("Your message was sent successfully!");
    } catch (error) {
      setErrorMessage("There was an error sending your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        {...register("name", { required: "Please enter your name." })}
      />
      <ErrorMessage errors={errors} name="name" />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required: "Please enter your email.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address.",
          },
        })}
      />
      <ErrorMessage errors={errors} name="email" />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        {...register("message", { required: "Please enter a message." })}
      />
      <ErrorMessage errors={errors} name="message" />

      <button type="submit">Submit</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
