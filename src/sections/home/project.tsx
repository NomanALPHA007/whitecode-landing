"use client";
import React from "react";
import { ImageCarousel } from "@/components";
import { carouselProjects } from "@/data";

const Project = () => {
  return (
    <main>
      <ImageCarousel projects={carouselProjects} />
    </main>
  );
};

export default Project;
