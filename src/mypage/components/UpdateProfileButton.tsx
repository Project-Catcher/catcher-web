import { MyInfoModify } from "./UpdateProfile";

interface UpdateProfileButtonProps {
  validator: {
    isValidPhone: boolean;
    isValidEmail: boolean;
    isValidPassword: {
      password: boolean;
    };
  };
  answer: MyInfoModify;
  handleConfirm: (id: string, answer?: MyInfoModify) => void;
}

const UpdateProfileButton = ({
  validator,
  answer,
  handleConfirm,
}: UpdateProfileButtonProps) => {
  const isValid =
    validator.isValidEmail &&
    validator.isValidPassword &&
    validator.isValidPhone;

  return (
    <div className="text-center">
      <button
        id="cancel"
        className="w-[132px] h-[46px] text-white font-semibold bg-[#FACD49] rounded-[8px] mr-[8px]"
        onClick={({ currentTarget: { id } }) => handleConfirm(id)}
      >
        취소
      </button>
      <button
        disabled={!isValid}
        id="update"
        className={`${
          isValid ? "bg-[#00D179] " : "bg-[#00D17975] "
        }w-[132px] h-[46px] text-white font-semibold rounded-[8px]`}
        onClick={({ currentTarget: { id } }) => handleConfirm(id, answer)}
      >
        수정완료
      </button>
    </div>
  );
};

export default UpdateProfileButton;
