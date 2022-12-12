import { NavLink } from 'react-router-dom';

function Header() {
  return (
        <div className="header">
            <NavLink to="/"><span className="p-2 text-sm"> Home </span></NavLink>
            <NavLink to="/yuewen"><span className="p-2 text-sm"> Yuewen </span></NavLink>
            <NavLink to="/darkpita"><span className="p-2 text-sm"> Dark Pita </span></NavLink>
            <NavLink to="/jazzycozy"><span className="p-2 text-sm"> JazzyCozy </span></NavLink>
            <NavLink to="/graphics"><span className="p-2 text-sm"> Graphics </span></NavLink>
            <NavLink to="/decider"><span className="p-2 text-sm"> Decider </span></NavLink>
        </div>
    ); 
} 

export default Header;