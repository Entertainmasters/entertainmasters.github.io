/**
 * Copyright Entertainmasters 2021 - 2023
 */

const Footer = document.getElementById("footer")
const Header = document.getElementById("header")

const HeaderHTML = `
<a href="index.html" class="logohref">
            <p class="logo">Entertainmasters</p>
        </a>
        <ul class="nav_links">
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
`

const FooterHTML = `
<div class="footsections">
            <div class="footsec">
                <p class="feetsec">About Entertainmasters:</p>
                <a href="carriers.html" class="footlink">Carriers</a><br>
                <a href="newsroom.html" class="footlink">Newsroom</a>
            </div>

            <div class="footsec">
                <p class="feetsec">Legal:</p>
                <a href="privacy.html" class="footlink">Privacy</a><br>
                <a href="copyright.html" class="footlink">Copyright</a><br>
                <a href="impress.html" class="footlink">Impress</a>
            </div>
        </div>

        <p class="copyright">&copy; Entertainmasters 2017 - 2023</p>

        <div class="socials">
            <a href="https://www.youtube.com/@Entertainmasters" class="sociallink">Youtube</a>
            <a href="https://twitter.com/OficialEMTweet" class="sociallink">Twitter</a>
            <a href="https://discord.gg/tEsvwYx" class="sociallink">Discord</a>
        </div>
`

document.addEventListener('DOMContentLoaded', e => {
    Footer.innerHTML = FooterHTML;
    Header.innerHTML = HeaderHTML;
})