import { ROUTER } from "@/config/constants";
import { createBrowserRouter } from "react-router-dom";
import TermsConditions from '@/pages/TermsConditions';
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import Main from "@/components/Main";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: ROUTER.HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTER.HOME,
        element: <Main />
      },
      {
        path: ROUTER.TERMS_CONDITIONS,
        element: <TermsConditions />
      },
      {
        path: ROUTER.PRIVACY_POLICY,
        element: <PrivacyPolicy />
      }
    ]
  },
])