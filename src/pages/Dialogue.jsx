import { Button, Classes, Dialog, Tooltip, Icon } from "@blueprintjs/core";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDialogue } from '../redux/actions/dialogueActions';
import DialougesItems from "../Components/Dialoguesitems"
import "../styles/dialogues.css"
import { Link } from "react-router-dom";

class Dialogue extends Component {
    state = {
        name: ""
    }
    handleName = e => {
        this.setState({ name: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();

        const todo = {
            name: this.state.name,

        };
        this.props.createDialogue(todo);
        this.setState({ name: "" });
    };

    render() {
        const handleOpen = () => this.setState({ isOpen: true });
        const handleClose = () => this.setState({ isOpen: false });

        return (
            <div style={{ marginLeft: "75px" }}> <nav class="bp3-navbar ">
                <div>
                    <div className="bp3-navbar-group bp3-align-left">
                    <Link to={"/"}> <div className="bp3-navbar-heading">Settings</div></Link>
                        <div className="bp3-navbar-heading"> {">"} </div>
                        <Link to={"/dialogue"}><div className="bp3-navbar-heading">Dialogues</div></Link>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-minimal">Admin</button>

                        <button className="bp3-button bp3-minimal bp3-icon-user"></button>

                    </div>
                </div>
            </nav>
                <section className="add" >
                    <button className="add-butt bp3-icon-add" onClick={handleOpen}> Add Dialogues</button>
                </section>

                <DialougesItems dialogues={this.props.dialogues} />


                <Dialog style={{ width: "500px", height: "200px" }}
                    className=""
                    icon="info-sign"
                    onClose={handleClose}
                    title="Create Dialogues"
                    {...this.state}
                >
                    <form onSubmit={this.handleSubmit}>
                        <input
                        className="ip"
                            onChange={this.handleName}
                            value={this.state.name}
                            type="text"
                            name="title"
                            placeholder="Create new Dialogue"
                        />
                        <br/>
                        <input type="submit" className="btn" value="Create" />
                    </form>

                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Tooltip content="This button is hooked up to close the dialog.">
                                <Button style={{ marginTop: "5px" }} onClick={handleClose}>Close</Button>
                            </Tooltip>
                        </div>
                    </div>
                </Dialog>


            </div>
        );
    }
}
const mapStateToProps = storeState => {
    return {
        dialogues: storeState.dialogues
    };
};

export default connect(mapStateToProps, { createDialogue: createDialogue })(Dialogue)



