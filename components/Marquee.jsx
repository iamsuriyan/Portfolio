'use client';

export default function Marquee({ items, speed = 30, className = '' }) {
  const content = items.join('  ·  ');
  const repeated = `${content}  ·  ${content}  ·  `;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-block animate-marquee"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <span className="inline-block pr-4">{repeated}</span>
        <span className="inline-block pr-4">{repeated}</span>
      </div>
    </div>
  );
}
