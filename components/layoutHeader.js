import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    HeaderPanel,
    Switcher,
    SwitcherItem,
    SwitcherDivider,
} from 'carbon-components-react';
import { Roadmap20 } from '@carbon/icons-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LayoutHeader({ }) {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Carbon Tutorial">
                    <SkipToContent />

                    <Link href="/">
                        <HeaderName prefix="Soyto's">
                            Portfolio
                        </HeaderName>
                    </Link>
                   
                    <HeaderGlobalBar>
                        <HeaderGlobalAction 
                            isActive={expanded}
                            onClick={() => setExpanded(!expanded)}
                            aria-label="Projects">
                            <Roadmap20 />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>

                    <HeaderPanel aria-label="projects" expanded={expanded}>
                        <Switcher aria-label="switcher container">
                        <SwitcherItem isSelected aria-label="Link 1" href="#">
                        Link 1
                        </SwitcherItem>
                        <SwitcherDivider />
                        <SwitcherItem href="#" aria-label="Link 2">
                        Link 2
                        </SwitcherItem>
                        <SwitcherItem href="#" aria-label="Link 3">
                        Link 3
                        </SwitcherItem>
                        <SwitcherItem href="#" aria-label="Link 4">
                        Link 4
                        </SwitcherItem>
                        <SwitcherItem href="#" aria-label="Link 5">
                        Link 5
                        </SwitcherItem>
                        <SwitcherDivider />
                        <SwitcherItem href="#" aria-label="Link 6">
                        Link 6
                        </SwitcherItem>
                        </Switcher>
                    </HeaderPanel>
                </Header>
            )}
        />
    ); 
}