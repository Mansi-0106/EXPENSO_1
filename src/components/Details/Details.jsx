/* for income and expense are called details */
// typography is used for any text in material ui 


import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2'; /*pie chart*/

import useStyles from './styles';  /* for styling from styles folder , using styles inside details */
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => { /* using props for income expense */
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} /> /* using props for income expense */
      <CardContent>
        <Typography variant="h5">
        ${total}

        /* total of income */
        </Typography>
        <Doughnut data={chartData} />
         /*self closing tag*/
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
