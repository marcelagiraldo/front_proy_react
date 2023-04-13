/* rafc */
import React, { useState } from 'react'
import {Button, Layout} from 'antd'
import { MenuSider } from '../components/MenuComponents/MenuSider/MenuSider';
import { Content, Footer } from 'antd/es/layout/layout';
import { Header } from 'antd/es/layout/layout';
import { MenuTop } from '../components/MenuComponents/MenuTop/MenuTop';
import { GithubOutlined } from '@ant-design/icons';
import "./LayoutGenreral.scss"

export const LayoutGenreal = (props) => {
    const {children} = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
  return (
    <Layout>
      <MenuSider menuCollapsed = {menuCollapsed}/>
      <Layout
      className='layout-general'
      style={{marginLeft:menuCollapsed? "80px":"200px"}}>
        <Header className='layout-general__header'>
          <MenuTop
            menuCollapsed = {menuCollapsed}
            setMenuCollapsed = {setMenuCollapsed}
          />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button type='link' onClick={() => console.log("Ir a git")}>
            <GithubOutlined style={{fontSize:"20px"}}/>
          </Button>
        </Footer>
    </Layout>
    </Layout>
  );
};

