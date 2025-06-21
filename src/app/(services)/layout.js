import "@/app/assets/css/fontawesome.min.css";
import "@/app/assets/css/style.css";
import "@/app/global.css";
import AuthProvider from "@/utils/AuthProvider";
import PathnameWrapper from "../PathnameWrapper";

export default async function RootLayout({ children }) {
  return (
    <AuthProvider>
      <PathnameWrapper>{children}</PathnameWrapper>
    </AuthProvider>
  );
}
