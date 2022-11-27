import React from 'react';
import Link from '@docusaurus/Link';
import styles from "./styles.module.sass";

export default function TopCards(props) {
    let text = "[ここにテキストが入ります]"
    if(props.text){
        text = props.text
    }

    return (<Link className={styles.mainCards} href={props.href}>{text}</Link>)
}