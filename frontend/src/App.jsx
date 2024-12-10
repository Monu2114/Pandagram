import BackgroundPlayer from "./Components/Background";

export default function App() {
  return (
    <div className="relative">
      {/* Background video component */}
      <BackgroundPlayer />

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h2 className="font-sans text-slate-300 text-4xl	">Pandagram</h2>
      </div>
    </div>
  );
}
