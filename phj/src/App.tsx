
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
// import MainPage from './components/MainPage';
import LoaderScreen from './components/LoaderScreen';
import GallerySection from './components/GallerySection';


export default function App() {
  // const [loaded] = useState(false);
  // const [isKorean, setIsKorean] = useState(false);

  return (
    <><>
    <LoaderScreen />
      <Navbar isKorean={false} onToggleLanguage={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <InfoBar />
      <GallerySection />
      {/* <MainPage /> */}
    </></>
  );
}
