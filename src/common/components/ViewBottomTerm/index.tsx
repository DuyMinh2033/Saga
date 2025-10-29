/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useRef, useState } from 'react';

import BottomSheet from '../../../components/BottomSheet';
import './styles.scss';

const ViewBottomTerm = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = containerRef?.current?.getBoundingClientRect();
      const { height } = position;
      const { scrollTop, scrollHeight } = containerRef?.current;
      setDisable(!(scrollTop + height > scrollHeight));
    };
    containerRef?.current.addEventListener('scroll', handleScroll);
    return () => {
      if (containerRef?.current) {
        containerRef?.current?.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  1;

  return (
    <BottomSheet title={'view term bottom'} open={isOpen} onClose={onClose}>
      <div className="view-bottom__term" ref={containerRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni ipsam voluptatem corporis
        dignissimos enim, accusantium ut excepturi debitis omnis vel ipsum corrupti ratione
        recusandae vero obcaecati saepe atque nesciunt! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Tempore repellendus quibusdam quo, laboriosam vero voluptatem deleniti
        eaque, nobis aut facilis vel, ut totam deserunt delectus repellat nemo odio architecto
        quisquam? Quibusdam nam iusto ipsa eligendi unde at repellat ab quasi veniam deleniti,
        corporis quis molestiae consequatur similique qui sequi, natus nulla, sed iure in voluptate
        facere quo. Nisi, dolore exercitationem. Consequatur doloribus quibusdam assumenda tenetur
        laborum modi facere quam, ex accusamus ullam nulla cumque reiciendis, officia vero
        consequuntur rerum qui, pariatur tempora blanditiis quos perspiciatis est suscipit
        reprehenderit. Ducimus, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
        magni ipsam voluptatem corporis dignissimos enim, accusantium ut excepturi debitis omnis vel
        ipsum corrupti ratione recusandae vero obcaecati saepe atque nesciunt! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Tempore repellendus quibusdam quo, laboriosam vero
        voluptatem deleniti eaque, nobis aut facilis vel, ut totam deserunt delectus repellat nemo
        odio architecto quisquam? Quibusdam nam iusto ipsa eligendi unde at repellat ab quasi veniam
        deleniti, corporis quis molestiae consequatur similique qui sequi, natus nulla, sed iure in
        voluptate facere quo. Nisi, dolore exercitationem. Consequatur doloribus quibusdam assumenda
        tenetur laborum modi facere quam, ex accusamus ullam nulla cumque reiciendis, officia vero
        consequuntur rerum qui, pariatur tempora blanditiis quos perspiciatis est suscipit
        reprehenderit. Ducimus, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
        magni ipsam voluptatem corporis dignissimos enim, accusantium ut excepturi debitis omnis vel
        ipsum corrupti ratione recusandae vero obcaecati saepe atque nesciunt! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Tempore repellendus quibusdam quo, laboriosam vero
        voluptatem deleniti eaque, nobis aut facilis vel, ut totam deserunt delectus repellat nemo
        odio architecto quisquam? Quibusdam nam iusto ipsa eligendi unde at repellat ab quasi veniam
        deleniti, corporis quis molestiae consequatur similique qui sequi, natus nulla, sed iure in
        voluptate facere quo. Nisi, dolore exercitationem. Consequatur doloribus quibusdam assumenda
        tenetur laborum modi facere quam, ex accusamus ullam nulla cumque reiciendis, officia vero
        consequuntur rerum qui, pariatur tempora blanditiis quos perspiciatis est suscipit
        reprehenderit. Ducimus, quidem.
      </div>
      <div className={`btn__view ${disable && 'disable'}`}>
        <button disabled={disable} onClick={onClose}>
          Confirm
        </button>
      </div>
    </BottomSheet>
  );
};

export default ViewBottomTerm;
