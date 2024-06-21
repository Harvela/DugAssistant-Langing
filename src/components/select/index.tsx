import React, { useEffect, useState } from 'react';
import NormalReactSelect from 'react-select';
import ReactSelect from 'react-select/creatable';

import type { DropDownProps } from './types';

const Select: React.FC<DropDownProps> = (props) => {
  const [newOptions, setNewOptions] = React.useState<any[]>([]);
  const ref = React.useRef<any>(null);
  const [selectedOption, setSelectedOption] = React.useState<any>(
    props.items.find((item) => item.value === props.selectedItem),
  );
  const [clickedOption, setClickedOption] = useState<any>();
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    setSelectedOption(clickedOption);
    props.onSelect(clickedOption?.value || '');
  }, [clickedOption]);

  return (
    <div className={props.containerStyle}>
      <p className="font-regular mb-2 text-sm text-white md:mb-6 md:text-lg">
        {props.label}
      </p>
      {props.creatable ? (
        <ReactSelect
          onChange={(e) => {
            setClickedOption(e);
            // @ts-ignore
            if (props.items.find((item) => item.value === e?.value || '')) {
              setInputValue('');
              setNewOptions([]);
            }
            props.onSelect(e?.value || '');
            setSelectedOption(e);
          }}
          value={selectedOption}
          ref={ref}
          styles={{
            control: (base: any) => ({
              ...base,
              borderRadius: 5,
              borderColor: '#000',
            }),
            container: (base: any) => ({
              ...base,
              borderRadius: 5,
              borderColor: '#000',
            }),
          }}
          placeholder={props.placeholder}
          options={[...props.items, ...newOptions]}
          className={`rounded-[5px] ${props.containerStyle}`}
          onCreateOption={(e) => {
            setClickedOption({ label: e, value: e });
            setNewOptions([...newOptions, { label: e, value: e }]);
            // @ts-ignore
            props.onSelect(e);
            setSelectedOption({ label: e, value: e });
          }}
          onInputChange={(e, { action }) => {
            console.log(action);
            if (action !== 'input-blur' && action !== 'menu-close') {
              setInputValue(e);
            }

            if (action === 'menu-close') {
              if (inputValue && !clickedOption) {
                setNewOptions([...newOptions, { label: inputValue, value: e }]);
                // @ts-ignore
                props.onSelect(inputValue);
                setSelectedOption({ label: inputValue, value: e });
              } else {
                setSelectedOption(clickedOption);
              }
            }
          }}
          inputValue={inputValue}
          // blurInputOnSelect={true}
          formatCreateLabel={(userInput) => `Selectionner: ${userInput}`}
        />
      ) : (
        <NormalReactSelect
          onChange={(e) => {
            // @ts-ignore
            props.onSelect(e.value);
            setSelectedOption(e);
          }}
          value={selectedOption}
          ref={ref}
          styles={{
            control: (base: any) => ({
              ...base,
              borderRadius: 10,
              borderColor: '#FFF',
              backgroundColor: 'none',
              padding: 6,
            }),
            container: (base: any) => ({
              ...base,
              borderRadius: 10,
              borderColor: '#FFF',
            }),
          }}
          placeholder={props.placeholder}
          options={[...props.items, ...newOptions]}
          className={`rounded-[10px] ${props.containerStyle}`}
          defaultValue={props.items.find(
            (item) => item.value === props.selectedItem,
          )}
        />
      )}
    </div>
  );
};

export default Select;
