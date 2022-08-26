import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOnSelect, setOnSelectAll } from '../../redux/modules/gallerySlice';
import cn from 'classnames';
import styled from 'styled-components';
import { IconBack, IconClose } from '../../assets/icons';

const HeaderMid = ({ text, select }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { onSelect, onSelectAll } = useSelector((state) => state.gallery);

  return (
    <HeaderContainer>
      {onSelect ? (
        <BtnBack
          onClick={() => {
            dispatch(setOnSelect(false));
            dispatch(setOnSelectAll(false));
          }}
        >
          <IconClose />
          <span>취소</span>
        </BtnBack>
      ) : (
        <>
          <BtnBack type="button" onClick={() => navigate(-1)} className="back">
            <IconBack />
          </BtnBack>
          {text}
        </>
      )}

      {select &&
        (onSelect ? (
          <BtnSelect
            type="button"
            className={cn('all', onSelectAll && 'selected')}
            onClick={() => dispatch(setOnSelectAll(!onSelectAll))}
          >
            전체선택
          </BtnSelect>
        ) : (
          <BtnSelect type="button" onClick={() => dispatch(setOnSelect(true))}>
            선택
          </BtnSelect>
        ))}
    </HeaderContainer>
  );
};

HeaderMid.propTypes = {
  text: PropTypes.string.isRequired,
  select: PropTypes.bool,
};

export default HeaderMid;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 55px;
  padding: 19px 0 15px;
  border-bottom: 2px solid #f2f2f2;
  background: #fff;
  text-align: center;
  font-weight: 700;
  z-index: 50;
`;

const BtnBack = styled.button`
  position: absolute;
  top: 7px;
  left: 5px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  svg {
    margin-right: 2px;
    cursor: pointer;
  }
  &.back svg {
    margin-top: 2px;
  }
  span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 700;
  }
`;

const BtnSelect = styled.button`
  position: absolute;
  top: 17px;
  right: 15px;
  padding: 3px 13px;
  border-radius: 57px;
  background: #3c3c3c;
  color: #fff;
  font-size: 14px;
  &.all {
    background: transparent;
    color: #3c3c3c;
    &.selected {
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: 700;
    }
  }
`;