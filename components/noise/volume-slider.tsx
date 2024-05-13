import { Noise } from "@/app/page";
import { Slider } from "../ui/slider";
import { Howler } from "howler";

export const VolumeSlider = ({
	noise,
	setNoise,
}: {
	noise: Noise;
	setNoise: (noise: Noise) => void;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="block text-sm font-medium text-neutral-900">
				Volume {noise.volume}%
			</label>
			<Slider
				className="cursor-pointer"
				typeof="range"
				min={0}
				max={100}
				value={[noise.volume]}
				onValueChange={(value) => {
					setNoise({ ...noise, volume: value[0] });
					Howler.volume(value[0] / 100);
				}}
				step={5}
			/>
		</div>
	);
};
