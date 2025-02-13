const pricingPlans = [
  {
    name: 'Basic Plan',
    price: 29,
    tag: 'Basic Plan',
    description: 'Beginners exploring learning',
    features: [
      { text: 'Access to basic courses', included: true },
      { text: '5 downloadable resources', included: true },
      { text: 'Email support', included: false },
      { text: 'One-on-one sessions', included: false },
      { text: 'Certification', included: false },
    ],
    buttonText: 'Buy Plan',
  },
  {
    name: 'Advance Plan',
    price: 99,
    tag: 'Popular',
    description: 'Learners growing their skills',
    features: [
      { text: 'Access to all courses & workshops', included: true },
      { text: 'Unlimited downloadable resources', included: true },
      { text: '24/7 priority support', included: true },
      { text: '5 one-on-one sessions/month', included: true },
      { text: 'Certification on completion', included: true },
    ],
    buttonText: 'Go Pro',
    isPopular: true,
  },
  {
    name: 'Standard Plan',
    price: 59,
    tag: 'Standard Plan',
    description: 'Professionals & self enthusiasts',
    features: [
      { text: 'Access to all courses', included: true },
      { text: '20 downloadable resources', included: true },
      { text: 'Priority email support', included: true },
      { text: '2 one-on-one sessions/month', included: true },
      { text: 'Certification on completion', included: true },
    ],
    buttonText: 'Choose plan',
  },
];

export default pricingPlans;