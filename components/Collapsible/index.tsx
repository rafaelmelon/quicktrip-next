import * as React from 'react'
import { Container, Collapse } from '@material-ui/core';

type LayoutProps = {
  title?: string;
  isCollapsed: boolean;
}

const Collapsible: React.FunctionComponent<LayoutProps> = ({ title, isCollapsed }) => (
  <Collapse in={isCollapsed}>
    <Container>
      {title}
    </Container>
  </Collapse>
)
export default Collapsible