import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState, ProfileState } from '@/store/reducers';
import './index.less';
type Prop = PropsWithChildren<RouteComponentProps> & ProfileState;

function Profile(props: Prop) {
  return <div>{props.title}</div>
}

function mapStateToProps(state: RootState): ProfileState {
  return state.profile;
}

export default connect(
  mapStateToProps
)(Profile);