import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState, HomeState } from '@/store/reducers';
import HomeHeader from './components/HomeHeader';
import HomeSlider from './components/HomeSlider';
import actions from '@/store/actions/home';

import './index.less';
// type StateProps = ReturnType<typeof MapStateToProps>;
type DispatchProps = typeof actions;
type Prop = PropsWithChildren<RouteComponentProps> & HomeState & DispatchProps;

function Home(props: Prop) {
  const homContainerRef = React.useRef(null);
  return (
    <>
      <HomeHeader
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
      />
      <div className='home-container' ref={homContainerRef}>
        <HomeSlider sliders={props.sliders} getSliders={props.getSliders} />
      </div>
    </>
  )
}

function mapStateToProps(state: RootState): HomeState {
  return state.home;
}

export default connect(
  mapStateToProps, actions
)(Home);