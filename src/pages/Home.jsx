import React from 'react';
import { Icon } from "@blueprintjs/core";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{marginLeft:"75px"}}> <nav class="bp3-navbar ">
            <div>
                <div class="bp3-navbar-group bp3-align-left">
                <Link to={"/"}> <div className="bp3-navbar-heading">Settings</div></Link>
                </div>
                <div class="bp3-navbar-group bp3-align-right">
                    <button class="bp3-button bp3-minimal">Admin</button>

                    <button class="bp3-button bp3-minimal bp3-icon-user"></button>

                </div>
            </div>
        </nav>

        {/**all Icons */}
            <div className="main">
                <h5 style={{ marginTop: "90px", color: "grey" }}>GENERAL SETTINGS</h5>
                <div className="set-icon">
                    <Icon className="ic" icon="mugshot" iconSize={75} />
                    <p>Users</p>
                </div>
                <div className="set-icon">
                    <Icon className="ic" icon="tag" iconSize={75} />
                    <p>Tags</p>
                </div>
                <Link to={'/dialogue'}><div className="set-icon">
                    <Icon className="ic" icon="numbered-list" iconSize={75} />
                    <p>Dialogues</p>
                </div></Link>
                <div className="set-icon">
                    <Icon className="ic" icon="inbox" iconSize={75} />
                    <p>Intents</p>
                </div>
                <div className="set-icon">
                    <Icon className="ic" icon="grouped-bar-chart" iconSize={75} />
                    <p>Carriers</p>
                </div>
                <div className="set-icon">
                    <Icon className="ic" icon="history" iconSize={75} />
                    <p>History</p>
                </div>
                <div className="set-icon">
                    <Icon className="ic" icon="edit" iconSize={75} />
                    <p>Permissions</p>
                </div>


            </div>
        </div>
    );
};

export default Home;