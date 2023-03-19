import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
interface HeaderProps {
  label: String;
  showBackArrow?: boolean;
}
const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] p-5 border-neutral-800">
      <div className="flex gap-2 flex-row items-center">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size="20"
            className="
          cursor-pointer 
          hover: opacity-70
          transition"
          />
        )}
        <h1 className="text-xl font-semibold text-white">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
