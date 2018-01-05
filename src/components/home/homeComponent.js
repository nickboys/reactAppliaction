/**
 * Created by JianHuangsh on 2017/12/21.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addCount} from '../../actions/index'
import store from '../../store/index'
import 'antd/dist/antd.css';
import './home.css'
import  r1 from  './imgs/2.jpg'
import  r2 from  './imgs/3.jpg'
import  r3 from  './imgs/4.jpg'
import  r4 from  './imgs/5.jpg'
import  r6 from  './imgs/6.jpg'
import  r7 from  './imgs/7.jpg'
import {Layout, Menu, Breadcrumb} from 'antd';
import {Carousel} from 'antd';
const {Header, Content, Footer} = Layout;

class Home extends Component {


    render() {
        let {count} = this.props;
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2">排行榜</Menu.Item>
                            <Menu.Item key="3">歌手</Menu.Item>
                            <Menu.Item key="4">会员</Menu.Item>
                            <Menu.Item key="5" style={{marginLeft: '78em'}}>登陆/注册</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <div style={{background: '#fff', padding: 24, minHeight: 450}}>
                            <Carousel autoplay style={{height: '100%'}}>
                                <div><img src={r1}></img></div>
                                <div><img src={r2}></img></div>
                                <div><img src={r3}></img></div>
                                <div><img src={r4}></img></div>
                            </Carousel>

                        </div>
                        <div>
                            <a href=""><img src={r6} style={{marginLeft: '80px'}}/></a>
                            <a href=""><img src={r7} style={{marginLeft: '115px'}}/></a>
                            <div>
                                <input type="text" onClick={this.addCount} placeholder="填入试试下面得字会变"/>
                            </div>
                            <div>
                                <input value={count} type="success"/>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        );
    }

    addCount() {
     //   let {dispatch, count} = this.props;
        //dispatch(addCount());
        store.dispatch(addCount())
    }
}


function select(state) {
    return {
        count: state.count,
    }
}


export default connect(select)(Home);
