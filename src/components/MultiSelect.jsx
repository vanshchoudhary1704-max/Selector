import React, { useState } from "react";
import { Controller } from "react-hook-form";

const MultiSelect = ({ form, name, label, options, inputClass, rules }) => {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      name={name}
      control={form.control}
      defaultValue={[]}
      rules={rules}
      render={({ field: { value = [], onChange } }) => (
        <div
          tabIndex={-1}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
          }}
          className="relative"
        >
          <div
            onClick={() => setOpen((prev) => !prev)}
            className={`${inputClass} cursor-pointer`}
          >
            {value.length > 0 ? `${value.length} selected` : label}
          </div>

          {open && (
            <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-600 bg-gray-900 p-2 flex flex-col gap-2">
              {options.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 text-sm text-gray-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value.includes(opt.value)}
                    onChange={() =>
                      onChange(
                        value.includes(opt.value)
                          ? value.filter((v) => v !== opt.value)
                          : [...value, opt.value]
                      )
                    }
                    className="accent-blue-500"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default MultiSelect;