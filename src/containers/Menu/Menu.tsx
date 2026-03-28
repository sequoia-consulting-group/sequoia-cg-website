import { useState, useCallback } from "react";
import MenuButton from "../../components/MenuButton";
import "./Menu.css";

interface MenuProps {
  active: string;
}

const Menu = ({ active }: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    if (!menuOpen) {
      setMenuOpen(true);
      window.addEventListener("mouseup", () => {
        // checkWindowClick would go here if needed
      });
    } else {
      const menu = document.getElementById("myDropdown");
      if (menu) {
        menu.classList.add("slide-out");
      }
      setTimeout(() => {
        if (menu) {
          menu.classList.remove("slide-out");
        }
        setMenuOpen(false);
      }, 500);
    }
  }, [menuOpen]);

  return (
    <div className="menu fullscreen">
      <div
        className={`menu-container ${menuOpen ? "change" : ""}`}
        onClick={() => toggleMenu()}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        id="myDropdown"
        className={`dropdown-content ${menuOpen ? "show" : "no-show"}`}
      >
        <MenuButton
          menuItem="Home"
          active={active}
          toggleMenu={() => toggleMenu()}
        />
        {/* <MenuButton menuItem="Company" active={active}/>
          <MenuButton menuItem="Services" active={active}/> */}
        <MenuButton
          menuItem="Contact"
          active={active}
          toggleMenu={() => toggleMenu()}
        />
      </div>
    </div>
  );
};

export default Menu;
