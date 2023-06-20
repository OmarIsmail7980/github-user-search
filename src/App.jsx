import { Navbar, Profile, Search } from "./components";
import {useTheme } from "./context/ThemeContext";

function App() {
  const {theme} = useTheme();
  return (
      <main className="app" id={theme}>
        <div className="app__sections">
          <Navbar />
          <Search />
          <Profile />
        </div>
      </main>
  );
}

export default App;
