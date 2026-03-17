import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './AppShell'
import { LandingPage } from '../pages/Landing/LandingPage'
import { PrivacyPolicyPage } from '../pages/Legal/PrivacyPolicyPage'
import { TermsPage } from '../pages/Legal/TermsPage'
import { PostLoginPage } from '../pages/PostLogin/PostLoginPage'
import { ExploreToolsPage } from '../pages/ExploreTools/ExploreToolsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/post-login" element={<PostLoginPage />} />
        <Route path="/explore-tools" element={<ExploreToolsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

