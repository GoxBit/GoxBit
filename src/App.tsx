import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";

const ProjectDetailPage = lazy(() =>
  import("@/pages/ProjectDetailPage").then((m) => ({
    default: m.ProjectDetailPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="h-dvh bg-bg" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
