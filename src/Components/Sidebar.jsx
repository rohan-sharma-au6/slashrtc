import React from 'react';
import "../styles/sidebar.css"
import { Icon} from "@blueprintjs/core";
import { Link ,useHistory} from 'react-router-dom';


const Sidebar = () => {
    const history = useHistory()
    return (
        <div className="sidebar">
            <section>
            <Icon className="icon-head"  icon="endorsed" iconSize={30}  />
            <Icon className="icon"  icon="circle" iconSize={30}  />
            <Icon className="icon"  icon="pie-chart" iconSize={30}   />
            <Icon className="icon" icon="clipboard" iconSize={30}   />
            <Icon className="icon" icon="briefcase" iconSize={30}   />
            <Icon className="icon" icon="inherited-group" iconSize={30}   />    
            </section>
            <div className="active">
           <Icon onClick={ (e)=>history.push("/")} className="icon-active" icon="cog" iconSize={30}   />
            </div>
            
        </div>
    );
};

export default Sidebar;