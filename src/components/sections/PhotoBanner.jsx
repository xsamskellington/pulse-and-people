export default function PhotoBanner({ text, subtext }) {
  const defaultClassName = 'banner'

  return (
    <div className={defaultClassName}>
      <div className={`${defaultClassName}__overlay`}>
        <div className={`${defaultClassName}__text`}>
          <h2>
            {text}<br /><em>{subtext}</em>
          </h2>
        </div>
      </div>
    </div>
  )
}
