import React from "react";
import { TABS } from "../data/constants";

function ModeSwitcher({ tab, onChange }) {
  return (
    <div className="mode-switcher-row">
      <div className="mode-switcher" role="group" aria-label="Choose service focus">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={tab === item.id ? "is-selected" : ""}
            aria-pressed={tab === item.id}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ModeSwitcher;
