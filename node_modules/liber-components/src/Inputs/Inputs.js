import { wrapper } from '../Util/VersionWrapper';
// import V1Checkbox from './v1/Checkbox';
// import V1LabeledContainer from './v1/LabeledContainer';
import V1SelectField from './v1/SelectField';
import V1TextField from './v1/TextField';
// import V1RadioButton from './v1/RadioButton';
// import V1RangeField from './v1/RangeField';
// import V1SelectMultiple from './v1/SelectMultiple';

import { TextField as V2TextField } from './v2/InputField';
import V2SelectField from './v2/SelectField';
// import V2DatePicker from './v2/DatePicker';
// import V2DateRangePicker from './v2/DateRangePicker';
// import V2TimePicker from './v2/TimePicker';

export { default as Checkbox } from './v1/Checkbox';
export { default as LabeledContainer } from './v1/LabeledContainer';
export { default as RadioButton } from './v1/RadioButton';
export { default as RangeField } from './v1/RangeField';
export { default as SelectMultiple } from './v1/SelectMultiple';

export { default as SimpleSelect } from './v2/SimpleSelect';
export { default as DatePicker } from './v2/DatePicker';
export { default as DateRangePicker } from './v2/DateRangePicker';
export { default as TimePicker } from './v2/TimePicker';
export { default as DateTimePicker } from './v2/DateTimePicker';
export { default as DateTimeRangePicker } from './v2/DateTimeRangePicker';
export { default as TextArea } from './v2/TextArea';
export { default as MonthSelect } from './v2/MonthSelect/MonthSelect';
export { NumberField } from './v2/InputField';

// export const Checkbox = wrapper([V1Checkbox]);
// export const LabeledContainer = wrapper([V1LabeledContainer]);
export const SelectField = wrapper([V1SelectField, V2SelectField]);
export const TextField = wrapper([V1TextField, V2TextField]);
// export const RadioButton = wrapper([V1RadioButton]);
// export const RangeField = wrapper([V1RangeField]);
// export const SelectMultiple = wrapper([V1SelectMultiple]);
// export const SimpleSelect = wrapper([V2SimpleSelect]);
// export const DatePicker = wrapper([V2DatePicker]);
// export const DateRangePicker = wrapper([V2DateRangePicker]);
// export const TimePicker = wrapper([V2TimePicker]);
