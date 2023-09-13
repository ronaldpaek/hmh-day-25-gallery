import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Root, GalleryView, Login, Register, Painting } from "./routes";
import ErrorPage from "./error-page";
import { fetchPaintings } from "./utils";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      loader={() => fetchPaintings()}
      element={<Root />}
      errorElement={<ErrorPage />}
      id="root"
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<GalleryView />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="paintings/:paintingId" element={<Painting />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
