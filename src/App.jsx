import { useEffect } from "react";

function App() {
  useEffect(() => {
    const main = async () => {
      console.log(import.meta.env.VITE_MODE);
      console.log(process.env.API_URL);

      const response = await fetch("/api/todos");
      const data = await response.json();

      console.log(data);
    };

    main();
  }, []);

  return (
    <div className="mx-auto max-w-xl px-3 py-10 text-center text-white text-xl">
      Test
    </div>
  );
}

export default App;
