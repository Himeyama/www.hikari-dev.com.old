import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/DocPage/Layout/Main';
import styles from '@docusaurus/theme-classic/src/theme/DocPage/Layout/Main/styles.module.css';
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';

export default function DocPageLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): JSX.Element {
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        hiddenSidebarContainer && styles.docMainContainerEnhanced,
      )}>
      <div
          className={clsx(
            'container padding-top--md padding-bottom--lg',
            styles.docItemWrapper,
            hiddenSidebarContainer && styles.docItemWrapperEnhanced,
          )}>
          {children}
        </div>
      </main>
  );
}
