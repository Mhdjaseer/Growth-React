import React,{useState} from 'react'
import Singleapp from './singleApp';
import AppDetial from './AppDetial';


const Dashboardcomponent = ({userApps,appDetail}) => {
    const [selectedApp, setSelectedApp] = useState(null);
    
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);

const handleAppClick = (userAppData) => {
    setSelectedApp(userAppData);
    setShowAnotherComponent(true);
    console.log(selectedApp, "this is my data");
  };
  return (
    <div>
       {showAnotherComponent ? (
            <AppDetial selectedApp={selectedApp}  />
            ) : (
            appDetail.map((app) => (
          <Singleapp key={app.id} app={app} userApps={userApps}  handleAppClick={handleAppClick} />
            ))
        )}
    </div>
  )
}

export default Dashboardcomponent
