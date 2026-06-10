

function CountDownClock( {countdown} ) {

  function getDiv(countdown){
    if (countdown.live === true) {
      return <div className="live">Event is Live!</div>
    }

    return ( 
      <div id="countdown">
        <div>{countdown.days} Days</div>
        <div>{countdown.hours} Hours</div>
        <div>{countdown.minutes} Minutes</div>
        <div>{countdown.seconds} Seconds</div>
      </div>
    )
  }

  return(
    <>
      <div>{getDiv(countdown)}</div>
    </>
  )
}

export default CountDownClock;