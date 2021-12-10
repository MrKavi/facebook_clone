import React from "react";
import "./Header.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import fb from "../components/images/fb.png";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//https://ms-my.facebook.com/kv.gasyal
import { useStateValue } from "./StateProvider";
import { Row, Col } from "react-bootstrap";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <nav className="navbar-header mb-2 mb-lg-0">
      <div className="header">
        <Row>
          <Col md={3}>
            <div className="left">
              <img src={fb} alt="" />
              <di className="input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text" />
              </di>
            </div>
          </Col>
          <Col md={6}>
            <div className="middle">
              <div
                className="options 
        options--active"
              >
                <HomeIcon fontSize="large" />
              </div>
              <div className="options">
                <FlagIcon fontSize="large" />
              </div>
              <div className="options">
                <SubscriptionsOutlinedIcon fontSize="large" />
              </div>
              <div className="options">
                <StorefrontOutlinedIcon fontSize="large" />
              </div>
              <div className="options">
                <SupervisedUserCircleIcon fontSize="large" />
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="right">
              <div className="info">
                {/*<Avatar src="https://scontent.fdel5-1.fna.fbcdn.net/v/t31.0-8/24313036_336388060174260_8584533568803755490_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=s29ADGxZ4LUAX_l1yGv&_nc_ht=scontent.fdel5-1.fna&oh=6f72a073a81804670257b6dc5b4a209a&oe=5F72A414" />*/}
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
              </div>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <ForumIcon />
              </IconButton>
              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </Col>
        </Row>
      </div>
    </nav>
  );
}

export default Header;
