import React from "react";
import { useRouter } from "next/router";

import CardDetails from "@/components/CardDetails/CardDetails";

import styles from "./room.module.scss";

const Room = () => {
  const router = useRouter();
  const place = router.query;

  return (
    <div className={styles.room}>
      <CardDetails place={place} />
    </div>
  );
};

export default Room;
