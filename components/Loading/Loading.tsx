import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loading}>
      <BounceLoader size={150} color={"#fff"} loading={true} />
    </div>
  );
}

export default Loading;
