import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css'

type propsType = {
    question: string;
    options: string[];
    callback: (e:React.FormEvent<EventTarget> , ans : string) => void
    //ftn : (e: any) => void
}
const useStyles = makeStyles({
    root: {
      
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      color: '#ffd5ff'
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center'
    },
    pos: {
      marginBottom: 12,
    },
  });

const QuestionCard: React.FC<propsType> = ({
    question, options, callback
}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    let [ans, setAns] = useState('');

    const storeAns = (event: any) => {
        setAns(event.target.value)
    }
    return (
        <div className="cent">
            <Card className="hello">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {question}
        </Typography> 
        </CardContent>
        </Card>
            
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, ans)}>
                {
                    
                    options.map((opt: string, index: number) => {
                        return (
                            <div key={index}>
                                <Card className="hello">
                                    <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    <label>
                                    <input type="radio" value={opt} name="opt" required checked= {ans === opt} onChange= {storeAns}/>
                                    {opt}
                                </label>
                                        </Typography> 
                                    </CardContent>
                                </Card>
                                
                            </div>

                        )
                    })
                }
                <input type="submit" className="btn"></input>
            </form>

        </div>
    )
}

export default QuestionCard








 
{/*  
return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

*/}