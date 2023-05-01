import React from 'react';
import { Chip } from "@mui/material";
import { CourseMeta } from "../../../../common/types/courses";

const getFormattedDate = (strDate: string) => {
  const date = new Date(strDate);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const getTags = (meta: CourseMeta) => {
  if (!meta.skills || meta.skills.length === 0) {
    return [];
  }

  return meta.skills.map((skill) => <Chip label={skill} key={skill} />);
};

export { getFormattedDate, getTags };
