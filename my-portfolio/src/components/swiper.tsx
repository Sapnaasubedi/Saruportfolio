/* eslint-disable react/no-array-index-key -- allow use of array index in keys*/
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "./hero.css";
import { Col, Row } from "antd";
import type { ReactNode } from "react";
import React from "react";
import { Navigation } from "swiper/modules";
import type { SwiperProps } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { unnest } from "ramda";

interface SwiperComponentProps extends SwiperProps {
  children: ReactNode[];
}

export const SwiperComponent: React.FC<SwiperComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return unnest(children).length > 3 ? (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={3}
      spaceBetween={16}
      {...props}
    >
      {unnest(children).map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <Row gutter={16}>
      {unnest(children).map((slide, index) => (
        <Col key={index} span={8}>
          {slide}
        </Col>
      ))}
    </Row>
  );
};
