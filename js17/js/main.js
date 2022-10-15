const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};

const { vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);

function sings({ vocals }) {return `${vocals} sings!`};
console.log(sings(band));