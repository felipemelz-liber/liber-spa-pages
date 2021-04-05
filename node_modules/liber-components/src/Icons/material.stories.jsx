import React from 'react';
import {
  MdHelpCircle,
  MdMoreVert,
  MdAttachMoney,
  MdDescription,
  MdChevronRight,
  MdChevronLeft,
  MdChevronDown,
  MdChevronUp,
  MdClose,
  MdAlertCircle,
  MdCloseCircle,
  MdCheckCircle,
  MdPlus,
  MdFile,
  MdCamera,
  MdCheck,
  MdCheckAll,
  MdDownload,
  MdInformation,
  MdFilterOutline,
  MdMenu,
  MdMagnify,
  MdWhatsApp,
  MdPhone,
  MdEmailOutline,
  MdImage,
  MdBroom,
  MdEye,
  MdEdit,
  MdDelete,
  MdFinance,
} from './MaterialDesign';

export default {
  title: 'UI|Icons/Material Design',
  parameters: {
    jest: ['MaterialDesignIcons'],
  },
};

export const helpCircle = () => <MdHelpCircle />;

helpCircle.story = {
  name: 'help-circle',
};

export const moreVert = () => <MdMoreVert />;

moreVert.story = {
  name: 'more-vert',
};

export const attachMoney = () => <MdAttachMoney />;

attachMoney.story = {
  name: 'attach-money',
};

export const description = () => <MdDescription />;
export const chevronRight = () => <MdChevronRight />;

chevronRight.story = {
  name: 'chevron-right',
};

export const chevronLeft = () => <MdChevronLeft />;

chevronLeft.story = {
  name: 'chevron-left',
};

export const chevronDown = () => <MdChevronDown />;

chevronDown.story = {
  name: 'chevron-down',
};

export const chevronUp = () => <MdChevronUp />;

chevronUp.story = {
  name: 'chevron-up',
};

export const close = () => <MdClose />;
export const alertCircle = () => <MdAlertCircle />;

alertCircle.story = {
  name: 'alert-circle',
};

export const closeCircle = () => <MdCloseCircle />;

closeCircle.story = {
  name: 'close-circle',
};

export const checkCircle = () => <MdCheckCircle />;

checkCircle.story = {
  name: 'check-circle',
};

export const plus = () => <MdPlus />;
export const file = () => <MdFile />;
export const camera = () => <MdCamera />;
export const check = () => <MdCheck />;
export const download = () => <MdDownload />;
export const information = () => <MdInformation />;
export const filterOutline = () => <MdFilterOutline />;

filterOutline.story = {
  name: 'filter-outline',
};

export const checkAll = () => <MdCheckAll />;

checkAll.story = {
  name: 'check-all',
};

export const menu = () => <MdMenu />;
export const magnify = () => <MdMagnify />;
export const whatsApp = () => <MdWhatsApp />;
export const phone = () => <MdPhone />;
export const emailOutline = () => <MdEmailOutline />;

emailOutline.story = {
  name: 'email-outline',
};

export const image = () => <MdImage />;
export const broom = () => <MdBroom />;

export const eye = () => <MdEye />;
export const edit = () => <MdEdit />;
export const Delete = () => <MdDelete />;
export const finance = () => <MdFinance />;
