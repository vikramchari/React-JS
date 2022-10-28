import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
function StopWatchComponent(){
    const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
    return(
        <div>
            <h3 className="heading">React stop watch</h3>
            <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
            <div className="stop-watch-section">
            <Button onClick={() => setRunning(true)} variant="contained" color="success">Start</Button>&nbsp; &nbsp;
            <Button onClick={() => setRunning(false)} variant="outlined" color="error">Stop</Button>
            </div>
        </div>
    )
}

export default StopWatchComponent;