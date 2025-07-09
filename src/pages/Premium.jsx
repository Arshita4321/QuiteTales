import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Premium = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: '$0',
      yearlyPrice: '$0',
      features: [
        'Basic task management',
        'Personal calendar',
        'Task reminders',
        'Collaboration with 3 team members',
        'Limited file storage (up to 1 GB)',
        'Access to mobile and desktop apps',
      ],
      borderColor: 'border-green-200',
      icon: 'fa-tasks',
      gradient: 'from-green-500 to-blue-400',
    },
    {
      name: 'Pro',
      monthlyPrice: '$30',
      yearlyPrice: '$300',
      features: [
        'Advanced task management',
        'Shared team calendar',
        'Unlimited team collaboration',
        '50 GB file storage',
        'Priority customer support',
        'Integrations with popular apps',
      ],
      borderColor: 'border-purple-500',
      icon: 'fa-rocket',
      gradient: 'from-purple-500 to-blue-400',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      features: [
        'Custom solutions',
        'Unlimited file storage',
        'Advanced security',
        'Detailed analytics',
        'Dedicated account manager',
        '24/7 premium support',
      ],
      borderColor: 'border-pink-400',
      icon: 'fa-cogs',
      gradient: 'from-pink-500 to-indigo-500',
    },
  ];

  const faqs = [
    { question: 'Can I cancel my subscription?', answer: 'Yes, you can cancel anytime through your dashboard settings.' },
    { question: 'How do I get my subscription receipt?', answer: 'Receipts are emailed monthly and available in your billing section.' },
    { question: 'Which payment methods do you accept?', answer: 'We accept credit cards, PayPal, and more.' },
    { question: 'Are there any discounts for people in need?', answer: 'Yes! We offer educational and nonprofit discounts.' },
    { question: 'How can I manage my Account?', answer: 'You can manage your account settings via the dashboard.' },
    { question: 'Do you offer a free trial edit?', answer: 'Yes, a 7-day free trial is available on the Pro plan.' },
    { question: 'Is my credit card information secure?', answer: 'We use Stripe and follow strict PCI compliance.' },
    { question: 'How do I reset my Account password?', answer: 'Click on "Forgot Password?" at login to reset securely.' },
  ];

  const features = [
    {
      title: '24/7 Support',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.',
      icon: 'fa-phone-alt',
      gradient: 'from-green-500 to-blue-400',
    },
    {
      title: 'Daily Updates',
      description: 'Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.',
      icon: 'fa-briefcase',
      gradient: 'from-purple-500 to-blue-400',
    },
    {
      title: 'Market Research',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.',
      icon: 'fa-chart-line',
      gradient: 'from-pink-500 to-indigo-500',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Pricing</h1>
        <p className="text-gray-500 text-lg mb-8">
          Do more impactful work with a privacy-first calendar that plugs<br />into all your apps at work.
        </p>

        {/* Toggle Buttons */}
        <div className="inline-flex bg-gray-200 rounded-full mb-12">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium focus:outline-none ${isMonthly ? 'bg-white text-gray-900 shadow' : 'text-gray-600'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium focus:outline-none ${!isMonthly ? 'bg-white text-gray-900 shadow' : 'text-gray-600'}`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-sm p-6 ${plan.borderColor} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`bg-gradient-to-br ${plan.gradient} p-2 rounded-full`}>
                    <i className={`fas ${plan.icon} text-white`}></i>
                  </div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.isPopular && (
                    <span className="ml-auto text-xs text-purple-600 bg-purple-100 rounded-full px-2 py-0.5 font-medium">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {plan.name === 'Basic Plan'
                    ? 'Perfect for individuals or small teams looking to stay organized with basic features.'
                    : plan.name === 'Pro'
                    ? 'Ideal for growing teams needing more robust tools and integrations.'
                    : 'Designed for businesses requiring comprehensive, scalable management tools.'}
                </p>
                <p className="text-3xl font-bold mb-1">
                  {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}{' '}
                  <span className="text-base font-normal text-gray-500">
                    {isMonthly ? 'per month.' : 'per year.'}
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">
                        <i className="fas fa-check"></i>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 w-full py-2 rounded-md font-medium transition ${
                  plan.name === 'Basic Plan'
                    ? 'bg-gradient-to-r from-green-500 to-blue-400 text-white hover:bg-gray-200'
                    : plan.name === 'Pro'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-400 text-white hover:opacity-90'
                    : 'bg-gradient-to-br from-pink-500 to-indigo-500 text-white hover:bg-blue-700'
                }`}
              >
                {plan.name === 'Basic Plan' ? 'Start for free' : plan.name === 'Pro' ? 'Get Pro' : 'Get Enterprise'}
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section className="bg-white py-16 px-4 mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-full`}>
                      <i className={`fas ${feature.icon} text-white`}></i>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                  <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
            <p className="text-gray-500 text-sm mb-10">
              If you don’t see an answer to your question, you can send us an{' '}
              <a href="#" className="text-blue-600 hover:underline">email</a> from our contact form.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-800">
                      {faq.question}
                      <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Premium;