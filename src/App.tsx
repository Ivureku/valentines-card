import { Routes, Route } from "react-router";
import StartPage from "./StartPage";
import GiftPage from "./GiftPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/gifts" element={<GiftPage />} />
    </Routes>
  );
}
