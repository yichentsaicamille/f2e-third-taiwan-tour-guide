import logo from "../../assets/png/Logo.png";
import type * as Types from "./SideBarTypes";
import * as Atoms from "./SideBarAtoms";

const SideBar = () => {
  return (
    <Atoms.Container>
      <Atoms.Logo src={logo} alt="logo" />
    </Atoms.Container>
  );
};

export default SideBar;
