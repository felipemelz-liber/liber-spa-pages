import { wrapper } from '../Util/VersionWrapper';

import * as v1 from './v1';
import * as v2 from './v2';

export const { TabHeader } = v1;

export const Tabs = wrapper([v1.Tabs, v2.Tabs]);

export const Tab = wrapper([v1.Tab, v2.SimpleTab]);

export const { SimpleTab, SimpleTabs, DropDownTab } = v2;

export { TabContainer, TabContent, TabContentDisplay } from './v2/components/Tab/Tabs.styles';
