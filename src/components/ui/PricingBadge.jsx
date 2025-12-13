const PricingBadge = ({ price, currency = 'INR', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  return (
    <div className="inline-flex items-center space-x-1">
      <span className={`text-white/60 ${sizeClasses[size]}`}>{currency}</span>
      <span className={`text-primary-300 font-bold ${sizeClasses[size]}`}>
        {price.toLocaleString()}
      </span>
    </div>
  )
}

export default PricingBadge

