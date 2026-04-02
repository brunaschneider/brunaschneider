import { GlobalStyles } from './styles/GlobalStyles';
import { SocialNavbar } from './components/SocialNavbar/SocialNavbar';
import { Home } from './Home';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyles />
      <SocialNavbar />
      <Home />
      <ScrollToTop />
    </>
  );
}

export default App;