const url = "https://swapi.dev/api/planets/";
const tableBody = document.getElementById("planetas");

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(planet => {
      const tr = document.createElement("tr");

      const tdName = document.createElement("td");
      tdName.textContent = planet.name;
      tr.appendChild(tdName);

      const tdRotationPeriod = document.createElement("td");
      tdRotationPeriod.textContent = planet.rotation_period;
      tr.appendChild(tdRotationPeriod);

      const tdOrbitalPeriod = document.createElement("td");
      tdOrbitalPeriod.textContent = planet.orbital_period;
      tr.appendChild(tdOrbitalPeriod);

      const tdDiameter = document.createElement("td");
      tdDiameter.textContent = planet.diameter;
      tr.appendChild(tdDiameter);

      const tdGravity = document.createElement("td");
      tdGravity.textContent = planet.gravity;
      tr.appendChild(tdGravity);

      const tdTerrain = document.createElement("td");
      tdTerrain.textContent = planet.terrain;
      tr.appendChild(tdTerrain);

      const tdSurfaceWater = document.createElement("td");
      tdSurfaceWater.textContent = planet.surface_water;
      tr.appendChild(tdSurfaceWater);

      const tdPopulation = document.createElement("td");
      tdPopulation.textContent = planet.population;
      tr.appendChild(tdPopulation);

      tableBody.appendChild(tr);
    });
  });

  const filmsTableBody = document.getElementById("films-body");

fetch("https://swapi.dev/api/films/")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(film => {
      const tr = document.createElement("tr");

      const tdTitle = document.createElement("td");
      tdTitle.textContent = film.title;
      tr.appendChild(tdTitle);

      const tdEpisode = document.createElement("td");
      tdEpisode.textContent = film.episode_id;
      tr.appendChild(tdEpisode);

      const tdDirector = document.createElement("td");
      tdDirector.textContent = film.director;
      tr.appendChild(tdDirector);

      const tdProducer = document.createElement("td");
      tdProducer.textContent = film.producer;
      tr.appendChild(tdProducer);

      const tdReleaseDate = document.createElement("td");
      tdReleaseDate.textContent = film.release_date;
      tr.appendChild(tdReleaseDate);

      filmsTableBody.appendChild(tr);
    });
  });
