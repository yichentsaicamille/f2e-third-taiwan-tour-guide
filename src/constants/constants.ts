import * as variables from "../variables/variables";

const FALLBACK_MESSAGE = "loading...";

const HOME = "/";

const createBoxShadow = () => {
  return `0px 14px 24px (${variables.__000__}, 0.25)`;
};

export { FALLBACK_MESSAGE, HOME, createBoxShadow };
