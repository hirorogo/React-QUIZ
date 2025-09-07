import React from 'react'
import Confetti from 'react-confetti'
import styles from './Result.module.css'

export default function Result({ maxQuizLen, correctNumLen }) {
  return (
    <div className={styles.result}>
      <span>{`${correctNumLen} 問中/ ${maxQuizLen}問正解`}</span>でした！
      <Confetti />
    </div>
  )
}
