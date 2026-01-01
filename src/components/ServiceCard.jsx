export default function ServiceCard({ title, subtitle, bullets = [], href = '#', icon }) {
  return (
    <article className="bg-white shadow-sm rounded-lg p-6 text-left">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-teal-50 text-teal-600 rounded-md">
          {icon ?? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2v20M2 12h20" stroke="#0ea5a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        </div>
      </div>

      {bullets.length > 0 && (
        <ul className="mt-4 text-sm text-gray-600 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <a href={href} className="text-teal-600 font-medium hover:underline">Learn more →</a>
      </div>
    </article>
  );
}
