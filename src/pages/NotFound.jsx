import WC_2026 from '../assets/WC2026_emblem.svg.webp';

function NotFound() {
  return(
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are searching for does not exist</p>
      <img src={WC2026_emblem.svg} id="FIFA" alt="FIFA 2026" title="FIFA 2026"/>
    </div>
  )
}

export default NotFound;