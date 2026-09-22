import { Sun, Moon } from "./icons";

export default function Header({ theme, onThemeChange }) {
  return <header className="header"><div className="header-inner"><a className="logo" href="#top"><span className="logo-mark">S</span>Simsha.</a><nav className="nav"><a href="#about">About</a><a href="#projects">Projects</a><a href="#exploring">Exploring</a><a href="#contact">Contact</a><button className="theme-toggle" onClick={onThemeChange} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>{theme === "light" ? <Moon /> : <Sun />}</button></nav><button className="theme-toggle mobile-theme" onClick={onThemeChange} aria-label="Toggle theme">{theme === "light" ? <Moon /> : <Sun />}</button></div></header>;
}
