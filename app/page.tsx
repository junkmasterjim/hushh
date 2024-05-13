"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState } from "react";

const NOISE_TYPES = ["white", "pink", "rain", "fire"];

const Home = () => {
	const [noiseType, setNoiseType] = useState<string>("white");
	const [volume, setVolume] = useState<number>(75);
	const [playing, setPlaying] = useState<boolean>(false);

	return (
		<main className="space-y-4">
			<header className="flex items-center justify-between">
				<span>
					<h1 className="text-lg font-medium">hushh</h1>
					<h2 className="text-xs">White noise generator.</h2>
				</span>
				<PlayPauseButton />
			</header>
			<Separator />

			{/* select noise type (white noise, pink noise, light rain, heavy rain, fire crackle) with radio buttons */}
			<div className="flex flex-col gap-2">
				<label className="block text-sm font-medium">Noise type</label>

				<RadioGroup value={noiseType} onValueChange={(e) => setNoiseType(e)}>
					{NOISE_TYPES.map((type) => (
						<li
							className="flex items-center gap-2 cursor-pointer"
							key={type}
							onClick={() => setNoiseType(type)}
						>
							<Label className="text-xs lowercase cursor-pointer">{type}</Label>
							<RadioGroupItem value={type} />
						</li>
					))}
				</RadioGroup>
			</div>

			<Separator />

			{/* volume slider */}
			<div className="flex flex-col gap-2">
				<label className="block text-sm font-medium text-neutral-900">
					Volume {volume}%
				</label>
				<Slider
					typeof="range"
					min={0}
					max={100}
					value={[volume]}
					onValueChange={(value) => setVolume(value[0])}
					step={5}
				/>
			</div>
		</main>
	);
};

export default Home;

const Separator = () => {
	return <div className="h-px bg-neutral-300" />;
};

const PlayPauseButton = () => {
	const [playing, setPlaying] = useState<boolean>(false);

	return (
		<Tooltip delayDuration={500}>
			<TooltipTrigger asChild>
				<button
					id="play-pause-button"
					className="p-1 rounded-full bg-neutral-300 inline-flex items-center justify-center group hover:opacity-75 transition-opacity"
					onClick={() => setPlaying(!playing)}
					onMouseDown={() =>
						document
							.getElementById("play-pause-button")
							?.classList.add("scale-95")
					}
					onMouseUp={() =>
						document
							.getElementById("play-pause-button")
							?.classList.remove("scale-95")
					}
				>
					{playing ? (
						<PauseIcon className="size-3" fill="currentColor" />
					) : (
						<PlayIcon className="size-3" fill="currentColor" />
					)}
				</button>
			</TooltipTrigger>
			<TooltipContent side="left" align="center">
				<p>{playing ? "Pause" : "Play"}</p>
			</TooltipContent>
		</Tooltip>
	);
};
