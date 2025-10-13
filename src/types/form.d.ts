import { Dispatch, SetStateAction } from "react";

type Field = {
    value: string;
    setter: Dispatch<SetStateAction<any>>;
    type: string;
    required?: boolean;
    label?: string
  }