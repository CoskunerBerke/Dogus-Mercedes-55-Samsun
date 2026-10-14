import React from 'react';

interface MercedesLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const MercedesLogo: React.FC<MercedesLogoProps> = ({
  className = 'w-9 h-9',
  variant = 'light',
}) => {
  const isLight = variant === 'light';
  const strokeColor = isLight ? '#ffffff' : '#000000';
  const primaryFill = isLight ? '#ffffff' : '#000000';
  const secondaryFacet = isLight ? '#d4d4d8' : '#3f3f46';
  const innerRingColor = isLight ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.22)';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mercedes-Benz Yıldızı"
    >
      {/* Outer Iconic Ring */}
      <circle
        cx="50"
        cy="50"
        r="45.5"
        stroke={strokeColor}
        strokeWidth="4.2"
      />
      {/* Subtle Inner Bevel Ring */}
      <circle
        cx="50"
        cy="50"
        r="42.5"
        stroke={innerRingColor}
        strokeWidth="0.9"
      />

      {/* 3-Pointed Star Base */}
      <polygon
        points="50,5.5 56.4,46.3 88.5,72.2 50,57.4 11.5,72.2 43.6,46.3"
        fill={primaryFill}
      />

      {/* Authentic 3D Facet Shading */}
      {/* Top Ray Right Facet */}
      <polygon points="50,5.5 56.4,46.3 50,50" fill={secondaryFacet} />
      {/* Bottom Right Ray Lower Facet */}
      <polygon points="50,50 88.5,72.2 50,57.4" fill={secondaryFacet} />
      {/* Bottom Left Ray Upper Facet */}
      <polygon points="50,50 11.5,72.2 43.6,46.3" fill={secondaryFacet} />
    </svg>
  );
};
