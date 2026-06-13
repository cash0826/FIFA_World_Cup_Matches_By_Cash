

function CountDownClock( {countdown} ) {

  function getDiv(countdown){
    if (countdown.live === true) {
      return <h3 className="live">Event is Live!</h3>
    }

    return ( 
      <div className="countdown-div">
        <div className="countdown-days">
          <h4>{countdown.days} </h4>
          <h4>Days</h4>
        </div>
        <div className="countdown-hrs">
          <h4>{countdown.hours} </h4>
          <h4>Hours</h4>
        </div>
        <div className="countdown-min">
          <h4>{countdown.minutes} </h4>
          <h4>Minutes</h4>
        </div>
        <div className="countdown-sec">
          <h4>{countdown.seconds}</h4>
          <h4>Seconds</h4>
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