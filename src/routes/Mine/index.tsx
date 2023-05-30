import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState, MineState } from '@/store/reducers';
import './index.less';
type Prop = PropsWithChildren<RouteComponentProps> & MineState;

function Mine(props: Prop) {
  return <div>{props.title}</div>
}

function mapStateToProps(state: RootState): MineState {
  return state.mine;
}

export default connect(
  mapStateToProps
)(Mine);