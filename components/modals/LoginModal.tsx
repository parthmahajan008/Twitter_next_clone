import useLoginModal from "@/hooks/userLoginModal";
import useRegisterModal from "@/hooks/userRegisterModal";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isloading) return;
    registerModal.onOpen();
    loginModal.onClose();
  }, [isloading, loginModal, registerModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      {
        /*To DO add LogIN */
      }

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

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
        First time using Twitter?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}
          Create an Account
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isloading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onclose={loginModal.onClose}
      onsubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
