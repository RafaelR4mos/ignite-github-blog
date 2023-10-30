import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { SpecificPost } from "./pages/SpecificPost";
import { NotFound } from "./components/NotFound";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<SpecificPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
