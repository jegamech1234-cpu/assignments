```js
import React, { useState } from "react";

const ShowHideComponent = () => {
  const [visible, setVisible] = useState(true);

  const toggleContent = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleContent}>
        {visible ? "Hide" : "Show"} Content
      </button>

      {visible && (
        <p style={{ marginTop: "10px" }}>
          This is the content that can be shown or hidden.
        </p>
      )}
    </div>
  );
};

export default ShowHideComponent;
```
