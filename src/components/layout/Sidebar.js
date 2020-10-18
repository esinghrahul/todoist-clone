import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = () => {
    const {setSelectedProject} = useSelectedProjectValue();
    const [active, setActive] = useState('INBOX')
    const [showProjects, setShowProjects] = useState(true)

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className= {active === 'inbox' ? 'active' : undefined}
            onClick= {()=> {
                setActive('inbox');
                setSelectedProject('INBOX');
            }}>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
        <li data-testid="today" className= {active === 'today' ? 'active' : undefined}
            onClick= {()=> {
                setActive('today');
                setSelectedProject('TODAY');
            }}></li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_week" className="next_week">
        <li data-testid="next_week" className= {active === 'next_week' ? 'active' : undefined}
            onClick= {()=> {
                setActive('next_week');
                setSelectedProject('NEXT_WEEK');
            }}></li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next Week</span>
        </li>
      </ul>
      <div className="sidebar__middle" onClick= {()=> setShowProjects(!showProjects)}>
        <span>
          <FaChevronDown className= {!showProjects ? 'hidden-projects' : undefined}/>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
