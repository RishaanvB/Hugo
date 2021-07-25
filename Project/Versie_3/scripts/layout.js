const mainEl = document.getElementById("main");
const bodyEl = document.body;

const navigationHeaderHTML = `
<nav class="navbar" id="navbar">
      <a href="./index.html" class="navbar__logo">
        <div class="navbar__logo">
          <img
            src="./Assets/paddestoel_final.ico"
            alt="brand logo"
            width="35px"
          />
          <div class="navbar__logo-name">
            <span>Mushroom</span>
            <span>Fruit</span>
          </div>
        </div>
      </a>

      <i class="fas fa-bars toggle-menu"></i>

      <nav class="navbar__links">
        <ul class="navbar__links__list">
          <li class="nav-link"><a href="./index.html">Home</a></li>
          <li class="nav-link">
            <a href="./how-it-grows.html">How it grows</a>
          </li>
          <li class="nav-link">
            <a href="./consuming-reishi.html">Consuming reishi</a>
          </li>
          <li class="nav-link"><a href="./faq.html">FAQ</a></li>
          <li class="nav-link"><a href="./gallery.html">Gallery</a></li>
          <li class="nav-link"><a href="./about.html">About me</a></li>
          <li class="nav-link"><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
    </nav>
`;

const footerHTML = `
<footer class="footer">
    <div class="footer__shop-container">
        <h3>Grow Your Own Reishi</h3>
        <h4>Visit my partner’s shop and order your own Reishi!</h4>
        <a
            class="footer__shop-container btn"
            href="https://groenetakken.nl/product/reishi/"
            target="_blank"
            rel="noopener"
            rel="noreferrer"
            >Go To Shop</a
        >
    </div>
    <nav class="footer__navlinks-container">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./how-it-grows.html">How It Grows</a></li>
            <li><a href="./consuming-reishi.html">Consuming Reishi</a></li>
            <li><a href="./faq.html">FAQ</a></li>
            <li><a href="./gallery.html">Gallery</a></li>
            <li><a href="./about.html">About Me</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </nav>
    <div class="footer__socials-container">
        <a target="_blank" href="https://nl-nl.facebook.com/"><i class="fab fa-facebook-square"></i></a>
        <a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a>
        <a target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a>
    </div>
</footer>
<footer class="copyright-container">
    <small>© 2021 MushroomFruit. All rights reserved.</small>
    <a href="#" class="copyright-container__chevron"><span><i class="fas fa-chevron-up"></i></span> Back to top</a>
</footer>`;

mainEl.insertAdjacentHTML("afterend", footerHTML);
bodyEl.insertAdjacentHTML("afterbegin", navigationHeaderHTML);
