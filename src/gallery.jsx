import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types, react/display-name
const Gallery = forwardRef(({ setOpen, open }, ref) => {
  const [value, setValue] = useState();
  const [target, setTarget] = useState();

  const showModal = () => {
    setValue(undefined);
    setOpen(true);
  };

  const items = [
    "https://via.assets.so/img.jpg?tc=red",
    "https://via.assets.so/img.jpg?tc=blue",
    "https://via.assets.so/img.jpg?tc=green",
    "https://via.assets.so/img.jpg?tc=yellow",
  ];

  useImperativeHandle(
    ref,
    () => {
      return {
        target,
        value,
        showModal,
        setValue,
        setTarget,
      };
    },
    [value, target]
  );

  return (
    open && (
      <div className="gallery">
        <ul>
          {items.map((item) => (
            <li key={item}>
              <img src={item} />
              <button
                onClick={() => {
                  setValue(item);
                  setOpen(false);
                }}
              >
                select
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
});
export default Gallery;
