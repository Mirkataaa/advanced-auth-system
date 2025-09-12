import { Navigate, Route, Routes } from "react-router"
import FloatingShape from "./components/FloatingShapeComponent"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import EmailVerificationPage from "./pages/EmailVerificationPage"
import { useAuthStore } from "./store/authStore"
import HomePage from "./pages/HomePage"
import { useEffect } from "react"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />
  }

  return children;
}

const RedirectAuthenticatedUSer = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />
  }

  return children;
}

function App() {

  const { isChechkingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isChechkingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 border-4 border-t-4 border-t-green-500 border-green-200 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-green-500" size="w-62 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="-70%" left="80%" delay={5} />
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="-40%" left="10%" delay={2} />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUSer>
              <SignUpPage />
            </RedirectAuthenticatedUSer>
          } />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUSer>
              <LoginPage />
            </RedirectAuthenticatedUSer>
          } />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </div>



  )
}

export default App
