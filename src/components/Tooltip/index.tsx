import { ReactNode, useState } from 'react';

const Tooltip = ({
  children,
  text = '',
  position = 'top',
  className = '',
}: {
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Các class cho vị trí tooltip
  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    top_right: 'bottom-full w-[200px] mb-2 left-1/2 -translate-x-1/2',
  };

  // Các class cho mũi tên
  const arrowClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2  rotate-180',
    top_right: 'bottom-full right-[5px] rotate-180',
    bottom: 'top-[-2px] left-1/2 -translate-x-1/2  rotate-180',
  };
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).slice(2, 9)}`);

  return (
    <div className="inline-block relative ">
      <div
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:bg-white after:rotate-45 after:shadow-[0px_0px_16px_0px_rgba(18,20,24,0.1607843137)"
        aria-describedby={isVisible ? tooltipId : undefined}
        tabIndex={0}
      >box-shadow: 
        {children}
      </div>

      {isVisible && (
        <>
          <div
            className={`absolute border-l-7  border-b-7 border-r-7 border-transparent  shadow-[0px_0px_16px_0px_rgba(18,20,24,0.16)] border-b-red-800 z-[100] ${arrowClasses[position]}`}
          />
          <div
            id={tooltipId}
            role="tooltip"
            className={`
              absolute pointer-events-none  m-0  
               w-max 
               max-w-[264px] 
               shadow-[0px_0px_16px_0px_rgba(18,20,24,0.16)]
               py-3 px-5
                bg-white text-black  rounded-sm text-sm break-words ${className} ${positionClasses[position]} `}
          >
            {text}
          </div>
        </>
      )}
    </div>
  );
};

export default Tooltip;
