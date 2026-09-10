import scene01Img from "../assets/scenes/home-01.png";
import scene02Img from "../assets/scenes/home-02.png";
import scene03Img from "../assets/scenes/home-03.png";
import scene06Img from "../assets/scenes/home-06.png";
import scene07Img from "../assets/scenes/home-07.png";
import scene08Img from "../assets/scenes/home-08.jpg";
import scene09Img from "../assets/scenes/home-09.png";
import scene10Img from "../assets/scenes/home-10.png";
import scene10MapImg from "../assets/scenes/home-10-map.png";
import scene11Img from "../assets/scenes/home-11.png";
import scene12Img from "../assets/scenes/home-12.png";
import scene13Img from "../assets/scenes/home-13.png";
import scene14Img from "../assets/scenes/home-14.png";
import scene15Img from "../assets/scenes/home-15.jpg";
import scene16Img from "../assets/scenes/home-16.jpg";

/**
 * sceneConfig.js
 * Multi-scene configuration for BUILDX Paranormal Cinematic Experience.
 * Configurable focal points, preloads, and transition mappings.
 */
export const scenes = [
  {
    id: "scene-01",
    name: "The Abandoned Corridor // Presence",
    image: scene01Img,
    nextSceneId: "scene-02",
  },
  {
    id: "scene-02",
    name: "The Open Gate Vault",
    image: scene02Img,
    nextSceneId: "scene-03",
  },
  {
    id: "scene-03",
    name: "The Investigation Chamber // Entrance",
    image: scene03Img,
    nextSceneId: "scene-06",
  },
  {
    id: "scene-06",
    name: "The Crime Board // Front Blackboard Manifest",
    image: scene06Img,
    nextSceneId: "scene-07",
  },
  {
    id: "scene-07",
    name: "The Subterranean Trapdoor Hatch // Chamber Pull-Back",
    image: scene07Img,
    nextSceneId: "scene-08",
  },
  {
    id: "scene-08",
    name: "The Subterranean Staircase // The Ghost at the Gate",
    image: scene08Img,
    nextSceneId: "scene-09",
  },
  {
    id: "scene-09",
    name: "Ghost First-Person Eye View // Gripping the Vault Gate",
    image: scene09Img,
    nextSceneId: "scene-10",
  },
  {
    id: "scene-10",
    name: "The Crypt Cathedral // Entrance & Advance",
    image: scene10Img,
    nextSceneId: "scene-10-map",
  },
  {
    id: "scene-10-map",
    name: "Sanctum Blueprint // Verifying Location",
    image: scene10MapImg,
    nextSceneId: "scene-11",
  },
  {
    id: "scene-11",
    name: "The Sacrificial Altar // Advancing to the Vessel",
    image: scene11Img,
    nextSceneId: "scene-12",
  },
  {
    id: "scene-12",
    name: "Reaching for the Ancient Scroll // Close-Up",
    image: scene12Img,
    nextSceneId: "scene-13",
  },
  {
    id: "scene-13",
    name: "Unrolling the Sanctum Proclamation",
    image: scene13Img,
    nextSceneId: "scene-14",
  },
  {
    id: "scene-14",
    name: "Save the Date // Hackathon Scroll Proclamation",
    image: scene14Img,
    nextSceneId: "scene-15",
  },
  {
    id: "scene-15",
    name: "The Crypt Sanctorum // Cathedral of the Occult Rules",
    image: scene15Img,
    nextSceneId: "scene-16",
  },
  {
    id: "scene-16",
    name: "The Inscribed Rules & Regulations // Sanctum Board",
    image: scene16Img,
    nextSceneId: null,
  },
];
