import React from 'react';
import Layout from '../../components/layout/Layout';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import styles from './TimerPage.module.scss';
import Typography from '@material-ui/core/Typography';

const TimerPage = () => {
  return (
    <Layout>
      <div className={styles.timerPage}>
        <Typography gutterBottom variant='h1'>
        Countdown Timer Application
        </Typography>
        <Typography align='center' color='textSecondary'>Fill in a number of minutes and click start to begin.</Typography>
        <CountdownTimer />
      </div>
    </Layout>
  );
};

export default TimerPage;
