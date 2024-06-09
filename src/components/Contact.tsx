import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { EMAIL_REGEX, EXTERNAL_LINKS } from "../utils/constants";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { toastService } from "../services/toast";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";

interface UserData {
  ip: string;
  country: string;
  region: string;
  city: string;
  org: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const [connectedUserData, setConnectedUserData] = useState<UserData>({
    ip: "",
    country: "",
    region: "",
    city: "",
    org: "",
  });

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
            toastService.success("Email sent successfully!");
            console.log("Email sent successfully: ", result.status);
          },
          (error) => {
            setIsEmailLoading(false);
            toastService.error("Message sent successfully!");
            console.log("Failed to send email. Error: ", error);
          }
        );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData: UserData = await (
        await fetch("https://ipapi.co/json/")
      ).json();

      if (userData) {
        setConnectedUserData({
          ip: userData.ip,
          country: userData.country,
          region: userData.region,
          city: userData.city,
          org: userData.org,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="contact"
      className="px-8 py-8 text-white md:py-16 min-h-svh bg-gradient-to-t from-black to-medium-grey md:px-16"
    >
      <div className="grid items-center grid-cols-1 gap-8 navbar-margin lg:grid-cols-2 md:gap-16 md:justify-between">
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
            <input type="text" hidden name="ip" value={connectedUserData.ip} />
            <input
              type="text"
              hidden
              name="country"
              value={connectedUserData.country}
            />
            <input
              type="text"
              hidden
              name="region"
              value={connectedUserData.region}
            />
            <input
              type="text"
              hidden
              name="city"
              value={connectedUserData.city}
            />
            <input
              type="text"
              hidden
              name="org"
              value={connectedUserData.org}
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
        <div className="flex flex-col items-end gap-8 text-right pt-36">
          <h4>Find me on:</h4>
          <div className="flex gap-8 p-4 rounded-md bg-medium-grey">
            <a href={EXTERNAL_LINKS.LINKED_IN}>
              <img
                src={linkedIn}
                alt="Linkedin icon"
                className="w-16 rounded-md"
              />
            </a>
            <a href={EXTERNAL_LINKS.GITHUB}>
              <img src={github} alt="Github icon" className="w-16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
