import { ComponentProps, useState } from 'react';
import './styles.scss';
import { tv, VariantProps } from 'tailwind-variants';
import { Button } from '@/components/ui/button';
import TailWindCss from '@/components/TailwindCss';
import ToolTip from '@/components/Tooltip';
import Tooltip from '@/components/Tooltip';

const button = tv({
  base: [
    'px-4 py-2 rounded-md',
    'font-medium',
    'transition-colors',
    'focus:outline-none focus:ring-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],

  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
      secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
      ghost: 'hover:bg-gray-100 focus:ring-gray-200',
      link: 'text-blue-600 underline hover:text-blue-700',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

const Demo: React.FC = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <Button variant={'outline'} size={'lg'} onClick={() => setState(true)}>
        Button
      </Button>
      <div className="p-8 flex gap-8 justify-center items-center flex-col">
        {/* Top Tooltip */}
        <Tooltip
          text="Top tooltip  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla id quo eius modi earum"
          position="top"
        >
          <button className="btn">Hover Top</button>
        </Tooltip>
        {/* Bottom Tooltip */}
        <Tooltip text="Bottom tooltip" position="bottom">
          <button className="btn">Hover Bottom</button>
        </Tooltip>
        {/* Left Tooltip */}
        <Tooltip text="Left tooltip" position="left">
          <button className="btn">Hover Left</button>
        </Tooltip>
        {/* Right Tooltip */}
        <Tooltip text="Right tooltip" position="right">
          <button className="btn">Hover Right</button>
        </Tooltip>
        <Tooltip text="Top Right" position="top_right">
          <button className="btn">Top Right</button>
        </Tooltip>
        {/* <div className="border-l-7 border-b-7 border-r-7 border-transparent border-b-gray-600 border-t-8"></div>
        <div className="relative bg-gray-800 text-white p-2.5 rounded-lg w-fit">
          Tooltip content
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 rotate-180 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800"></div>
        </div>
        <div className="relative bg-gray-800 text-white p-2.5 rounded-lg shadow-xl w-fit">
          Tooltip content
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800 
              before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black/10"
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Demo;
