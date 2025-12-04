// ToggleButton.jsx
export default function ToggleButton({ isOpen, onClick }) {
  return (
    <div
      className={`toggle z-[999] sm:hidden ${isOpen ? "active" : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
