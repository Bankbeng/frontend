// Banner Component
// This component displays a large banner image at the top of the page
// It uses the banner.png image as a background with fixed height

export default function Banner() {
  return (
    // Main banner container with background image
    // h-96: sets height to 384px
    // bg-[url('/banner.png')]: sets the background image from public folder
    // bg-cover: makes image fill the container (may crop)
    // bg-center: centers the image
    // bg-no-repeat: prevents image from repeating/tiling
    <div 
      className="w-full h-96 bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat"
    >
    </div>
  );
}