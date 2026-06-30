import React from "react";
import FormField from "./FormField";

const AdditionalDetails = ({ form, heading, formGrid, grid, label, input ,options, field = "input"}) => {
  const fields = [
    { name: "gstnumber", label: "GST Number" ,field: "input"},
    { name: "pannumber", label: "PAN Number", field: "input" },
    { name: "tannumber", label: "Tan Number", type: "number", field: "input" },
    { name: "No_Emp", label: "Number of Employees", field: "input" },
    { name: "bankaccount", label: "Bank Account Number", type: "number", field: "input" },
    { name: "ifscode", label: "IFSC Code", field: "input" },
    { name: "signatory", label: "Authorized Signatory", field: "input" },
    { name: "annual turnover", label: "Annual Turnover", type: "number", field: "input" },
  ];

  return (
    <div>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full">
        <h2 className={heading}>🏢 ADDITIONAL DETAILS</h2>

        <div className={formGrid}>
          {fields.map((f) => (
            <FormField key={f.name} form={form} gridClass={grid} labelClass={label} inputClass={input} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;