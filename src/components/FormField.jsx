import React from "react";

const FormField = ({ form, name, label, type = "text", labelClass, inputClass, gridClass, field = "input", options }) => {
  const {
    register,
    formState: { errors },
  } = form;

  const rules = {
    required: "This field is required",
    ...(type === "email" && {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    }),
  };

  return (
    <div className={gridClass}>
      <div className="flex items-center justify-between mb-1">
        <label htmlFor={name} className={`${labelClass} whitespace-nowrap`}>
          {label}
        </label>
        <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-400">
          Required
        </span>
      </div>

      {field === "input" ? (
        <input id={name} type={type} placeholder={label} className={inputClass} {...register(name, rules)} />
      ) : (
        <select id={name} className={inputClass} {...register(name, rules)}>
          <option value="">{label}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {errors[name] && <p className="mt-1 text-xs text-red-400">{errors[name].message}</p>}
    </div>
  );
};

export default FormField;