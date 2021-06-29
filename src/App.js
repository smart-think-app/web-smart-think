import './App.css';
import SmTopMenu from './component/sm-top-menu/sm-top-menu';
import SmIntroduce from './component/sm-introduce/sm-introduce'
import SmProject from './component/sm-project/sm-project'
import SmFounder from './component/sm-founder/sm-founder';
import SmTechStack from './component/sm-tech-stack/sm-tech-stack';
import SmInTouch from './component/sm-in-touch/sm-in-touch';
function App() {
  return (
    <div>
      <SmTopMenu/>
      <SmIntroduce/>
      <SmProject />
      <SmFounder/>
      <SmTechStack/>
      <SmInTouch/>
    </div>
  );
}

export default App;
