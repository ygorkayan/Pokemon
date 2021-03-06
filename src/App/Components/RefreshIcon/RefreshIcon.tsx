import React, { useState } from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import styled from "styled-components";

interface IProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Temp = styled.div`
  cursor: pointer;
`;

export default function Icon(props: IProps) {
  const [flag, setFlag] = useState(0);

  function selectColor() {
    const colors = ["#022adf", "#4d1d78", "#e60014"];

    if (flag + 1 < colors.length) {
      setFlag(flag + 1);
    } else {
      setFlag(0);
    }

    return colors[flag];
  }

  return (
    <Temp>
      <RefreshIcon
        fontSize="large"
        htmlColor="#fff"
        onClick={() => props.setColor(selectColor())}
      />
    </Temp>
  );
}
