// import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Drone" />
        </main>
        

        <footer className="App-footer">
          An{" "}
          <a
            href="hhttps://github.com/Asmasa1588/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/asmasadiq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asma
          </a>{" "}
          hosted on{" "}
          {/* <a
            href="https://app.netlify.com/teams/l-delara/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "} */}
        </footer>
      </div>
    </div>
  );
}
