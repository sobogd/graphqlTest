import React, { SyntheticEvent } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import {
  ISelectCustomChangedValue,
  ISelectCustomOption,
  ISelectCustomProps,
} from "./types";

export const SelectCustom: React.FC<ISelectCustomProps> = ({
  label,
  options: initOptions,
  onChangeSelect,
  multiple,
  fullWidth,
  name,
  error,
}) => {
  const [activeValue, setActiveValue] = React.useState<string>("");
  const [options, setOptions] =
    React.useState<ISelectCustomOption[]>(initOptions);

  const handleAddNewValue = () => {
    setOptions([...options, { label: activeValue }]);
  };

  const handleSelectChange = (
    _: SyntheticEvent,
    changed: ISelectCustomChangedValue
  ) => {
    onChangeSelect(changed);
  };

  const sortedOptions = React.useMemo(() => {
    return options.sort((a, b) => {
      if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
      if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
      return 0;
    });
  }, [options]);

  const noOptionsText = activeValue ? (
    <Button variant="text" onClick={handleAddNewValue}>
      Добавить значение {activeValue}
    </Button>
  ) : undefined;

  const handleChangeTextField = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setActiveValue(target.value);
  };

  return (
    <>
      <Autocomplete
        fullWidth={fullWidth}
        disablePortal
        multiple={multiple}
        noOptionsText={noOptionsText}
        onChange={handleSelectChange}
        options={sortedOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            name={name}
            defaultValue={activeValue}
            onChange={handleChangeTextField}
            error={!!error}
            helperText={error}
          />
        )}
      />
    </>
  );
};
