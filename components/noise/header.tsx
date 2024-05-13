import { PauseIcon, PlayIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Noise } from "@/app/page";
import { Howl, Howler } from "howler";

export const Header = ({
	noise,
	setNoise,
}: {
	noise: Noise;
	setNoise: (noise: Noise) => void;
}) => {
	return (
		<header className="flex items-center justify-between">
			<span className="cursor-default">
				<h1 className="text-lg font-medium">hushh</h1>
				<h2 className="text-xs">noise maker.</h2>
			</span>

			<PlayPauseButton noise={noise} setNoise={setNoise} />
		</header>
	);
};

const PlayPauseButton = ({
	noise,
	setNoise,
}: {
	noise: Noise;
	setNoise: (noise: Noise) => void;
}) => {
	const whiteNoise = new Howl({
		src: ["/noise/white-noise.mp3"],
		volume: (noise.volume - 25) / 100,
		loop: true,
	});
	const pinkNoise = new Howl({
		src: ["/noise/pink-noise.mp3"],
		volume: (noise.volume - 50) / 100,
		loop: true,
	});
	const rain1Noise = new Howl({
		src: ["/noise/rain-1.mp3"],
		volume: noise.volume / 100,
		loop: true,
	});
	const rain2Noise = new Howl({
		src: ["/noise/rain-2.mp3"],
		volume: noise.volume / 100,
		loop: true,
	});
	const fireNoise = new Howl({
		src: ["/noise/fire.mp3"],
		volume: (noise.volume + 25) / 100,
		loop: true,
	});
	const oceanNoise = new Howl({
		src: ["/noise/ocean.mp3"],
		volume: (noise.volume + 10) / 100,
		loop: true,
	});
	const ocean2Noise = new Howl({
		src: ["/noise/ocean-2.mp3"],
		volume: noise.volume / 100,
		loop: true,
	});

	const playPause = () => {
		if (!noise.isPlaying) {
			setNoise({ ...noise, isPlaying: true });
			switch (noise.type) {
				case "white":
					whiteNoise.play();
					break;
				case "pink":
					pinkNoise.play();
					break;
				case "rain 1":
					rain1Noise.play();
					break;
				case "rain 2":
					rain2Noise.play();
					break;
				case "fire":
					fireNoise.play();
					break;
				case "ocean":
					oceanNoise.play();
					break;
				case "ocean 2":
					ocean2Noise.play();
					break;
			}
		} else {
			setNoise({ ...noise, isPlaying: false });
			Howler.stop();
		}
	};

	return (
		<div className="flex items-end flex-col gap-2">
			<Tooltip delayDuration={500}>
				<TooltipTrigger asChild>
					<button
						id="play-pause-button"
						className="p-1 rounded-full bg-neutral-300 inline-flex items-center justify-center group hover:opacity-75 transition-opacity"
						onClick={() => {
							playPause();
						}}
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
						{noise.isPlaying ? (
							<PauseIcon className="size-3" fill="currentColor" />
						) : (
							<PlayIcon className="size-3" fill="currentColor" />
						)}
					</button>
				</TooltipTrigger>
				<TooltipContent side="left" align="center">
					<p>{noise.isPlaying ? "Pause" : "Play"}</p>
				</TooltipContent>
			</Tooltip>

			{noise.isPlaying ? (
				<p className="text-xs self-end cursor-default">
					now playing: <strong>{noise.type}</strong>
				</p>
			) : (
				<p className="text-xs self-end cursor-default">off</p>
			)}
		</div>
	);
};
