import type * as Types from "./ViewLayoutTypes";
import * as Atoms from "./ViewLayoutAtoms";

const ViewLayout = (props: Types.Props) => {
  const { children } = props;
  return <Atoms.Container>{children}</Atoms.Container>;
};

export default ViewLayout;
