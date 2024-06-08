import { MouseEventHandler, useRef, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { EMAIL_REGEX } from "../utils/constants";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeValue = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (formValues.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
      valid = false;
    }

    if (!EMAIL_REGEX.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (formValues.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const submitMessage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();

    if (!isFormValid) {
      return;
    }

    if (formRef && formRef.current) {
      setIsEmailLoading(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setIsEmailLoading(false);
            console.log("Email sent successfully: ", result.status);
          },
          (error) => {
            setIsEmailLoading(false);
            console.log("Failed to send email. Error: ", error);
          }
        );
    }
  };

  return (
    <div
      id="contact"
      className="px-8 py-8 text-white md:py-16 min-h-svh bg-gradient-to-t from-black to-medium-grey md:px-16"
    >
      <div className="grid grid-cols-1 gap-8 navbar-margin lg:grid-cols-2 md:gap-16 md:justify-between">
        <div id="#title-container">
          <div className="pb-8">
            <h1>Contact</h1>
          </div>
          <form className="flex flex-col gap-8" ref={formRef}>
            <h4>Send me a message:</h4>
            <Input
              type="text"
              label="Name"
              placeholder="Your name here"
              fieldName="name"
              setFormValues={onChangeValue}
              validationError={errors.name}
            />
            <Input
              type="email"
              label="E-mail"
              placeholder="Your email here"
              fieldName="email"
              setFormValues={onChangeValue}
              validationError={errors.email}
            />
            <TextArea
              label="Message"
              placeholder="Your message here"
              fieldName="message"
              setFormValues={onChangeValue}
              validationError={errors.message}
            />
            <div>
              <Button
                text="Submit"
                onClick={submitMessage}
                size="medium"
                type="primary"
                loading={isEmailLoading}
              />
            </div>
          </form>
        </div>
        <div className="text-right">
          <h4>Or reach out on:</h4>
          <h4>Linkedin</h4>
          <h4>Twitter</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
