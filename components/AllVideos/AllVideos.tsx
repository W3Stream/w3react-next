import React, { useContext, useEffect } from "react";
import { VideoItem } from "..";
import styles from "./AllVideos.module.scss";

const AllVideos = () => {
  return (
    <main className={styles.allVideo}>
      <div className={styles.videoCategoryContainer}>
        <h3 className={styles.videoCategory}>Category 1</h3>
        <span className={styles.videoCategorySeeMore}>See more</span>
      </div>
      <div className={styles.allVideoContainer}>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
      <div className={styles.videoCategoryContainer}>
        <h3 className={styles.videoCategory}>Category 2</h3>
        <span className={styles.videoCategorySeeMore}>See more</span>
      </div>
      <div className={styles.allVideoContainer}>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
      <div className={styles.videoCategoryContainer}>
        <h3 className={styles.videoCategory}>Category 3</h3>
        <span className={styles.videoCategorySeeMore}>See more</span>
      </div>
      <div className={styles.allVideoContainer}>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    </main>
  );
};

export default AllVideos;
