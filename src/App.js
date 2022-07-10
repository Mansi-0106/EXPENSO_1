import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core'; /* for structure income expense and form */

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';  /* speechly button */

import { Details, Main } from './components'; /* import details and main */
import useStyles from './styles'; /* import styles folder */

const App = () => {
  const classes = useStyles(); /* use styles */
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    // immediately scroll up to main page  when speaking 
    // we have imported useref 
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div> 
    /* giving height widhth of in expense and center main */
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}> /* only for mob form card first then income and expense */
          <Details title="Income" /> /* using props for income expense */
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" /> /* using props for income expense */
        </Grid>
        <PushToTalkButtonContainer>  
          <PushToTalkButton /> /* speechly button */
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
