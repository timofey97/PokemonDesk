import React, { useRef } from 'react';
import cn from 'classnames';

import s from './DropdownMenu.module.scss';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import useDetectOutsideClick from './useDetectOutsideClick';

interface IDropdown {
  types: string[] | null;
  onToggle: any;
  isActiveMenu: boolean;
}
const DropdownMenu: React.FC<IDropdown> = ({ ...props }) => {
  const { types, onToggle, isActiveMenu } = props;
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, isActiveMenu);

  return (
    <>
      <div className={s.typeSelect}>
        <div
          role="button"
          tabIndex={0}
          className={s.selectBox}
          onClick={() => setIsActive(!isActive)}
          onKeyDown={() => setIsActive(!isActive)}>
          <select>
            <option>Tipo</option>
          </select>
          <div className={s.overSelect} />
        </div>
        <div ref={dropdownRef} className={cn(isActive ? s.openCB : s.closeCB, s.checkboxes)}>
          {types?.map((typeOne) => (
            <label htmlFor={typeOne} key={typeOne}>
              <input type="checkbox" id={typeOne} onClick={() => onToggle(typeOne, isActive)} />
              {toCapitalizeFirstLetter(typeOne)}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(DropdownMenu);
