

function CountDownClock( {countdown} ) {

  const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
  });

  function getDiv(countdown){
    if (countdown.live === true) {
      return <div className="live"><h3>Live!</h3><p>{today}</p></div>
    }

    return (
      <>
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
      </>
    )
  }

  return(
    <>
      {getDiv(countdown)}
    </>
  )
}

export default CountDownClock;