import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store from './store';
import Tabs from './components/Tabs';
import Home from './routes/Home';
import Mine from './routes/Mine';
import Profile from './routes/Profile';
import Register from './routes/Register';
import Login from './routes/Login';
import Detail from './routes/Detail';
import history from './store/history';
import './assets/style/global.less';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main className='main-container'>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/mine" component={Mine} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Tabs />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));