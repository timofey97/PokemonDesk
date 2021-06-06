import React, { useRef } from 'react';
import InputRange, { Range } from 'react-input-range';
import cn from 'classnames';

import 'react-input-range/lib/css/index.css';
import s from './Slider.module.scss';
import useDetectOutsideClick from '../DropDownFilterTypes/useDetectOutsideClick';

interface IValue {
  min: number;
  max: number;
}

interface IData {
  min: number;
  max: number;
  step: number;
  value: IValue;
  label: string;
}

interface IProps {
  data: IData;
  isActiveMenu: boolean;
  onChange: (value: Range | number, isActive: boolean) => void;
}

const Slider = (props: IProps) => {
  const { data, isActiveMenu} = props;
  const { min, max, step, value, label } = data;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, isActiveMenu);
    // eslint-disable-next-line no-shadow
  const onChange = (value: Range | number) => {
    props.onChange(value, isActive);
  };

  return (
    <div className={s.ataqueSelect}>
      <div
        role="button"
        tabIndex={0}
        className={s.selectBox}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}>
        <select>
          <option>{label}</option>
        </select>
        <div className={s.overSelect} />
      </div>
      <div ref={dropdownRef} className={cn(isActive ? s.openCB : s.closeCB, s.FromTo)}>
        <InputRange minValue={min} maxValue={max} step={step} onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Slider;
