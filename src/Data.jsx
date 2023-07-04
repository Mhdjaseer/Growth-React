import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import StorageIcon from '@mui/icons-material/Storage';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Profile from './components/menu/Profile';
import Task  from './components/menu/Task';
import Points from './components/menu/Points';



 const links=[
    {
        id:1,
        menu:"Home",
        icon:<HomeIcon/>,
        active:"first"
        
    },
    {
        id:2,
        menu:"Profile",
        icon:<Person2Icon/>,
        component:<Profile/>,
        active:"second"
        
    },
    {
        id:3,
        menu:"Poinsts",
        icon:<StorageIcon/>,
        component:<Points/>,
        active:"third"
    },
    {   
        id:4,
        menu:"Tasks",
        icon:<AssignmentTurnedInIcon/>,
        component:<Task/>,
        active:"four"
    },{
        id:5,
        menu:"Logout",
        icon:<PowerSettingsNewIcon/>,
        active:"five"
    }

];


export default links;