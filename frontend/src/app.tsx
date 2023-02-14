import { useEffect, useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import './app.scss';

export function App() {

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>{import.meta.env.VITE_LOL}</code> and
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
