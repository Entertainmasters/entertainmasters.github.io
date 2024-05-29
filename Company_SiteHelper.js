const Footer = document.getElementById("footer")
const Header = document.getElementById("header")

const HeaderHTML = `
<a href="../index.html" class="logohref">
            <p class="logo">Entertainmasters</p>
        </a>
        <ul class="nav_links corperate-header-links">
        <li><a class="undo-text-transform" href="../about.html">About</a></li>
        <li><a class="undo-text-transform" href="./news.html">News</a></li>
        <li><a class="undo-text-transform" href="./careers.html">Careers</a></li>
        </ul>
`

const FooterHTML = `
<div class="footsections">

<div class="fticon desktop_only">
    <img alt="Entertainmasters Logo" class="footericon" src="../src/Mediakit/Wsauuasfus.png">
</div>
            <div class="corperate-footsec footsec">
                <p class="corperate-feetsec feetsec">Company:</p>
                <a href="./index.html" class="corperate-footlink footlink">Company</a><br>
                <a href="./careers.html" class="corperate-footlink footlink">Careers</a><br>
                <a href="./news.html" class="corperate-footlink footlink footlink">Newsroom</a>
            </div>
        </div>


        <div class="corperate-footer-socials socials">
            <a href="https://www.youtube.com/@Entertainmasters" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Youtube Link" src="../src/youtubelogo.png" height="18">Youtube</span></a>
            <a href="https://twitter.com/OficialEMTweet" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Twitter Link" src="../src/twitterlogo.png" height="18">Twitter</span></a>
            <a href="https://discord.gg/tEsvwYx" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Discord Link" src="../src/discordlogo.png" height="24">Discord</span></a>
            <a href="https://instagram.com/entertainmastersig" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Instagram Link" src="../src/instagramlogo.png" height="18">Instagram</span></a>
            <a href="https://www.tiktok.com/@entertainmasters" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Tiktok Link" src="../src/tiktoklogo.png" height="18">Tiktok</span></a>
            <a href="https://www.twitch.tv/entertainmasters" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Twitch Link" src="../src/twitch-tv-xxl.png" height="18">Twitch</span></a>
            <a href="https://www.reddit.com/r/entertainmasters/" class="sociallink"><span class="vert-centre"><img class="footersocial" alt="Entertainmasters Reddit Link" src="../src/reddit-256.png" height="18">Reddit</span></a>
        </div>

        <div class="bottom-coperate-footer-content">
            <p class="corperate-footer-copyright">&copy; Copyright ${new Date().getFullYear().toString()} Entertainmasters. All Rights Reserved.</p>
            <div class="corperate-legal-links">
                <a href="../privacy.html" class="footlink right-legal-border">Privacy</a><br>
                <a href="../copyright.html" class="footlink right-legal-border">Copyright</a><br>
                <a href="../imprint.html" class="footlink no-right-padding">Imprint</a>
            </div>
        </div>

`

document.addEventListener('DOMContentLoaded', e => {
    Footer.innerHTML = FooterHTML;
    Header.innerHTML = HeaderHTML;
})