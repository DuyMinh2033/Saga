import { IoMdClose } from 'react-icons/io';

const TailWindCss = ({ open, children, title, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-end bg-black/30 transition-all duration-300 ease-linear ${
        open ? 'animate-fade-in' : 'animate-fade-out'
      }`}
    >
      <div
        className={`w-full px-6 bg-white rounded-t-2xl transform  ${
          open ? 'animate-slide-up' : 'animate-slide-down'
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <p className="flex-grow font-medium text-gray-900 text-lg">{title}</p>
          <button
            onClick={onClose}
            className="h-10 w-10 grid place-content-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );
};

export default TailWindCss;
