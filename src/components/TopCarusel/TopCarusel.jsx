/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import React, { useRef } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ReactComponent as ArrowLeft } from '../../assets/Icon/Arrowleft.svg'
import { TopCard } from './TopCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
  & > p {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
    margin: 0px;
  }
`
const ArrowContainer = styled.div`
  svg:nth-child(even) {
    transform: rotate(180deg);
    margin-left: 25px;
  }
  rect:hover {
    fill: #c6c6c6;
  }
`
const CardContainer = styled.div`
  display: flex;
`
// const Vbutton = styled.button`
//   z-index: 100;
//   border: 1px solid #000;
//   cursor: grab;
// `
export function TopCarusel() {
  const swiperRef = useRef()
  return (
    <Container>
      <LabelContainer>
        <p>Top sneakers</p>
        <ArrowContainer>
          <ArrowLeft onClick={() => swiperRef.current?.slideNext()} />
          <ArrowLeft onClick={() => swiperRef.current?.slidePrev()} />
        </ArrowContainer>
      </LabelContainer>
      <CardContainer>
        {console.log(Navigation.extendParams)}
        <Swiper
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={250}
          slidesPerGroup={1}
          loop
          loopFillGroupWithBlank
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          <SwiperSlide>
            <TopCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopCard />
          </SwiperSlide>
          <SwiperSlide>
            <TopCard />
          </SwiperSlide>
        </Swiper>
      </CardContainer>
    </Container>
  )
}
