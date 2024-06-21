export type DropdownOption = {
  label: string;
  value: string;
};

export type DropDownProps = {
  items: Array<DropdownOption>;
  onSelect: (item: string) => void;
  selectedItem?: string;
  placeholder?: string;
  label?: string;
  labelStyle?: any;
  inputStyle?: any;
  containerStyle?: any;
  creatable?: boolean;
};
