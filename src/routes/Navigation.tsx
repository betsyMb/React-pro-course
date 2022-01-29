import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import logo from "../logo.svg";
export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />
              <ul>
                {routes.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Routes>
              {routes.map((item) => (
                <Route
                  key={item.to}
                  path={item.path}
                  element={<item.Component />}
                />
              ))}

              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
