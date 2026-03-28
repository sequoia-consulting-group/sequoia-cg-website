import { Link } from "react-router-dom";

interface MenuButtonProps {
  menuItem: string;
  active: string;
  toggleMenu: () => void;
}

const MenuButton = ({ menuItem, active, toggleMenu }: MenuButtonProps) => {
  const route = menuItem.toLowerCase();
  return (
    <div
      className={`menu-button ${route === active ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <Link to={`/${route}`}>{menuItem}</Link>
    </div>
  );
};

export default MenuButton;
