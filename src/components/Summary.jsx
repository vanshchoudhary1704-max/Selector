import React from 'react'

const Summary = ({ companyData,additionalData ,employeeData}) => {

  const SummaryRow = ({ label, value }) => (
    <div className='flex justify-between items-center py-2 border-b border-gray-600 last:border-b-0'>
      <span className='text-xs text-gray-400'>{label}</span>
      <span className='text-xs font-medium text-white ml-4'>{value || '—'}</span>
    </div>
  )

  return (
    <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full'>

      <h2 className='text-blue-400 text-xs font-medium uppercase tracking-widest mb-5'>
        🌐 Summary
      </h2>

      <div className='flex flex-row gap-4'>

        <div className='flex-1 bg-gray-900 border border-gray-600 rounded-xl p-4'>
          <h3 className='text-blue-400 text-xs font-medium uppercase tracking-widest mb-3'>
            🏢 Company
          </h3>
          <SummaryRow label='Name'     value={companyData.companyname} />
          <SummaryRow label='Type'     value={companyData.companytype} />
          <SummaryRow label='Industry' value={companyData.industry} />
          <SummaryRow label='Reg. No.' value={companyData.registernumber} />
          <SummaryRow label='Email'    value={companyData.email} />
          <SummaryRow label='Phone'    value={companyData.phone} />
        </div>

        <div className='flex-1 bg-gray-900 border border-gray-600 rounded-xl p-4'>
          <h3 className='text-blue-400 text-xs font-medium uppercase tracking-widest mb-3'>
            📄 Additional
          </h3>
          <SummaryRow label='GST'       value={additionalData.gstnumber} />
          <SummaryRow label='PAN'       value={additionalData.pannumber}/>
          <SummaryRow label='TAN'       value={additionalData.tannumber} />
          <SummaryRow label='Employees' value={additionalData.No_Emp} />
          <SummaryRow label='Bank/IFSC' value={additionalData.bankaccount} />
          <SummaryRow label='Signatory' value={additionalData.signatory} />
        </div>

        <div className='flex-1 bg-gray-900 border border-gray-600 rounded-xl p-4'>
          <h3 className='text-blue-400 text-xs font-medium uppercase tracking-widest mb-3'>
            👤 Employee
          </h3>
          <SummaryRow label='Name'       value={employeeData.name} />
          <SummaryRow label='EMP ID'     value={employeeData.Employeeid} />
          <SummaryRow label='Role'       value={employeeData.designation} />
          <SummaryRow label='Department' value={employeeData.department} />
          <SummaryRow label='DOJ'        value={employeeData.doj} />
          <SummaryRow label='CTC'        value={employeeData.grossctc} />
        </div>

      </div>
    </div>
  )
}

export default Summary




