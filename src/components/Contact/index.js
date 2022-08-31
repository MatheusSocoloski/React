import React, { useRef } from "react";
import Logo from "../../assets/images/logo-white.svg";
import emailjs from "emailjs-com";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  IconLogo,
  FormTextarea,
} from "./ContactElements";

const Contact = () => {
  const form = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpqqzvp",
        "template_fua7dst",
        form.current,
        "user_KdOieNTkofTAoOfLuWArY"
      )
      .then(
        (result) => {
          alert("Your message was sent!");
        },
        (error) => {
          alert("Sorry, an error occurred!");
        }
      );
  };

  return (
    <>
      <Container role="main">
        <FormWrap>
          <Icon to="/">
            <IconLogo src={Logo} aria-label="Logo live in white" />
          </Icon>
          <FormContent>
            <Form ref={form} onSubmit={onSubmit}>
              <FormH1>Envie-nos uma mensagem</FormH1>
              <FormLabel aria-label="Full name" htmlFor="for">
                Nome completo
              </FormLabel>
              <FormInput
                aria-label="Full name"
                type="text"
                name="name"
                required
              />
              <FormLabel aria-label="Email" htmlFor="for">
                Email
              </FormLabel>
              <FormInput
                aria-label="Email"
                type="email"
                name="email"
                required
              />
              <FormLabel aria-label="Phone" htmlFor="for">
                Celular
              </FormLabel>
              <FormInput aria-label="Phone" type="tel" name="phone" required />
              <FormLabel aria-label="Message" htmlFor="for">
                Mensagem
              </FormLabel>
              <FormTextarea
                aria-label="Message"
                rows="6"
                placeholder="Please enter a maximum of 300 characters."
                name="message"
              ></FormTextarea>
              <FormButton role="button" type="submit">
                Continue
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
