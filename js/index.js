const topNav = document.querySelector(".topNav");
topNav.innerHTML = `
<logo-tag>
<img src="logo2.png" alt="">
</logo-tag>
<nav>
<a href="index.html">Home</a>
<a href="">About</a>
<a href="">HelloKS</a>
<a href="">Contact</a>
<a href="donate.html" id="donateSmall">Donate</a>
</nav>
<button class="material-symbols-outlined" onclick="toggleMenu()">menu</button>
`;

const topNavMenu = document.querySelector(".topNav nav");

topNavMenu.addClassName = "menu";

const toggleMenu = () => {
  topNavMenu.classList.toggle("change");
};
