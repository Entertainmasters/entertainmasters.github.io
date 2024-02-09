const Footer = document.getElementById("footer")
const Header = document.getElementById("header")

const HeaderHTML = `
<a href="../index.html" class="logohref">
            <p class="logo">Entertainmasters</p>
        </a>
        <ul class="nav_links">
        <li><a href="../projects.html">Projects</a></li>
        <li><a href="../about.html">About</a></li>
            <li><a href="../contact.html">Contact</a></li>
        </ul>
`

const FooterHTML = `
<div class="footsections">

<div class="fticon desktop_only">
    <img alt="Entertainmasters Logo" class="footericon" src="../src/Mediakit/Wsauuasfus.png">
</div>
            <div class="footsec">
                <p class="feetsec">Company:</p>
                <a href="../carriers.html" class="footlink">Careers</a><br>
                <a href="../newsroom.html" class="footlink">Newsroom</a>
            </div>

            <div class="footsec">
                <p class="feetsec">Legal:</p>
                <a href="../privacy.html" class="footlink">Privacy</a><br>
                <a href="../copyright.html" class="footlink">Copyright</a><br>
                <a href="../imprint.html" class="footlink">Imprint</a>
            </div>
        </div>

        <p class="copyright">&copy; Copyright 2017 - ${new Date().getFullYear().toString()} Entertainmasters. All Rights Reserved.</p>

        <div class="socials">
            <a href="https://www.youtube.com/@Entertainmasters" class="sociallink"><img class="footersocial" alt="Entertainmasters Youtube Link" src="../src/youtubelogo.png" height="30"></a>
            <a href="https://twitter.com/OficialEMTweet" class="sociallink"><img class="footersocial" alt="Entertainmasters Twitter Link" src="../src/twitterlogo.png" height="30"></a>
            <a href="https://discord.gg/tEsvwYx" class="sociallink"><img class="footersocial" alt="Entertainmasters Discord Link" src="../src/discordlogo.png" height="40"></a>
            <a href="https://instagram.com/entertainmastersig" class="sociallink"><img class="footersocial" alt="Entertainmasters Instagram Link" src="../src/instagramlogo.png" height="30"></a>
            <a href="https://www.tiktok.com/@entertainmasters" class="sociallink"><img class="footersocial" alt="Entertainmasters Tiktok Link" src="../src/tiktoklogo.png" height="30"></a>
            <a href="https://www.twitch.tv/entertainmasters" class="sociallink"><img class="footersocial" alt="Entertainmasters Twitch Link" src="../src/twitch-tv-xxl.png" height="30"></a>
            <a href="https://www.reddit.com/r/entertainmasters/" class="sociallink"><img class="footersocial" alt="Entertainmasters Reddit Link" src="../src/reddit-256.png" height="30"></a>
        </div>
`

document.addEventListener('DOMContentLoaded', e => {
    Footer.innerHTML = FooterHTML;
    Header.innerHTML = HeaderHTML;
})