import { useEffect, useRef, useState } from "react";

const ScrollFetch = () => {
  const notificationListRef = useRef(null);
  const [loadMoreNotify, setLoadMoreNotify] = useState(false);

  //   const fetchDataWhenScrollBottom = () => {
  //     const elementScroll = notificationListRef.current;
  //     const elementScrollOffset = elementScroll.scrollTop;
  //     const elementScrollHeight = elementScroll.clientHeight;
  //     const scrollContentHeight = elementScroll.scrollHeight;
  //     // Tính toán nếu cuộn đến gần cuối với ngưỡng 100px
  //     if (
  //       elementScrollOffset + elementScrollHeight >=
  //       scrollContentHeight - 100
  //     ) {
  //       if (!loadMoreNotify) {
  //         setLoadMoreNotify(true); // Chỉ set true khi cần
  //       }
  //     } else {
  //       if (loadMoreNotify) {
  //         setLoadMoreNotify(false); // Set lại false khi không cần
  //       }
  //     }
  //   };

  const fetchDataWhenScrollBottom = () => {
    const elementScroll = notificationListRef.current;
    const listAllItem = document.querySelectorAll(".notification__list");
    const lastItemEle = listAllItem.length
      ? listAllItem[listAllItem.length - 1]
      : null;

    const elementScrollOffset = elementScroll.scrollTop;
    const elementScrollHeight = elementScroll.clientHeight;
    const paddingEleStr = window.getComputedStyle(elementScroll).paddingBottom;

    const paddingEleNumber = +paddingEleStr.substring(
      0,
      paddingEleStr.length - 2
    );

    const lastRowOffset =
      lastItemEle.offsetTop + lastItemEle.clientHeight + paddingEleNumber;

    console.log(
      "🚀 ~ fetchDataWhenScrollBottom ~ lastItemEle.offsetTop:",
      lastItemEle.offsetTop
    );

    if (
      lastRowOffset > Math.floor(elementScrollOffset + elementScrollHeight + 1)
    ) {
      setLoadMoreNotify(false);
    } else {
      setLoadMoreNotify(true);
    }
  };

  useEffect(() => {
    const notificationDiv = notificationListRef.current;
    notificationDiv.addEventListener("touchmove", fetchDataWhenScrollBottom);

    return () => {
      notificationDiv.removeEventListener(
        "touchmove",
        fetchDataWhenScrollBottom
      );
    };
  }, [loadMoreNotify]);

  useEffect(() => {
    if (loadMoreNotify) {
      console.log("Load more notifications...");
    }
  }, [loadMoreNotify]);

  return (
    <div
      ref={notificationListRef}
      className=""
      style={{ height: "300px", overflowY: "scroll" }}
    >
      <div className="notification__list">Notification 1</div>
      <div className="notification__list">Notification 2</div>
      <div className="notification__list">Notification 3</div>
      <div className="notification__list">Notification 4</div>
      <div className="notification__list">Notification 5</div>
      <div className="notification__list">
        Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum
        dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit
        amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem
        ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor
        sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet
        consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur
        adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing
        elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </div>
    </div>
  );
};

export default ScrollFetch;
