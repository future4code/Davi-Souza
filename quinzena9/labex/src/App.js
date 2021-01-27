import { CssBaseline } from '@material-ui/core';
import React from 'react'
import Router from './Router';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';


export default function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <CssBaseline/>
      <Router/>
    </MuiPickersUtilsProvider>
  )
}
