const topNav = document.querySelector(".topNav");
if (topNav) {
  topNav.innerHTML = `
    <logo-tag>
    <img src="Logos/logo2.png" alt="">
    </logo-tag>
    <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="blog.html">HelloKS</a>
    <a href="contact.html">Contact</a>
    <a href="donate.html" id="donateSmall">Donate</a>
    </nav>
    <button class="material-symbols-outlined" onclick="toggleMenu()">menu</button>
    `;
}

const topNavMenu = document.querySelector(".topNav nav");

const toggleMenu = () => {
  topNavMenu.classList.toggle("change");
};


const getTimeSince = (unixtime) => {
  const time = new Date(unixtime)
  const now = new Date();
  const timeDiff = now - time; // Calculate the time difference in milliseconds

  const minutes = Math.floor(timeDiff / (1000 * 60)); // Calculate minutes
  const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Calculate hours
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Calculate days

  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hr${hours !== 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
}

const loader = document.querySelector('.loader')

const startLoader = () => {
  loader.classList.remove('hide')
}
const endLoader = () => {
  loader.classList.add('hide')
}

