

const forwarderOrigin = 'http://localhost:9010'

const initialize = () => {
  //You will start here 

  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');

  //Created check function to see if the Astrone extension is installed
  const isAstroneInstalled = () => {
    //Have to check the astrone binding on the window object to see if it's installed
    const {astrone} = window;
    return Boolean(astrone && astrone.isAstrone);
  }
  const AstroneClientCheck = () => {
    const isInstalled = isAstroneInstalled();
    if (!isInstalled) {
      onboardButton.innerText = 'Click here to install Astrone';
    } else {
      onboardButton.innerText = 'Connect';
    }
  }
  AstroneClientCheck();
}
window.addEventListener('DOMContentLoaded', initialize)