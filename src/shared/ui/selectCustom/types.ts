export type ISelectCustomOption = { id?: string | number; label: string };

export type ISelectCustomChangedValue =
  | ISelectCustomOption[]
  | ISelectCustomOption
  | null;

export type ISelectCustomProps = {
  label: string;
  options: ISelectCustomOption[];
  onChangeSelect: (values: ISelectCustomChangedValue) => void;
  multiple?: boolean;
  fullWidth?: boolean;
  name: string;
  error?: string;
};
