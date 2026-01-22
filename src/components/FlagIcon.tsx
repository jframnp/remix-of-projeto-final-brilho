interface FlagIconProps {
  country: 'br' | 'es' | 'us';
  className?: string;
}

const flags = {
  br: (
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <rect fill="#009B3A" width="512" height="512"/>
      <polygon fill="#FEDF00" points="256,64 480,256 256,448 32,256"/>
      <circle fill="#002776" cx="256" cy="256" r="96"/>
      <path d="M160,256 Q256,210 352,256" stroke="#FFF" strokeWidth="12" fill="none"/>
    </svg>
  ),
  es: (
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <rect fill="#AA151B" width="512" height="128"/>
      <rect fill="#F1BF00" y="128" width="512" height="256"/>
      <rect fill="#AA151B" y="384" width="512" height="128"/>
    </svg>
  ),
  us: (
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <rect fill="#B22234" width="512" height="512"/>
      <g fill="#FFF">
        <rect y="39" width="512" height="39"/>
        <rect y="118" width="512" height="39"/>
        <rect y="197" width="512" height="39"/>
        <rect y="276" width="512" height="39"/>
        <rect y="354" width="512" height="39"/>
        <rect y="433" width="512" height="39"/>
      </g>
      <rect fill="#3C3B6E" width="205" height="276"/>
    </svg>
  ),
};

export const FlagIcon = ({ country, className = "w-6 h-6" }: FlagIconProps) => {
  return (
    <span className={`inline-block rounded-sm overflow-hidden ${className}`}>
      {flags[country]}
    </span>
  );
};

export default FlagIcon;
