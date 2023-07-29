import { Container } from "react-bootstrap";
import defaultWallpaper from "/src/assets/wallpaper.png";
import ascent from "/src/assets/wallpapers/ascent.jpg";
import autumn from "/src/assets/wallpapers/autumn.jpg";
import azul from "/src/assets/wallpapers/azul.jpg";
import bliss from "/src/assets/wallpapers/bliss.jpg";
import crystal from "/src/assets/wallpapers/crystal.jpg";
import desert from "/src/assets/wallpapers/desert.jpg";
import flower from "/src/assets/wallpapers/flower.jpg";
import follow from "/src/assets/wallpapers/follow.jpg";
import friend from "/src/assets/wallpapers/friend.jpg";
import home from "/src/assets/wallpapers/home.jpg";
import purpleFlower from "/src/assets/wallpapers/purple-flower.jpg";
import radiance from "/src/assets/wallpapers/power.jpg";
import ripple from "/src/assets/wallpapers/ripple.jpg";
import stonehenge from "/src/assets/wallpapers/stonehenge.jpg";
import tulips from "/src/assets/wallpapers/tulips.jpg";
import vortecSpace from "/src/assets/wallpapers/vortec-space.jpg";
import wind from "/src/assets/wallpapers/wind.jpg";
import windowsXp from "/src/assets/wallpapers/windows-xp.jpg";

const Wallpaper = (props) => {
  const { wallpaper, setWallpaper } = props;
  const wallpapers = [
    { name: "default", url: defaultWallpaper },

    { name: "autumn", url: autumn },
    { name: "azul", url: azul },
    { name: "bliss", url: bliss },
    { name: "crystal", url: crystal },
    { name: "desert", url: desert },
    { name: "flower", url: flower },
    { name: "follow", url: follow },
    { name: "friend", url: friend },
    { name: "home", url: home },
    { name: "purpleFlower", url: purpleFlower },
    { name: "radiance", url: radiance },
    { name: "ripple", url: ripple },
    { name: "stonehenge", url: stonehenge },
    { name: "tulips", url: tulips },
    { name: "vortecSpace", url: vortecSpace },
    { name: "wind", url: wind },
    { name: "windowsXp", url: windowsXp },
  ];

  return (
    <Container
      className="m-0 p-0 overflow-hidden text-center"
      style={{ height: "580px" }}
    >
      Select a new wallpaper below:
      <Container className="d-flex flex-row justify-content-center flex-wrap p-0 m-0 mt-2">
        {wallpapers.map((wallpaper) => (
          <div
            className="d-flex flex-column border border-success border-2 mx-1 my-1 pt-2"
            style={{ width: "140px", height: "130px" }}
            onClick={() => setWallpaper(wallpaper.url)}
          >
            <img
              className="mx-auto"
              style={{ width: "120px" }}
              src={wallpaper.url}
            ></img>
            {wallpaper.name}
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default Wallpaper;
