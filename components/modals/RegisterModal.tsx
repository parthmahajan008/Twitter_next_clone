import useLoginModal from "@/hooks/userLoginModal";
import useRegisterModal from "@/hooks/userRegisterModal";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      {
        await axios.post("/api/register", {
          email,
          password,
          username,
          name,
        });
      }

      toast.success(" Account Created. ");
      signIn("credentials", { email, password });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, username, password, name, email]);

  const onToggle = useCallback(() => {
    if (isloading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [isloading, loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeHolder="Email"
        onchange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        disabled={isloading}
      />
      <Input
        placeHolder="Name"
        onchange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        disabled={isloading}
      />
      <Input
        placeHolder="Username"
        onchange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
        disabled={isloading}
      />
      <Input
        placeHolder="Password"
        onchange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        disabled={isloading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4 ">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}
          Sign In
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isloading}
      isOpen={registerModal.isOpen}
      title="Create an Account"
      actionLabel="Register"
      onclose={registerModal.onClose}
      onsubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
