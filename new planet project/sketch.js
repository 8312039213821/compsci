let planets = []; // Global array to store all planets
let sunR; // Sun radius

function setup() {
  createCanvas(windowWidth, windowHeight);
  sunR = (width / 8) * 3; // Sun radius remains the same
}

function draw() {
  background(0); // Black background for space

  // Draw the sun (base layer)
  fill(255, 255, 0);
  circle(width / 2, height / 2, sunR);

  // Separate planets into two groups based on direction
  let rightToLeftPlanets = planets.filter((planet) => planet.direction < 0);
  let leftToRightPlanets = planets.filter((planet) => planet.direction > 0);

  // Draw planets moving right to left (behind the sun)
  for (let planet of rightToLeftPlanets) {
    planet.action();
  }

  // Draw the sun again to overlay planets moving right to left
  fill(255, 255, 0);
  circle(width / 2, height / 2, sunR);

  // Draw planets moving left to right (in front of the sun)
  for (let planet of leftToRightPlanets) {
    planet.action();
  }
}

// Function to add a planet on regular click
function mouseClicked() {
  if (keyIsDown(SHIFT)) {
    if (planets.length > 0) {
      planets[planets.length - 1].createMoon(); // Add moon to the last planet if SHIFT is held
    }
  } else {
    planets.push(new Planet(width / 2 - sunR, [random(255), random(255), random(255)], random(1, 3))); // Create a new planet
  }
}

// Planet class
class Planet {
  constructor(x, c, xSpeed) {
    this.x = x; // Planet's x position
    this.y = height / 2; // Planet's y position (fixed in the center)
    this.r = (sunR / 10) * 1.5; // Half the size of the current radius
    this.c = c; // Color of the planet
    this.direction = xSpeed; // Direction of movement
    this.xSpeed = xSpeed; // Speed of movement
    this.moons = []; // Array to hold moons of the planet
    this.orbitRadius = (sunR + random(30, 60)); // Smaller orbit radius to fit the screen
  }

  // Method to move the planet on the x-axis
  move() {
    this.x += this.direction; // Update position based on direction

    // Reverse direction at orbit bounds
    if (this.x <= width / 2 - this.orbitRadius) {
      this.direction = this.xSpeed; // Move right
    } else if (this.x >= width / 2 + this.orbitRadius) {
      this.direction = -this.xSpeed; // Move left
    }
  }

  // Method to display the planet
  display() {
    fill(this.c);
    circle(this.x, this.y, this.r);

    // Draw moons behind or in front of the planet
    for (let moon of this.moons) {
      moon.display();
    }
  }

  // Add a moon to the planet
  createMoon() {
    let moon = new Moon(this, random(20, 50) * 1.5, random(1, 3)); // Adjust moon orbit radius
    this.moons.push(moon); // Add the new moon to the planet's moons array
  }

  // Action that combines all planet's functions
  action() {
    this.move();
    this.display();
    // Random chance to modify orbit or color
    if (random(1) < 0.01) this.increaseOrbit();
    if (random(1) < 0.01) this.decreaseOrbit();
    if (random(1) < 0.01) this.changeColor();
  }

  // Increase orbit radius
  increaseOrbit() {
    this.orbitRadius += 3; // Adjust increment for a smaller orbit
  }

  // Decrease orbit radius (but not too small)
  decreaseOrbit() {
    if (this.orbitRadius > 20) this.orbitRadius -= 3; // Adjust minimum orbit radius to fit screen
  }

  // Change the planet's color
  changeColor() {
    this.c = [random(255), random(255), random(255)];
  }
}

// Moon class
class Moon {
  constructor(planet, orbitRadius, speed) {
    this.planet = planet; // Reference to the planet this moon orbits
    this.orbitRadius = orbitRadius; // Distance from the planet
    this.speed = speed; // Speed of the moon's orbit
    this.offset = random(-this.orbitRadius, this.orbitRadius); // Random offset for horizontal oscillation
    this.r = (planet.r / 3); // Moons are 1/3 the size of the planets
    this.c = [random(100, 200), random(100, 200), random(100, 200)]; // Greyscale color
    this.exploded = false; // Tracks if the moon has exploded
  }

  // Move the moon in its orbit (horizontal only)
  move() {
    this.offset += this.speed * 0.1; // Increment horizontal offset
    if (abs(this.offset) > this.orbitRadius) {
      this.speed *= -1; // Reverse direction at orbit bounds
    }
  }

  // Check for explosion
  explode() {
    if (!this.exploded && random(1) < 0.001) { // 0.1% chance of explosion
      this.exploded = true;

      // Halve the radius of this moon
      this.r /= 2;

      // Create a new moon with the same halved radius
      let newMoon = new Moon(this.planet, this.orbitRadius, -this.speed); // Opposite direction
      newMoon.r = this.r; // Set the same halved radius

      // Add the new moon to the planet
      this.planet.moons.push(newMoon);
    }
  }

  // Display the moon
  display() {
    this.move(); // Update position
    this.explode(); // Check for explosion

    let x = this.planet.x + this.offset; // X position relative to planet
    let y = this.planet.y; // Y position remains fixed relative to planet

    // Draw the moon
    fill(this.c);
    circle(x, y, this.r);
  }
}
