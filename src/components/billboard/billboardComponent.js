/**
 * Created by JianHuangsh on 2017/12/21.
 */
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './home.css'
import  r1 from  './imgs/2.jpg'
import  r2 from  './imgs/3.jpg'
import  r3 from  './imgs/4.jpg'
import  r4 from  './imgs/5.jpg'
import {Layout, Menu, Breadcrumb} from 'antd';
import { Carousel } from 'antd';
const {Header, Content, Footer} = Layout;

class Billboard extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2">排行榜</Menu.Item>
                            <Menu.Item key="3">歌手</Menu.Item>
                            <Menu.Item key="4">会员</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 550 }}>
                            <Carousel autoplay >
                                <div><img src={r1}></img></div>
                                <div><img src={r2}></img></div>
                                <div><img src={r3}></img></div>
                                <div><img src={r4}></img></div>
                            </Carousel>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Billboard;
