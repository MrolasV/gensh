import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import './navigation.scss';
import { Tab } from "modules/common/tabs/tabs";
import { Page } from "home/page";
import logoImg from "pngs/logo_nav.png";
import logoSelectedImg from "pngs/logo_nav_selected.png";

interface NavigationProps extends RouteComponentProps {}

class Navigation extends React.Component<NavigationProps,{}> {
  private navOptions: Tab[] = [
    {
      label: (selected: boolean) => {
        return <img 
          draggable={false} 
          className="navigation-logo" 
          src={selected ? logoSelectedImg : logoImg} 
          alt="Logo"
        />
      },
      id: Page.home,
      content: <div/>
    },
    {
      label: 'Builds',
      id: Page.build,
      content: <div/>
    }
  ];

  onTabClick = (tab: Tab) => {
    this.props.history.push(tab.id);
  }

  renderTabs = (): JSX.Element => {
    const { location } = this.props;
    const tabItems: JSX.Element[] = this.navOptions.map((option) => {
      const selected = location.pathname === option.id;
      return <div
        className="navigation-item"
        key={option.id}
        onClick={() => {this.onTabClick(option)}}
      >
        <div className={`navigation-option ${selected ? 'navigation-option-selected' : ''}`}>
          {typeof option.label === 'string' ?
            <div className="navigation-option-label">{option.label}</div> :
            (typeof option.label === 'function' ?
              option.label(selected) :
              option.label
            )
          }
        </div>
      </div>
    });
    return <>
      {tabItems}
    </>
  }

  render () {
    return <div className="navigation-container">
      {this.renderTabs()}
    </div>
  }
}

export default withRouter(Navigation);