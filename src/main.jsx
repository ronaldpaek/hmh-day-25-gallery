import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// import App from "./App.jsx";
// import { Login, Register, Gallery, Painting } from "./components";
import { Root } from "./routes";
import "./index.css";

const router = createBrowserRouter(
  //   [
  //   {
  //     path: "/",
  //     element: <App />,
  //     children: [
  //       { path: "", element: <Gallery /> },
  //       { path: "login", element: <Login /> },
  //       { path: "register", element: <Register /> },
  //       { path: "paintings/:paintingId", element: <Painting /> },
  //     ],
  //   },
  // ]
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route index element={<Index />} /> */}
      {/* <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="paintings/:paintingId" element={<Painting />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
