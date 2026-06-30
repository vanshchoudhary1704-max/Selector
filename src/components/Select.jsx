import React from 'react'

const Select = ({ currentStep, setCurrentStep ,canGoNext,isCompanyValid,isAdditionalValid,isEmployeeValid}) => {

  const steps = [
    { id: 1, label: 'Company Details'    },
    { id: 2, label: 'Additional Details' },
    { id: 3, label: 'Employee Details'   },
    { id: 4, label: 'Summary'            },
  ]

  return (
    <div className='flex items-center w-200 ml-50 justify-center py-5 border border-gray-600 rounded-4xl'>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>

          <button
            onClick={() => setCurrentStep(step.id)}
            disabled={
              (step.id === 2 && !isCompanyValid) ||
              (step.id === 3 && !isAdditionalValid) ||
              (step.id === 4 && !isEmployeeValid)
            }
            className='flex flex-col items-center cursor-pointer gap-2 '>

            
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-600
              ${currentStep === step.id
                ? 'bg-blue-500 border-blue-500 text-white'
                : currentStep > step.id
                ? 'bg-blue-500 border-blue-500 text-white'
                : 'bg-transparent border-gray-600 text-gray-500'
              }`}>
              {step.id}
            </div>

            
            <span className={`text-xs whitespace-nowrap transition-all duration-300
              ${currentStep === step.id
                ? 'text-blue-400 font-medium'
                : currentStep > step.id
                ? 'text-blue-400'
                : 'text-gray-600'
              }`}>
              {step.label}
            </span>

          </button>

     
          {index < steps.length - 1 && (
            <div className={`h-0.5 w-32 mb-6 transition-all duration-500
              ${currentStep > step.id ? 'bg-blue-500' : 'bg-gray-700'}`}
            />
          )}

        </React.Fragment>
      ))}
    </div>
  )
}

export default Select



