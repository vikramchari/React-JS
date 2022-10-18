import './App.css';
import ContentBlock from './components/ContentBlock';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
function App() {
  return (
   <div>
     <HeaderComponent name='Home'/>
     <ContentBlock />
     <FooterComponent name='CopyRights Reserved' />
   </div>
  );
}
export default App;
