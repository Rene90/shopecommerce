import React, {useState} from "react"
import { Menu } from "antd"
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link} from "react-router-dom"
import firebase from "firebase/compat/app"
const {SubMenu, Item} = Menu


const Header = () =>{
    const [current, setCurrent]= useState("home")
    const handleClick = (e)=>{
        setCurrent(e.key)
    }

    return (
        <Menu onClick={handleClick} selectedKeys ={[current]} mode="horizontal" >
            <Item key="home" icon={<AppstoreOutlined />} >
            <Link to="/">Home</Link>
            </Item>
            <Item key="register" icon={<UserAddOutlined />} className="float-end" >
            <Link to="/register">Register</Link>
            </Item>
            <Item key="login" icon={<UserOutlined />} className="float-end">
            <Link to="/login">Login</Link>
            </Item>

            
            <SubMenu key="SubMenu" title="Username" className="float-start" icon={<SettingOutlined />}>
            
           
                <Item key="four" icon={<AppstoreOutlined />}>
                Navigation Four
                </Item>
                <Item key="five" icon={<AppstoreOutlined />}>
                Navigation Five
                </Item>
          
            </SubMenu>
            

            
          
            
  </Menu>

    )


    
}

export default Header