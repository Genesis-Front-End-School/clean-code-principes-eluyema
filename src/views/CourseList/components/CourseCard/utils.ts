import { CourseMeta } from "../../../../common/types/courses";

const getSkills = (meta: null | CourseMeta) => {
  if (!meta || !meta.skills) {
    return "";
  }

  return meta.skills.reduce((accumulator, currentValue, index) => {
    if (index === 0) {
      return currentValue;
    }
    return accumulator + ", " + currentValue;
  }, "");
};

export {getSkills};
