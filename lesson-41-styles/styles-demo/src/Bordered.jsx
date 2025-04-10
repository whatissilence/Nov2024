import { createUseStyles } from 'react-jss';

const CONFIG_MAINCOLOR = '#910caf';

const useStyles = createUseStyles({
  bordered: {
    border: `2px solid ${CONFIG_MAINCOLOR}`,
    color: CONFIG_MAINCOLOR
  },
  special: {
    fontSize: '1.5rem',
  }
});

const Bordered = () => {

  const classes = useStyles();

  return (
    <div className={classes.bordered}>
      There should be <span className={classes.special}>border</span> around the component.
    </div>
  )
}

export default Bordered