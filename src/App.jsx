import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from './components/Select'
import CompanyDetails from './components/CompanyDetails'
import AdditionalDetails from './components/AdditionalDetails'
import EmployeeDetails from './components/EmployeeDetails'
import Summary from './components/Summary'
import { DevTool } from "@hookform/devtools";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const companyForm = useForm()
  const additionalForm = useForm()
  const employeeForm = useForm()

  const classes = {
    heading : 'text-blue-400 text-xs font-medium uppercase tracking-widest mb-6',
    formGrid: 'grid grid-cols-3 gap-5',
    grid    : 'flex flex-col gap-2',
    label   : 'text-xs text-gray-400',
    input   : 'bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500',
  }

  const isCompanyValid = companyForm.formState.isValid
  const isAdditionalValid = additionalForm.formState.isValid
  const isEmployeeValid = employeeForm.formState.isValid

  const stepForms = { 1: companyForm, 2: additionalForm, 3: employeeForm }

  const handleNext = async () => {
    const form = stepForms[currentStep]
    if (form) {
      const valid = await form.trigger() 
      if (!valid) return
    }
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }

  return (
    <div className='min-h-screen bg-gray-950 px-10 py-8 '>

      <Select currentStep={currentStep} setCurrentStep={setCurrentStep} isAdditionalValid={isAdditionalValid} isEmployeeValid={isEmployeeValid} isCompanyValid={isCompanyValid} />

      <div className='w-full max-w-4xl mx-auto mt-6 '>

        {currentStep === 1 &&
          <CompanyDetails {...classes} form={companyForm} />}
        {currentStep === 2 &&
          <AdditionalDetails {...classes} form={additionalForm} />}
        {currentStep === 3 &&
          <EmployeeDetails {...classes} form={employeeForm} />}
        {currentStep === 4 &&
          <Summary
            companyData={companyForm.getValues()}
            additionalData={additionalForm.getValues()}
            employeeData={employeeForm.getValues()}
            isAdditionalValid={isAdditionalValid}
            isEmployeeValid={isEmployeeValid}
            isCompanyValid={isCompanyValid}
          />}

        <div className='flex gap-3 mt-1 '>
          <button
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
            disabled={currentStep === 1}
            className='px-5 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition'>
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === 4}
            className='px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition'>
            {currentStep === 3 ? 'View Summary →' : 'Next →'}
          </button>
          <DevTool control={companyForm.control} />
          <DevTool control={additionalForm.control} />
          <DevTool control={employeeForm.control} />
        </div>

      </div>

    </div>
  )
}

export default App