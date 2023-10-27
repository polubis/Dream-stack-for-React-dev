import { Tab, Tabs, tokens } from '@system/figa-ui';
import { editor_tabs } from './consts';
import type { EditorTab, EditorTabProps } from './defs';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${tokens.z[50]};
`;

const EditorTabs = ({ children }: EditorTabProps) => {
  const [activeTab, setActiveTab] = useState<EditorTab>(editor_tabs[0]);

  return (
    <>
      <Container>
        <Tabs>
          {editor_tabs.map((tab) => (
            <Tab
              key={tab}
              active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </Tabs>
      </Container>
      {children(activeTab)}
    </>
  );
};

export { EditorTabs };
