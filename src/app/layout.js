import Navbar from "@/components/Navbar";
import "./globals.css";
import AuthContextProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//! metadata objesi ve generateMetadata fonksiyonu sadece Server Componentlerden export edilebilir.
export const metadata = {
  title: "Netflix App",
  description: "a movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
