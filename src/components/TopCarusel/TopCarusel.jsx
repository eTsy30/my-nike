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
  justify-content: center;
`
const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
  padding: 0px 30px;
  box-sizing: border-box;
  & > p {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
    margin: 0px;
  }

  @media (max-width: 1000px) {
    margin-bottom: 0px;
    p {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }
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
  @media (max-width: 1000px) {
    svg {
      width: 25px;
    }
  }
`
const CardContainer = styled.div`
  display: flex;
  padding: 0px 30px;
  box-sizing: border-box;
  .swiper {
    padding: 15px 0px;
  }
  @media (max-width: 1000px) {
    padding: 0px;
    box-sizing: border-box;
    .swiper {
      padding: 15px 0px;
    }
  }
`
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
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={0}
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
