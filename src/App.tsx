import { GlobalStyles } from './styles/GlobalStyles';
import { SocialNavbar } from './components/SocialNavbar/SocialNavbar';
import { Home } from './Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <SocialNavbar />
      <Home />
    </>
  );
}

export default App;