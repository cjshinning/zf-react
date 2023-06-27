import React, { PropsWithChildren, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import NavBar from '@/components/NavBar';
import { Card } from 'antd';
import './index.less';
import Lession, { LessionResult } from '@/typings/lession';
import { getLession } from '@/api/home';
interface Params {  //路径参数 /detail:id = params={}
  id: string
}
type RouteProps = RouteComponentProps<Params, StaticContext, Lession>;
type Prop = PropsWithChildren<RouteProps>;

function LessionDetail(props: Prop) {
  let [lession, setLession] = useState<Lession>({} as Lession);
  useEffect(() => {
    (async function () {
      let lession: Lession = props.location.state;
      if (!lession) {
        let id = props.match.params.id;
        let result: LessionResult = await getLession<LessionResult>(id);
        if (result.success) {
          lession = result.data;
        }
      }
      setLession(lession);
    })()
  }, [])
  return (
    <>
      <NavBar>{lession.title}</NavBar>
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<video src={lession.video} controls autoPlay={false} />}
      >
        <Card.Meta
          title={lession.title}
          description={<p>价格：{lession.price}</p>}
        />
      </Card>
    </>
  )
}

export default connect()(LessionDetail);