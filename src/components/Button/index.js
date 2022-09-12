import React from 'react';
import Link from '@docusaurus/Link';
import styles from "./styles.module.css";

export default function Button(props) {
  if (props.href) {
    return (
      <button class={"with-link " + props.class} disabled={props.disabled}>
        <Link href={props.href}>
          {props.children}
        </Link>
      </button>
    )
  }
  return (<button>{props.children}</button>)
}