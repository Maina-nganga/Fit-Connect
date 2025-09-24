import React from 'react'
import { Check } from 'lucide-react'
export function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'monthly',
      features: [
        'Access to gym floor',
        'Standard equipment usage',
        'Locker room access',
        'Free fitness assessment',
      ],
      isPopular: false,
      buttonText: 'Choose Plan',
    },
    {
      name: 'Premium',
      price: '$59',
      period: 'monthly',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Access to all locations',
        'Free towel service',
        '1 personal training session/month',
      ],
      isPopular: true,
      buttonText: 'Choose Plan',
    },
    {
      name: 'Elite',
      price: '$99',
      period: 'monthly',
      features: [
        'Everything in Premium',
        '4 personal training sessions/month',
        'Nutrition consultation',
        'Recovery zone access',
        'Guest passes (2/month)',
      ],
      isPopular: false,
      buttonText: 'Choose Plan',
    },
  ]
  return (
    <section id="membership" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Membership Plans
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect membership plan that suits your fitness journey
            and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden ${plan.isPopular ? 'ring-2 ring-red-500 transform scale-105' : ''}`}
            >
              {plan.isPopular && (
                <div className="bg-red-500 text-white py-2 text-center font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check
                        size={20}
                        className="text-red-500 mr-2 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors ${plan.isPopular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Membership;