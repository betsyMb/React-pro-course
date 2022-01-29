import { lazy, LazyExoticComponent } from "react";
import { NoLazyload } from "../01-lazyload/pages/NoLazyload";
  
const lazyLayout = lazy(() => import(/*webpackChunkName: "lazylayout"*/ "../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: lazyLayout,
    name: "Lazy layout - Dash",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazyload,
    name: "no lazyload component",
  },
];

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
