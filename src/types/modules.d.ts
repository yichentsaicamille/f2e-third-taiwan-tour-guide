declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.less" {
  const style: any;
  export default style;
}

declare function useNavigate(): NavigateFunction;
interface NavigateFunction {
  (to: To, options?: { replace?: boolean; state?: any }): void;
  (delta: number): void;
}
