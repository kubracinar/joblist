import React from "react";
import {Container} from "reactstrap";

const Header = () => {

    return (
        <div>

            <Container fluid id="head">
                <div className="parent">
                    <div className="img">
                        <img className="float-left" src="/logo.jpg" alt="logo"/>
                    </div>
                    <div className="text">
                        <h1 className="display-3">Job List</h1>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Header;