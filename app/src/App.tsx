import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ConsultPage } from './pages/ConsultPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { PendingApprovalPage } from './pages/PendingApprovalPage';

function RootRedirect() {
  const { firebaseUser, profile, loading } = useAuth();
  if (loading) return null;
  if (!firebaseUser || !profile) return <Navigate to="/login" replace />;
  if (profile.role === 'lawyer' && profile.status !== 'active') return <Navigate to="/pending" replace />;
  return <Navigate to={profile.role === 'client' ? '/client' : '/admin'} replace />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/pending" element={<PendingApprovalPage />} />
          <Route
            path="/client"
            element={
              <ProtectedRoute role="client">
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="lawyer">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
