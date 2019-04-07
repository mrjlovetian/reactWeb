import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from './Home/home'
import Content from './Content/Content'
import Log from './Log/Log'
import Nav from './Nav/Nav'

// const Home = ()=> (
//   <div>我是主页</div>
// )

// const Content = ()=> (
//   <div>我是内容</div>
// )

// const Log = ()=> (
//   <div>我是日志</div>
// )

// const Nav = ()=> (
//   <div>
//     <Link to='/home'>主页</Link>
//     <Link to='/content'>内容</Link>
//     <Link to='/log'>日志</Link>
//     <div>首页的所有信息</div>
//   </div>
// )

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={Nav} path='/' exact></Route>
            <Route component={Home} path='/home'></Route>
            <Route component={Content} path='/content'></Route>
            <Route component={Log} path='/log'></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
