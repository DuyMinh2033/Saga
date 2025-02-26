import { useState, useEffect, useRef } from "react";

function useRestoreSelection() {
  const [priorSelectionInformation, setPriorSelectionInformation] =
    useState(null);
  // eslint-disable-next-line no-unused-vars
  const priorFocusedElemRef = useRef(null);

  // Lưu thông tin của phần tử input và trạng thái cuộn khi focus vào input
  const handleFocus = (event) => {
    const focusedElem = event.target;
    const selectionRange = document.getSelection().getRangeAt(0);

    const ancestors = [];
    let ancestor = focusedElem;
    while (ancestor) {
      if (ancestor.nodeType === Node.ELEMENT_NODE) {
        ancestors.push({
          element: ancestor,
          left: ancestor.scrollLeft,
          top: ancestor.scrollTop,
        });
      }
      ancestor = ancestor.parentNode;
    }

    setPriorSelectionInformation({
      focusedElem,
      selectionRange,
      ancestors,
    });
  };

  // Khôi phục trạng thái cuộn và selection khi focus trở lại
  const restoreSelection = () => {
    if (priorSelectionInformation) {
      const { focusedElem, selectionRange, ancestors } =
        priorSelectionInformation;

      const curFocusedElem = document.activeElement;
      if (
        curFocusedElem !== focusedElem &&
        focusedElem &&
        focusedElem.isConnected
      ) {
        if (selectionRange && focusedElem.setSelectionRange) {
          // Khôi phục selection nếu có
          focusedElem.setSelectionRange(
            selectionRange.startOffset,
            selectionRange.endOffset
          );
        }

        // Lưu lại các vị trí cuộn của các phần tử tổ tiên
        ancestors.forEach((info) => {
          const { element, left, top } = info;
          element.scrollLeft = left;
          element.scrollTop = top;
        });

        // Focus lại vào phần tử
        if (typeof focusedElem.focus === "function") {
          focusedElem.focus();
        }
      }
    }
  };

  // Lắng nghe sự kiện focus trên tất cả các input
  useEffect(() => {
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("focus", handleFocus);
    });

    return () => {
      document.querySelectorAll("input, textarea").forEach((input) => {
        input.removeEventListener("focus", handleFocus);
      });
    };
  }, []);

  // Hook này sẽ được gọi sau khi mỗi lần focus, ví dụ trong useEffect hoặc khi cần khôi phục trạng thái cuộn
  useEffect(() => {
    restoreSelection();
  }, [priorSelectionInformation]);

  return null; // Không cần return gì từ hook này
}

export default useRestoreSelection;
