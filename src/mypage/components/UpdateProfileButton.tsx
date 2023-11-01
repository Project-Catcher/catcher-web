import { MyInfoModify } from "./UpdateProfile";

interface UpdateProfileButtonProps {
  answer: MyInfoModify;
  handleConfirm: (id: string, answer?: MyInfoModify) => void;
}

const UpdateProfileButton = ({
  answer,
  handleConfirm,
}: UpdateProfileButtonProps) => {
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
        id="update"
        className="w-[132px] h-[46px] text-white font-semibold bg-[#00D179] rounded-[8px]"
        onClick={({ currentTarget: { id } }) => handleConfirm(id, answer)}
      >
        수정완료
      </button>
    </div>
  );
};

export default UpdateProfileButton;
