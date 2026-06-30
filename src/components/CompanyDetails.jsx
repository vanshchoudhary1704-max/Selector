import React from "react";
import FormField from "./FormField";

const CompanyDetails = ({ form, heading, formGrid, grid, label, input ,options, field = "input"}) => {
  const fields = [
    { name: "companyname", label: "Company Name", field: "input" },
    { name: "trade", label: "Trade / Brand Name", field: "input" },
    { name: "registernumber", label: "Registration Number", type: "number", field: "input" },
    { name: "companytype", label: "Company Type", field: "multiselect" ,options: [
      { value: "Private ", label: "Private Limited" },
      { value: "Public ", label: "Public Limited" },
      { value: "Partnership", label: "Partnership" },
      { value: "Sole Proprietorship", label: "Sole Proprietorship" },
      { value: "Limited Liability Partnership (LLP)", label: "Limited Liability Partnership (LLP)" },
    ]},
    { name: "industry", label: "Industry / Sector", field: "select", options: [
      { value: "Technology", label: "Technology" },
      { value: "Healthcare", label: "Healthcare" },
      { value: "Finance", label: "Finance" },
    ]},
    { name: "doi", label: "Date of Incorporation", type: "date", field: "input" },
    { name: "address", label: "Registered Address", field: "input" },
    { name: "phone", label: "Corporate Phone", type: "tel", field: "input" },
    { name: "email", label: "Corporate Email", type: "email", field: "input" },
    { name: "website", label: "Website", type: "url", field: "input" },
  ];

  return (
    <div>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full">
        <h2 className={heading}>🏢 COMPANY DETAILS</h2>

        <div className={formGrid}>
          {fields.map((f) => (
            <FormField key={f.name} form={form} gridClass={grid} labelClass={label} inputClass={input} {...f}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;