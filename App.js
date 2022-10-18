import './App.css';
import ContentBlockComponent from './components/Content-BlockComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent name='Header' />
      <NavigationComponent name='navigation'/>
      <ContentBlockComponent />
      <FooterComponent />
      {/* <ContentComponent employees={employeesArr}></ContentComponent>
      <FooterComponent /> */}
    </div>
  );
}

export default App;
