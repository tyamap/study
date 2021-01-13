import { useState } from "react";

type Props = {
  setTags: any;
  formKey: string;
  tags: { name: string, key: string }[]
};
const TagForm = (props: Props) => {
  const handleChange = (event: any) => {
  };

  return (
    <>
      <span>タグ</span>
      <input type="text" key={props.formKey} name="tags" onChange={handleChange} />
    </>
  );
};

export default TagForm;
