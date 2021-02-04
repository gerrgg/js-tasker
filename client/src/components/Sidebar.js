import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

import {
  FaSearch,
  FaSun,
  FaStar,
  FaList,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const actions = {
  search: FaSearch,
  today: FaSun,
  starred: FaStar,
  tasks: FaList,
  complete: FaCheck,
  calender: FaCalendarAlt,
};

const Sidebar = () => (
  <Aside>
    {Object.keys(actions).map((key) => {
      const Icon = actions[key];
      return (
        <SidebarButton
          onClick={() => {
            console.log(key);
          }}
        >
          <Icon size={24} />
        </SidebarButton>
      );
    })}
  </Aside>
);

const Aside = styled.div`
  height: 100vh;
  background-color: var(--color-dark-grey);
  padding: 0.65rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SidebarButton = styled(Button)`
  border: 0;
  color: var(--color-secondary);
  padding: 0;
  height: 27px;
  margin-bottom: 27px;
`;

export default Sidebar;
