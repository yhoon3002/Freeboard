import { useState } from "react";

import { Rate } from "antd";

const LibraryStarPage = () => {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };
  return (
    <div>
      <Rate onChange={handleChange} value={value} />
    </div>
  );
};

export default LibraryStarPage;
