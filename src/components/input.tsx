import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  label?: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  bgColor?: string;
  onChange?: any;
  required?: boolean;
  max?: number | string;
  min?: number | string;
  onBlur?: any;
};

const Input: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    register,
    name,
    validator,
    type,
    defaultValue,
    bgColor = 'bg-green/5',
    required = false,
    max,
    min,
    disabled,
    onBlur,
  } = props;

  return (
    <div className={`sm:mb-5 ${style} flex-1`}>
      {label && (
        <span className="mb-2 flex flex-row items-center gap-1 text-[12px] font-semibold text-blue">
          {label}
          {icon}
        </span>
      )}
      <input
        type={type || 'text'}
        className={`${bgColor} w-full rounded-[5px] border-blue/10 px-4 py-1 text-[14px] focus:outline-0`}
        placeholder={placeholder}
        max={max}
        min={min}
        defaultValue={defaultValue || ''}
        onChange={(e) => {
          props?.onChange?.(e?.target?.value || '');
        }}
        {...register?.(name, validator)}
        onBlur={onBlur}
        required={required}
        autoComplete="new-password"
        disabled={disabled}
      ></input>
    </div>
  );
};

export default Input;
