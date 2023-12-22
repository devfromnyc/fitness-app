import React from "react";
import { Box } from "@mui/material";
// import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px">
            {item}
          </Box>
        );
      })}
    </div>
  );
};

export default HorizontalScrollbar;
