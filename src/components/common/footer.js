import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {

    render(){
        return(
            <div className="panel-footer">
                <ul className="easypiecharts list-unstyled">
                    <li className="clearfix">
                        <span className="stat-number">18.125</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;