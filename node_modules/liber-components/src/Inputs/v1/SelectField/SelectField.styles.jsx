import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AutoSizer, List as ListRaw } from 'react-virtualized';
import { handleThemeFromObject, hexToRgb } from '../../../Themes';
import { disableOnTest } from '../../../Util/css';

export const SelectBox = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 8px 0px;
  border-bottom: 2px solid ${props => handleThemeFromObject(props.theme, 'fields.inactive', '#e6e6e6')} !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }
`;

const itemHeight = 35;

export const OptionList = styled(ListRaw)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #fafafa !important;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  z-index: 5;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  overflow-y: auto;
  user-select: none;
  transform-origin: top;
  ${disableOnTest`transition: all 300ms ease;`}
  ${props => (props.open
    ? css`
      opacity: 1;
      transform: scaleY(1);
    `
    : css`
      opacity: 0;
      transform: scaleY(0);
    `
  )}

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }
`;

export const SearchableOptionList = styled(OptionList)`
  top: 42px;
`;

const getSelectItemBackgroundColor = (theme, selected, focused) => {
  if (focused) return handleThemeFromObject(theme, 'fields.select.focused', '#009DFF');
  if (selected) return handleThemeFromObject(theme, 'fields.select.selected', '#e6e6e6');
  return handleThemeFromObject(theme, 'fields.select.default', '#fafafa');
};

const getSelectItemColor = (theme, selected, focused, disabled) => {
  if (disabled) return handleThemeFromObject(theme, 'fields.disabled', hexToRgb('#a4a4a4', '0.3'));
  if (focused) return handleThemeFromObject(theme, 'fields.hover', '#ffffff');
  if (selected) return handleThemeFromObject(theme, 'fields.primary', '#009DFF');
  return handleThemeFromObject(theme, 'fields.secondary', '#a4a4a4');
};

const getSelectItemHighlightColor = (theme, focused) => {
  if (focused) return handleThemeFromObject(theme, 'fields.hover', '#ffffff');
  return handleThemeFromObject(theme, 'fields.primary', '#009DFF');
};

const getSelectLabelBackgroundColor = (theme, selected, focused) => {
  if (focused) return handleThemeFromObject(theme, 'fields.select.focused', '#009DFF');
  if (selected) return handleThemeFromObject(theme, 'fields.select.selected', '#e6e6e6');
  return handleThemeFromObject(theme, 'fields.select.label.background', '#e6e6e6');
};

export const SelectItem = styled.div`
  line-height: ${(itemHeight * 2) / 3}px;
  text-align: left;
  padding: 8px 10px;
  box-sizing: border-box;
  vertical-align: middle;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => getSelectItemBackgroundColor(props.theme, props.selected, props.focused)};
  user-select: none;
  font-weight: 500;
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};

  & div {
    color: ${props => getSelectItemColor(props.theme, props.selected, props.focused, props.disabled)} !important;
    & > span { color: ${props => getSelectItemHighlightColor(props.theme, props.focused, '#009dff')}; }
  }
`;

export const SelectLabel = styled(SelectItem)`
  background-color: ${props => getSelectLabelBackgroundColor(props.theme, props.selected, props.focused)};
`;

export const SelectOptionList = ({
  id, children, optionLabel, itemFocused, rowRenderer, searchable, isOpen,
}) => {
  const ListComponent = searchable ? SearchableOptionList : OptionList;
  return (
    <AutoSizer>
      {
        ({ width }) => (
          <ListComponent
            id={id}
            list={children}
            optionLabel={optionLabel}
            itemFocused={itemFocused}
            width={width || 300}
            height={(children.length < 5 ? children.length * itemHeight : 5 * itemHeight)}
            rowCount={children.length}
            rowHeight={itemHeight}
            rowRenderer={rowRenderer}
            scrollToIndex={itemFocused}
            open={isOpen}
            tabIndex={-1}
          />
        )
      }
    </AutoSizer>
  );
};

SelectOptionList.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]),
  rowRenderer: PropTypes.func.isRequired,
  optionLabel: PropTypes.string,
  itemFocused: PropTypes.number,
  searchable: PropTypes.bool,
  isOpen: PropTypes.bool,
};

SelectOptionList.defaultProps = {
  children: [],
  optionLabel: '',
  itemFocused: -1,
  searchable: false,
  isOpen: false,
};
