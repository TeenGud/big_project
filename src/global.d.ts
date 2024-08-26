declare module "*.module.css";
declare module "*.module.scss";
// and so on for whatever flavor of css you're using

declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }