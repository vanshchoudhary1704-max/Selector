import React from "react";
import FormField from "./FormField";

const EmployeeDetails = ({ form, heading, formGrid, grid, label, input,options, field = "input" }) => {
  const fields = [
    { name: "Employeeid", label: "Employee ID" ,field:"input"},
    { name: "name", label: "Employee Name", field: "input" },
    { name: "designation", label: "Designation", field: "input" },
    { name: "department", label: "Department", field: "input" },
    { name: "doj", label: "Date of Joining", type: "date", field: "input" },
    { name: "pan", label: "PAN Number", field: "input" },
    { name: "phone", label: "Corporate Phone", type: "tel", field: "input" },
    { name: "email", label: "Corporate Email", type: "email", field: "input" },
    { name: "grossctc", label: "Gross CTC", type: "number", field: "input" },
  ];

  return (
    <div>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full">
        <h2 className={heading}>🏢 EMPLOYEE DETAILS</h2>

        <div className={formGrid}>
          {fields.map((f) => (
            <FormField key={f.name} form={form} gridClass={grid} labelClass={label} inputClass={input} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;