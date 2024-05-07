import { useState } from "react";

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState("theme1");

  const handleChangeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <header className="flex justify-between items-center text-theme1-text-100 p-6">
      <h1>calc</h1>
      <div className="flex gap-4 items-end text-sm">
        <p>THEME</p>
        <div className="w-[70px]">
          <div className="w-full flex justify-between items-center px-2">
            <label htmlFor="theme1">1</label>
            <label htmlFor="theme2">2</label>
            <label htmlFor="theme3">3</label>
          </div>
          <div className="w-full flex justify-between items-center bg-theme1-bg-600 p-1 rounded-xl">
            <button
              onClick={() => handleChangeTheme("theme1")}
              value="theme1"
              className={
                "h-3 aspect-square bg-neutral-100 rounded-full" +
                (currentTheme === "theme1"
                  ? " bg-theme1-keys-bg-2 visible"
                  : " bg-inherit")
              }
            ></button>
            <button
              onClick={() => handleChangeTheme("theme2")}
              value="theme2"
              className={
                "h-3 aspect-square bg-neutral-100 rounded-full" +
                (currentTheme === "theme2"
                  ? " bg-theme1-keys-bg-2 visible"
                  : " bg-inherit")
              }
            ></button>
            <button
              onClick={() => handleChangeTheme("theme3")}
              value="theme3"
              className={
                "h-3 aspect-square bg-neutral-100 rounded-full" +
                (currentTheme === "theme3"
                  ? " bg-theme1-keys-bg-2 visible"
                  : " bg-inherit")
              }
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="relative cursor-pointer block">
              <input
                className="absolute opacity-0 h-0 w-0"
                id="theme1"
                name="theme"
                type="radio"
              />
              <span className="block h-3 aspect-square bg-neutral-100 rounded-full"></span>
            </div>
            <div className="relative cursor-pointer block">
              <input
                className="absolute opacity-0 h-0 w-0"
                id="theme2"
                name="theme"
                type="radio"
              />
              <span className="block h-3 aspect-square bg-neutral-100 rounded-full"></span>
            </div>
            <div className="relative cursor-pointer block">
              <input
                className="absolute opacity-0 h-0 w-0"
                id="theme3"
                name="theme"
                type="radio"
              />
              <span className="block h-3 aspect-square bg-neutral-100 rounded-full"></span>
            </div> */
}
