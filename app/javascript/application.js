// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import "./components/Start.jsx";

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('hello-react-app'));
  root.render(<Start />);
});
