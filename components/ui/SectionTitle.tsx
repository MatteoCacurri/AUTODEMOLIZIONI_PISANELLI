interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-2">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-4 ${
          light ? 'text-brand-black' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-brand-gray-mid' : 'text-gray-400'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
