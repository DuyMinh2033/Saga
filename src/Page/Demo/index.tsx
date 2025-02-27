import { ComponentProps, useState } from 'react';
import './styles.scss';
import { tv, VariantProps } from 'tailwind-variants';
import { Button } from '@/components/ui/button';
import TailWindCss from '@/components/TailwindCss';

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

// export const Button = ({ variant, size, className, children, ...props }: ButtonProps) => {
//   return (
//     <button className={button({ variant, size, className })} disabled {...props}>
//       {children}
//     </button>
//   );
// };

const Demo: React.FC = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Button variant={'outline'} size={'lg'} onClick={() => setState(true)}>
        Button
      </Button>
      <TailWindCss open={state} onClose={() => setState(false)}>
        <div className="h-[300px] bg-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis accusantium laborum
          praesentium, libero dignissimos eveniet totam laboriosam quos! Earum sapiente debitis
          quisquam quae obcaecati quas unde sequi repudiandae cum maxime!
        </div>
      </TailWindCss>
    </div>
  );
};

export default Demo;
