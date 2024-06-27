import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Palette, Terminal, Box, Laptop, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";

const themes = [
  { name: "light", icon: Sun },
  { name: "dark", icon: Moon },
  { name: "gruvbox-light", icon: Box },
  { name: "gruvbox-dark", icon: Box },
  { name: "terminal", icon: Terminal },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip delayDuration={200}>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger
            id="settings"
            className="p-1 rounded-full bg-secondary text-secondary-foreground inline-flex items-center justify-center group hover:opacity-75 transition-opacity"
          >
            <Palette className="size-3" />
          </DropdownMenuTrigger>
        </TooltipTrigger>

        <TooltipContent
          side="bottom"
          align="center"
          className="text-xs py-1 px-2"
        >
          <p>Theme</p>
        </TooltipContent>

        <DropdownMenuContent>
          <DropdownMenuLabel className="text-xs font-medium text-foreground/90">
            Changing themes will reload hushh
          </DropdownMenuLabel>
          <Separator />
          <DropdownMenuItem
            asChild
            onClick={() => {
              setTheme("system");
              location.reload();
            }}
          >
            <button className="w-full">
              <div className="flex items-center gap-2">
                <Laptop className="h-4 w-4" />
                <span className="capitalize">System</span>
                {theme === "system" && <Check className="size-3" />}
              </div>
            </button>
          </DropdownMenuItem>

          <Separator className="my-2" />

          {themes.map(({ name, icon: Icon }) => (
            <DropdownMenuItem
              asChild
              key={name}
              onClick={() => {
                setTheme(name);
                location.reload();
              }}
            >
              <button className="w-full">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="capitalize">{name}</span>
                  {theme === name && <Check className="size-3" />}
                </div>
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </Tooltip>
  );
}
