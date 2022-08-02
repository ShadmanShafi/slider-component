import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation } from "swiper";

import placeholderImage from "./placeholder.png"

export default function App() {
  return (
    <div className="slider-entire-component-div">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {/*Slide 1*/}
        <SwiperSlide>
          <div className="slider-content-column">
            <div className="slider-content-row">
              <p className="slider-title">Key features and resources</p>
            </div>
            <div>
              <p className="slider-list-item-title">Identity</p>
              <ul>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Users can be uniquely identified by several optional fields (e.g. id.
usemane, email or mobile).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Each user object supports general-purpose fields for verifying identity information (e.g. first name, last name, profile photo, birth date, gender,
etc.).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">JSON metadata field is available for capturing any additional relevant
information.</p>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <img src={placeholderImage} alt="placeholder-image"/>
          </div>
        </SwiperSlide>

        {/*Slide 2*/}
        <SwiperSlide>
          <div className="slider-content-column">
            <div className="slider-content-row">
              <p className="slider-title">Slide 2</p>
            </div>
            <div>
              <p className="slider-list-item-title">Identity</p>
              <ul>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Users can be uniquely identified by several optional fields (e.g. id.
usemane, email or mobile).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Each user object supports general-purpose fields for verifying identity information (e.g. first name, last name, profile photo, birth date, gender,
etc.).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">JSON metadata field is available for capturing any additional relevant
information.</p>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <img src={placeholderImage} alt="placeholder-image"/>
          </div>
        </SwiperSlide>

        {/*Slide 3*/}
        <SwiperSlide>
          <div className="slider-content-column">
            <div className="slider-content-row">
              <p className="slider-title">Slide 3</p>
            </div>
            <div>
              <p className="slider-list-item-title">Identity</p>
              <ul>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Users can be uniquely identified by several optional fields (e.g. id.
usemane, email or mobile).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Each user object supports general-purpose fields for verifying identity information (e.g. first name, last name, profile photo, birth date, gender,
etc.).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">JSON metadata field is available for capturing any additional relevant
information.</p>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <img src={placeholderImage} alt="placeholder-image"/>
          </div>
        </SwiperSlide>
        
        {/*Slide 4*/}
        <SwiperSlide>
          <div className="slider-content-column">
            <div className="slider-content-row">
              <p className="slider-title">Slide 4</p>
            </div>
            <div>
              <p className="slider-list-item-title">Identity</p>
              <ul>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Users can be uniquely identified by several optional fields (e.g. id.
usemane, email or mobile).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">Each user object supports general-purpose fields for verifying identity information (e.g. first name, last name, profile photo, birth date, gender,
etc.).</p>
                </div>
                <div className="slider-list-item-row">
                  <p className="slider-list-item">•</p>
                  <p className="slider-list-item">JSON metadata field is available for capturing any additional relevant
information.</p>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <img src={placeholderImage} alt="placeholder-image"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
