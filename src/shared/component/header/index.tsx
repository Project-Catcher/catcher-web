import Image from "next/image";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-blue-500">
      <div className="container mx-auto">
        <div className="flex">
          <Image
            src="../../../../header/logo.svg"
            alt="Catcher Logo"
            width={72}
            height={16}
          />
          <h1 className="text-2xl font-semibold text-white">내 고정 헤더</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
