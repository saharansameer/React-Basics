import useTheme from "../context/theme";

export default function ThemeButton() {
    const {themeMode, toggleThemeMode} = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
      type="checkbox" 
      value="" 
      className="sr-only peer" 
      onChange={toggleThemeMode}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-md font-semibold text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
