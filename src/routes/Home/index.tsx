
import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState, HomeState } from '@/store/reducers';

import './index.less';
type Prop = PropsWithChildren<RouteComponentProps> & HomeState;

function Home(props: Prop) {
  return <div>{props.title}</div>
}

function mapStateToProps(state: RootState): HomeState {
  return state.home;
}

export default connect(
  mapStateToProps
)(Home);