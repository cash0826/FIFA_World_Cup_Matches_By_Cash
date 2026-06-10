

function CountDownClock( {countdown} ) {

  function getDiv(countdown){
    if (countdown.live === true) {
      return <div id="live">Event is Live!</div>
    }

    return ( 
      <div id="countdown">
        <div className="countdown-value">
          <p>{countdown.days} </p>
          <p>{countdown.hours} </p>
          <p>{countdown.minutes} </p>
          <p>{countdown.seconds}</p>
        </div>

        <div className="countdown-key">
          <p>Days</p>
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>

      </div>
    )
  }

  return(
    <>
      {getDiv(countdown)}
    </>
  )
}

export default CountDownClock;