import "./App.css";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <h1>Coming soon...</h1>
        <h3>
          We're hard at work getting the basics of this site up. For now reach
          out to use on:
        </h3>
        <div className="socials">
          <a href="https://twitter.com/splat_matchmake" target="_blank">
            <FaTwitter size={150} />
          </a>
          <a href="https://github.com/matchmake-ink" target="_blank">
            <FaGithub size={150} />
          </a>
          <a href="https://discord.gg/MtnRydHhAt" target="_blank">
            <FaDiscord size={150} />
          </a>
        </div>
        <p>
          If you're an artist, developer, or just want to help out, feel free to
          reach out to FireSquid#8882 on discord.
        </p>
      </div>
    </>
  );
}

export default App;
