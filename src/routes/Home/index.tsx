import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState, HomeState } from '@/store/reducers';
import HomeHeader from './components/HomeHeader';
import HomeSliders from './components/HomeSliders';
import LessionList from './components/LessionList';
import actions from '@/store/actions/home';
import './index.less';
import { loadMore } from '@/utils';
// type StateProps = ReturnType<typeof MapStateToProps>;
type DispatchProps = typeof actions;
type Prop = PropsWithChildren<RouteComponentProps> & HomeState & DispatchProps;

function Home(props: Prop) {
  const homContainerRef = React.useRef(null);
  const lessionListRef = React.useRef(null);
  React.useEffect(() => {
    loadMore(homContainerRef.current, props.getLessions);
  }, [])
  return (
    <>
      <HomeHeader
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
        refreshLessions={props.refreshLessions}
      />
      <div className='home-container' ref={homContainerRef}>
        <HomeSliders sliders={props.sliders} getSliders={props.getSliders} />
        <LessionList
          lessions={props.lessions}
          getLessions={props.getLessions}
        />
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