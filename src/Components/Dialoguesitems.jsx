import React from 'react';
import { Icon } from "@blueprintjs/core";

const Dialoguesitems = ({dialogues}) => {
    return (
        <div>
            <table style={{ width: "100%" }}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>KIND</th>
                    <th>BRAND</th>
                    <th>EXPORT/IMPORT</th>
                    <th>ACTIONS</th>
                </tr>
                <br/>
            
                {dialogues.map(all => (
                    <tr style={{ textAlign: "center",marginTop:"10px" }}>
                        <td>{all.name}</td>
                        <td className="mess">MESSENGER</td>

                        <td>HRA</td>
                        <td><Icon icon="export" /> / <Icon icon="import" /></td>
                        <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                    </tr>
                ))}

                <tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>Amazon</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr>
                <tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>Facebook</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr>
                <tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>Ali-expres</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr>
                <tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>PUBG</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr>
                <tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>NIKE</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr>
                <tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>Flipkart</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr><tr style={{ textAlign: "center",marginTop:"10px" }}>
                    <td>Tesla</td>
                    <td className="mess">MESSENGER</td>

                    <td>HRA</td>
                    <td><Icon icon="export" /> / <Icon icon="import" /></td>
                    <td><Icon icon="add" />  <Icon icon="edit" />  <Icon icon="confirm" />  <Icon icon="bookmark" /></td>
                </tr>
                
                    </tbody>
            </table>

        </div>
    );
};

export default Dialoguesitems;