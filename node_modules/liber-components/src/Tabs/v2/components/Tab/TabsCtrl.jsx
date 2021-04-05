import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabContainer, TabContentDisplay, TabContent } from './Tabs.styles';

const isBetween = (value, min, max) => value >= min && value <= max;

const TabsCtrl = ({ tabs, active: ctrlActive, header }) => {
  const [transitioning, setTransitioning] = React.useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const active = isBetween(ctrlActive, 0, tabs.length - 1) ? ctrlActive : 0;
  const mappedChildren = tabs.map((tab, index) => (
    <TabContent key={tab.key} active={active === index}>
      {tab.content}
    </TabContent>
  ));

  React.useEffect(() => {
    if (!isFirstLoad) {
      setTransitioning(true);
    } else {
      setIsFirstLoad(false);
    }
  }, [ctrlActive]);

  return (
    <TabContainer transitioning={transitioning}>
      {header}
      <TabContentDisplay onTransitionEnd={() => setTransitioning(false)} active={active}>
        {mappedChildren}
      </TabContentDisplay>
    </TabContainer>
  );
};

TabsCtrl.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      content: PropTypes.any,
    }),
  ).isRequired,
  active: PropTypes.number.isRequired,
  header: PropTypes.node.isRequired,
};

export default TabsCtrl;
