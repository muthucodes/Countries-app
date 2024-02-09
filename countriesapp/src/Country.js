import React from 'react';
import styles from './Country.module.css'

function Country({name, flag}) {
    console.log(name);
  return (
    <div className={styles.card}>
        <img src={flag} alt='country flag'/>
        <p>{name}</p>
    </div>
  )
}

export default Country