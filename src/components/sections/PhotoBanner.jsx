export default function PhotoBanner({ text, subtext }) {
  return (
    <div className="photo-banner">
      <div className="photo-banner-overlay">
        <div className="photo-banner-text">
          <h2>
            {text}<br /><em>{subtext}</em>
          </h2>
        </div>
      </div>
    </div>
  )
}
