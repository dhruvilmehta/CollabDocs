import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login';
import Register from './pages/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import { ToastProvider } from './contexts/toast-context';
import VerifyEmail from "../src/pages/user/verify-email"
import AuthRoute from "./components/molecules/auth-route"
import Create from "./pages/document/create"
import DocumentProvider from "./contexts/document.context"
import Document from "./pages/document/index"
import { EditorProvider } from './contexts/editor-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/document/create" element={<AuthRoute element={<Create />} />} />
          <Route path="/document/:id" element={<AuthRoute element={
          <DocumentProvider>
            <EditorProvider>
              <Document />
            </EditorProvider>
          </DocumentProvider>
          } />} />
        </Routes>
      </ToastProvider>
    </AuthProvider>
  </BrowserRouter>
    // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
