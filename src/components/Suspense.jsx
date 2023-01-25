import CircularProgressbar from "@mui/material/CircularProgress";
import { css } from "@emotion/react";
const SuspenseComponent = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
      `}
    >
      <CircularProgressbar />
    </div>
  );
};
export default SuspenseComponent;
