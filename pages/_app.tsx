import { AuthProvider } from "@/components/contexts/AuthContext";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import ToastContainer from "@/components/hooks/ToastContainer";
import { ToastProvider } from "@/components/hooks/useToast";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AllScripts from "@/components/Scripts/AllScripts";

declare global {
  interface Window {
    $crisp: any;
    dataLayer: any;
    gtag: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();



  if (
    router.pathname === "/signin" ||
    router.pathname === "/signup" ||
    router.pathname.startsWith("/app")
  ) {
    return (
      <AuthProvider>
        <AllScripts />
        <ToastProvider>
          <DashboardLayout>
            <Component {...pageProps} />
            <ToastContainer />
          </DashboardLayout>
        </ToastProvider>
      </AuthProvider>
    );

  }
  else {
    return (
      <ToastProvider>
        <AllScripts />
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    );
  }


}
