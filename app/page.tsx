"use client";

import { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/noise/header";
import { VolumeSlider } from "@/components/noise/volume-slider";
import { NoiseSelector } from "@/components/noise/noise-selector";
import { useSpacebarPlayPause } from "@/lib/useSpacebarPlayPause";

export type Noise = {
  type:
    | "white"
    | "pink"
    | "brownian"
    | "rain 1"
    | "rain 2"
    | "fire"
    | "ocean"
    | "ocean 2";
  volume: number;
  isPlaying: boolean;
};

const Home = () => {
  const [noise, setNoise] = useState<{
    type: Noise["type"];
    volume: number;
    isPlaying: boolean;
  }>({
    type: "white",
    volume: 75,
    isPlaying: false,
  });

  useSpacebarPlayPause();

  return (
    <main className="space-y-4">
      <Header noise={noise} setNoise={setNoise} />
      <Separator />
      <NoiseSelector noise={noise} setNoise={setNoise} />
      <Separator />
      <VolumeSlider noise={noise} setNoise={setNoise} />
      {<div /> || <Separator />}
    </main>
  );
};

export default Home;
