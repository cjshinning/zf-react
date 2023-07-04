import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store from './store';
import Tabs from './components/Tabs';
import history from './store/history';
import { Spin } from 'antd';
import './assets/style/global.less';

const Home = React.lazy(() => import('./routes/Home'))
const Mine = React.lazy(() => import('./routes/Mine'))
const Profile = React.lazy(() => import('./routes/Profile'))
const Register = React.lazy(() => import('./routes/Register'))
const Login = React.lazy(() => import('./routes/Login'))
const Detail = React.lazy(() => import('./routes/Detail'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Suspense fallback={<Spin />}>
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
      </React.Suspense>
      <Tabs />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));