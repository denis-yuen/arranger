import React from 'react';
import Component from 'react-component-component';
import './AggregationCard.css';

export default ({ children, collapsible = true, displayName }) => (
  <Component initialState={{ isCollapsed: false }}>
    {({ setState, state: { isCollapsed } }) => (
      <div className="aggregation-card">
        <div
          className={`title-wrapper ${isCollapsed ? 'collapsed' : ''}`}
          onClick={
            collapsible
              ? () => setState({ isCollapsed: !isCollapsed })
              : () => {}
          }
        >
          <span className="title">{displayName}</span>
          {collapsible && (
            <span className={`arrow ${isCollapsed ? 'collapsed' : ''}`} />
          )}
        </div>
        {!isCollapsed && (
          <div className={`bucket ${isCollapsed ? 'collapsed' : ''}`}>
            {children}
          </div>
        )}
      </div>
    )}
  </Component>
);