import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OnboardingWelcome from "./pages/OnboardingWelcome";
import OnboardingLoginPage from "./pages/OnboardingLoginPage";
import OnboardingVerificationCode from "./pages/OnboardingVerificationCode";
import OnboardingSignupPage from "./pages/OnboardingSignupPage1";
import Feed from "./pages/Feed1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-signup-page":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-login-page":
        title = "";
        metaDescription = "";
        break;
      case "/feed1":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-verification-code":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-signup-page1":
        title = "";
        metaDescription = "";
        break;
      case "/feed":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OnboardingWelcome />} />
      <Route
        path="/onboarding-signup-page"
        element={<OnboardingSignupPage />}
      />
      <Route path="/onboarding-login-page" element={<OnboardingLoginPage />} />
      <Route path="/feed1" element={<Feed />} />
      <Route
        path="/onboarding-verification-code"
        element={<OnboardingVerificationCode />}
      />
      <Route
        path="/onboarding-signup-page1"
        element={<OnboardingSignupPage />}
      />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}
export default App;