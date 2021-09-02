import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: '0px 3px 4px #efefef',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ArtistCard({artist}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {artist.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {artist.username}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">
            {artist.email}
          </Typography>
          <Typography variant="body2">
            {artist.phone}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
