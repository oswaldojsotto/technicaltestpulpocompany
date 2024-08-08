"use client";
import React, { useRef } from "react";
import TopElement from "./top-bar-element";
import { data } from "@/app/data/top-bar-data";

const Topbar = () => {
  const containerRef = useRef(null);

  const handleMouseDown = e => {
    const container = containerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    container.isDown = false;
  };

  const handleMouseUp = () => {
    const container = containerRef.current;
    container.isDown = false;
  };

  const handleMouseMove = e => {
    const container = containerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 0.05;
    container.scrollLeft = container.scrollLeft - walk;
  };

  return (
    <section className="justify-between hidden w-full h-24 bg-white sm:flex">
      <div
        className="flex justify-between w-full gap-8 px-8 overflow-x-hidden bg-white cursor-grab"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        {data.map((item, index) => (
          <div key={index} className="flex bg-white">
            <TopElement title={item.title} ammount={item.ammount} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topbar;
