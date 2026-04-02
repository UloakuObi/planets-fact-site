// utils/viewMap.ts

type Planet = {
    name: string;
    overview: {
      content: string;
      source: string;
    },
    structure: {
      content: string;
      source: string;
    },
    geology: {
      content: string;
      source: string;
    },
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string;
    }
  }

export function getViewMap(planet : Planet) {
    return {
        overview: {
            img: planet.images.planet,
            desc: planet.overview.content,
            source: planet.overview.source,
        },
        structure: {
            img: planet.images.internal,
            desc: planet.structure.content,
            source: planet.structure.source,
        },
        surface: {
            img: planet.images.geology,
            desc: planet.geology.content,
            source: planet.geology.source,
        },
    }
}