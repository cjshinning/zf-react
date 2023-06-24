import React from 'react';
import './index.less';
import { Carousel } from 'antd';
import Slider from '@/typings/slider';
interface Props {
  sliders: Slider[],
  getSliders: Function
}

function HomeSliders(props: Props) {
  React.useEffect(() => {
    if (props.sliders.length === 0) {
      props.getSliders();
    }
  }, [])
  return (
    <Carousel effect={'scrollx'} autoplay>
      {
        props.sliders.map((slider: Slider, index: number) => (
          <div key={slider.url}>
            <img src={slider.url} alt="" />
          </div>
        ))
      }
    </Carousel>
  )
}

export default HomeSliders;