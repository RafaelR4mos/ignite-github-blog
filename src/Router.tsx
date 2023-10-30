import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { SpecificPost } from "./pages/SpecificPost";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<SpecificPost />} />
      </Routes>
    </BrowserRouter>
  );
}
