"use client";

const options = [
  { label: "Loud", value: "loud" },
  { label: "Pain", value: "pain" },
]

export function Button() {
  return (
    <select name="select" className="p-5 border-radius-8 text-black flex items-start justify-start button-custom">
      {options.map(item => (
        <option key={item.value} value={item.value} className="p-5">{item.label}</option>
      ))}
    </select>
  );
}
