export default function App() {
  return (
    <div>
      {/* <iframe allowFullScreen={true} width="640" height="360" data-original-width="640" data-original-height="360" src="https://www.thinglink.com/view/scene/1390366589391470595"></iframe> */}
      <iframe allowFullScreen={true} className="w-full aspect-video" src="https://www.thinglink.com/view/scene/1390366589391470595"></iframe>
      <script async src="//cdn.thinglink.me/jse/responsive.js"></script>
    </div>
  )
}

// style="border: none;" webkitallowfullscreen mozallowfullscreen allowfullscreen scrolling="no"?
//  type="text/html"