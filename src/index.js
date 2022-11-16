import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaAlunos from "./Pages/Alunos/ListaAlunos";
import Menu from "./Components/Menu/Menu";
import FormularioMatricula from "./Pages/Matricula/FormularioMatricula/FormularioMatricula";
import Home from "./Pages/Home/Home";
import FormularContrato from "./Pages/Contrato/FormularContrato/FormularContrato";
import FormularioMatriculaImpressao from "./Pages/Matricula/FormularioMatriculaImpressao/FormularioMatriculaImpressao";
import MatriculaPreview from "./Pages/Matricula/Preview/MatriculaPreview";
import ContratoPreview from "./Pages/Contrato/Preview/ContratoPreview";
import ContratoImpressao from "./Pages/Contrato/ContratoImpressao/ContratoImpressao";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/backoffice",
    element: <ListaAlunos />,
  },
  {
    path: "/matricular/:studentId",
    element: <FormularioMatricula />,
  },
  {
    path: "/contrato/:studentId",
    element: <FormularContrato />,
  },
  ,
  {
    path: "/preview-contrato/:studentId",
    element: <ContratoPreview />,
  },
  {
    path: "/matricularimpressao/:studentId",
    element: <FormularioMatriculaImpressao />,
  },
  {
    path: "/preview-matricula/:studentId",
    element: <MatriculaPreview />,
  },
  {
    path: "/contratoimpressao/:studentId",
    element: <ContratoImpressao />,
  }
]);

root.render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
