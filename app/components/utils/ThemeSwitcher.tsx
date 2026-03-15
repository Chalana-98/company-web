"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <Switch
        isSelected={theme === "light"}
        size="md"
        color="secondary"
        onValueChange={(isSelected) => setTheme(isSelected ? "light" : "dark")}
        startContent={<span className="text-xl">☀️</span>}
        endContent={<span className="text-xl">🌙</span>}
      />
    </div>
  );
}
