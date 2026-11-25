import type { FC } from "react";
import { useTheme, type Theme } from "../../hooks/useTheme";
import { themeToggleStyles } from "../../styles/styles";

const options: { value: Theme; label: string }[] = [
  { value: "light", label: "Lys" },
  { value: "dark", label: "Mørk" },
];

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={themeToggleStyles.group} role="group" aria-label="Fargetema">
      {options.map(({ value, label }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setTheme(value)}
            className={`${themeToggleStyles.option} ${
              isActive ? themeToggleStyles.optionActive : themeToggleStyles.optionIdle
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
