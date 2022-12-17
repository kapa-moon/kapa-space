import { NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
        <div className="" id="header">
            <NavLink to="/"><span className="p-1 m-1 text-sm header"> Home </span></NavLink>
            <NavLink to="/yuewen"><span className="p-2 text-sm header"> Yuewen </span></NavLink>
            <NavLink to="/darkpita"><span className="p-2 text-sm header"> Dark Pita </span></NavLink>
            <NavLink to="/jazzycozy"><span className="p-2 text-sm header"> JazzyCozy </span></NavLink>
            <NavLink to="/graphics"><span className="p-2 text-sm header"> Graphics </span></NavLink>
            <NavLink to="/decider"><span className="p-2 text-sm header"> Decider </span></NavLink>
        </div>
    ); 
} 

export default Header;