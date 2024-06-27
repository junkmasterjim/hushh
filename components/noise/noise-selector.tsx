import { Noise } from "@/app/page";
import { cn } from "@/lib/utils";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export const NoiseSelector = ({
  noise,
  setNoise,
}: {
  noise: Noise;
  setNoise: (noise: Noise) => void;
}) => {
  const NOISE_TYPES: Array<Noise["type"]> = [
    "white",
    "pink",
    "rain 1",
    "rain 2",
    "fire",
    "ocean",
    "ocean 2",
  ];

  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-medium">Noise type</label>

      <RadioGroup
        disabled={noise.isPlaying}
        value={noise.type}
        onValueChange={(e) => {
          if (!noise.isPlaying) {
            setNoise({
              ...noise,
              type: e as Noise["type"],
            });
          }
        }}
      >
        {NOISE_TYPES.map((type) => (
          <li
            className={cn(
              "flex items-center gap-2",
              !noise.isPlaying ? "cursor-pointer" : "cursor-not-allowed",
            )}
            key={type}
            onClick={() => {
              if (!noise.isPlaying) {
                setNoise({
                  ...noise,
                  type: type as Noise["type"],
                });
              }
            }}
          >
            <Label
              className={cn(
                "text-xs lowercase",
                !noise.isPlaying ? "cursor-pointer" : "cursor-not-allowed",
              )}
            >
              {type}
            </Label>
            <RadioGroupItem value={type} />
          </li>
        ))}
      </RadioGroup>
    </div>
  );
};
