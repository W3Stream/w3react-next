import React, { useContext, useEffect } from "react";
import styles from "./VideoItem.module.scss";

const VideoItem = () => {
  return (
    <div className={styles.videoItem}>
      <div className={styles.thumbnailContainer}>
        <img
          src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"
          alt="thumbnail"
          className={styles.thumbnail}
        />
        <div className={styles.videoLength}>6:42</div>
      </div>
      <div className={styles.videoDetailsContainer}>
        <div className={styles.videoChannelLogoContainer}>
          <img
            src="https://yt3.ggpht.com/a/AATXAJzODVlKqFzmj5RWCTPEkL_yEPupQnIpY-75rYTSJg=s88-c-k-c0x00ffffff-no-rj"
            alt="channel icon"
            className={styles.channelLogo}
          />
        </div>
        <div className={styles.videoDetails}>
          <h3 className={styles.videoTitle}>
            BB Ki Vines- | Kyun Sameer Kyu? |
          </h3>
          <h5 className={styles.videoChannelName}>BB Ki Vines</h5>
          <div className={styles.videoMisc}>
            <span className={styles.videoViews}>15M views</span>
            <span className={styles.videoMiscSeparator}>.</span>
            <span className={styles.videoDateOfCreation}>1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
