import Link from "next/link";

interface NavItemProps {
  tag: string;
}

const NavItem = ({ tag }: NavItemProps) => {
  return (
    <div className="inline-block font-bold px-4 leading-8 cursor-pointer hover:text-black navItem-sm-md">
      <Link href={tag.toLowerCase()}>{tag}</Link>
    </div>
  );
};

export default NavItem;
