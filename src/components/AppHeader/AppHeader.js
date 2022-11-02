import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  Theme,
  SideNavMenuItem
} from '@carbon/react';
import { Switcher, Notification, UserAvatar, GameConsole, Help, Wallet, Search, Mountain, ReportData, Activity} from '@carbon/react/icons';

const AppHeader = () => (
  <div className="container">
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Theme theme="g100">
    <Header>
      <SkipToContent />
      <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
      <HeaderName href="/" prefix="Logo">
        Ebrai Conceptualizer
      </HeaderName>
      <HeaderNavigation>
        <HeaderMenuItem>Dashboard</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation>
        <HeaderMenuItem>Creators</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation>
        <HeaderMenuItem>Earn</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation>
        <HeaderMenuItem>Challanges</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation>
        <HeaderMenuItem>Concepts</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation>
        <HeaderMenuItem>Arena</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation>
        <HeaderMenuItem>Models</HeaderMenuItem>
      </HeaderNavigation>
        
        <HeaderGlobalBar>
        <HeaderGlobalAction tooltipAlignment="center">
            <Search size={20} />
            </HeaderGlobalAction>
          <HeaderGlobalAction tooltipAlignment="center">
            <GameConsole size={20} />
            </HeaderGlobalAction>
        <HeaderGlobalAction tooltipAlignment="center">
            <Wallet size={20} />
            </HeaderGlobalAction>
        <HeaderGlobalAction tooltipAlignment="center">
            <Help size={20} />
                </HeaderGlobalAction>
                <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                >
                  <SideNavItems>
                    
                    <SideNavMenuItem href="#"><Activity size={30} /> Activity </SideNavMenuItem>
                    <SideNavMenuItem href="#"><Mountain size={30} /> Travel </SideNavMenuItem>
                    <SideNavMenuItem href="#"><ReportData size={30} /> Statistics </SideNavMenuItem>
                    
                </SideNavItems>
              </SideNav>
          
  <HeaderGlobalAction tooltipAlignment="center">
    <Notification size={20} />
  </HeaderGlobalAction>
  <HeaderGlobalAction tooltipAlignment="center">
    <UserAvatar size={20} />
  </HeaderGlobalAction>
  <HeaderGlobalAction tooltipAlignment="end">
    <Switcher size={20} />
          </HeaderGlobalAction>
          
</HeaderGlobalBar>
          </Header>
          </Theme>
        </>
        
  )}
  />
  </div>
);
  
export default AppHeader;