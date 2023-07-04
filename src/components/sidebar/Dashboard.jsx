import React ,{useState} from 'react';
import links from '../../Data'
import Dashboardcomponent from './Dashboardcomponent';
import Profile from '../menu/Profile';
import Points from '../menu/Points';
import Task  from '../menu/Task';
import SignUp from './Logout';


const Dashboard = ({userApps,appDetail,username}) => {
    const [selectedApp, setSelectedApp] = useState(null);
    const [active,setActive]=useState("first")

    const handleMenuClick = (component) => {
        setSelectedApp(component);
    }
  return (
    
    <div>
      <div className='relative'>
      <nav class="bg-white flex flex-col ">
  <h1 className='text-sm text-start pl-56  py-5 bg-gray-400 text-blue-700 underline' > {selectedApp && selectedApp.name ?  <>&lt;  selectedApp.name</> :null}</h1>
</nav>
      </div>

<div className='flex'>
<div  class="  left-0  bg-gray-400 w-64 h-screen  " >
   <div class="h-full px-3 py-4 overflow-y-auto">
      <ul class=" font-medium ">
        {links.map((link)=>{
            const {id,menu,icon,active}=link
            return(
             <li key={id} className='pb-4'>
             <p href="#" class="flex p-3 text-white rounded-md bg-[#6558f5] border border-[#6558f5] "  onClick={()=>setActive(active)}>
                <span class="mx-auto">{icon}{menu}</span>
                </p>
    
            </li>
            )
        })}
        
      </ul>
   </div>
</div>
<div className='bg-white w-full p-4'>
    
<div className="p-4 w-full bg-white ">
       {active==="first" && <Dashboardcomponent userApps={userApps} appDetail={appDetail}/>} 
       {active==="second" && <Profile username={username}/>}
       {active==="third" && <Points username={username}/>}
       {active==="four" && <Task username={username} userApps={userApps} appDetail={appDetail}/>}
       {active==="five" && <SignUp/>}


    </div>

    </div>
    
</div>


</div>

  )
}

export default Dashboard
