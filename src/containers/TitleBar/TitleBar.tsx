import Logo from "../../components/Logo";
import Menu from "../Menu/Menu";
import "./TitleBar.css";

interface TitleBarProps {
  active: string;
}

const TitleBar = ({ active }: TitleBarProps) => {
  return (
    <div className="titlebar">
      <Logo />
      <Menu active={active} />
    </div>
  );
};

export default TitleBar;
