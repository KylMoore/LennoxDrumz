import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { LanguageContext } from "./LanguageContext";

const ContactForm = () => {
  const { language } = useContext(LanguageContext);
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
      setSuccessMessage(
        language === "en"
          ? "Your message was sent successfully!"
          : "Votre message a été envoyé avec succès !"
      );
    } catch (error) {
      setErrorMessage(
        language === "en"
          ? "There was an error sending your message."
          : "Une erreur s'est produite lors de l'envoi de votre message."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">{language === "en" ? "Name:" : "Nom :"}</label>
      <input
        type="text"
        id="name"
        {...register("name", {
          required:
            language === "en"
              ? "Please enter your name."
              : "Veuillez entrer votre nom.",
        })}
      />
      <ErrorMessage errors={errors} name="name" />

      <label htmlFor="email">{language === "en" ? "Email:" : "Email :"}</label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required:
            language === "en"
              ? "Please enter your email."
              : "Veuillez entrer votre adresse email.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:
              language === "en"
                ? "Please enter a valid email address."
                : "Veuillez entrer une adresse email valide.",
          },
        })}
      />
      <ErrorMessage errors={errors} name="email" />

      <label htmlFor="message">
        {language === "en" ? "Message:" : "Message :"}
      </label>
      <textarea
        id="message"
        {...register("message", {
          required:
            language === "en"
              ? "Please enter a message."
              : "Veuillez entrer un message.",
        })}
      />
      <ErrorMessage errors={errors} name="message" />

      <button type="submit">{language === "en" ? "Submit" : "Envoyer"}</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
