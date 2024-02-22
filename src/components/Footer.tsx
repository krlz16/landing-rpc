import DiscordIcon from "@/utils/icons/DiscordIcon"
import DonwloadIcon from "@/utils/icons/DownloadIcon"
import ExternalLinkIcon from "@/utils/icons/ExternalLinkIcon"
import TelegramIcon from "@/utils/icons/TelegramIcon"
import XIcon from "@/utils/icons/XIcon"

function Footer() {
  return (
    <footer>
      <h2 className="title">
        <span className="bg-pink text-black">Build</span>
        <span className="bg-orange text-black">Together</span>
      </h2>
      <div className="footer-menu">
        <div className="item">
          <div className="title">Build</div>
          <ul className="navigation">
            <li><a href="https://rootstock.io/integrate/">Integrate</a></li>
            <li><a href="https://rif.technology/" target="_blank"><ExternalLinkIcon />RIF</a></li>
          </ul>
        </div>
        <div className="item">
          <div className="title">Develop</div>
          <ul className="navigation">
            <li><a href="https://rootstock.io/grants/">Grants</a></li>
            <li><a href="https://rootstock.io/mine-btc-with-rootstock/">Merged mining</a></li>
            <li><a href="https://rootstock.io/powpeg/">Powpeg</a></li>
            <li><a href="https://ips.rootstock.io/" target="_blank"><ExternalLinkIcon />RSKIPs</a></li>
            <li><a href="https://dev.rootstock.io/" target="_blank"><ExternalLinkIcon />Devportal</a></li>
          </ul>
        </div>
        <div className="item">
          <div className="title">Use</div>
          <ul className="navigation">
            <li><a href="https://rootstock.io/stablecoins/">Stablecoins</a></li>
            <li><a href="https://rootstock.io/rbtc/">RBTC</a></li>
            <li><a href="https://rootstock.io/rbtc/#rbtc-wallet">Supported Wallets</a></li>
          </ul>
        </div>
        <div className="item">
          <div className="title">Community</div>
          <ul className="navigation">
            <li><a href="https://rootstock.io/brand/">Brand</a></li>
            <li><a href="https://rootstock.io/ambassadors-program/">Ambassadors</a></li>
          </ul>
        </div>
      </div>
      <div className="social">
        <a href="https://discord.com/invite/rootstock" target="_blank">
          <DiscordIcon />
        </a>
        <a href="https://twitter.com/rootstock_io" target="_blank">
          <XIcon />
        </a>
        <a href="https://t.me/rskofficialcommunity" target="_blank">
          <TelegramIcon />
        </a>
      </div>
      <div className="documentation">
        <div className="sites">
          <a href="https://blog.rootstock.io/" target="_blank">
            <ExternalLinkIcon />
            Block
          </a>
          <a href="https://helpdesk.rootstock.io/" target="_blank">
            <ExternalLinkIcon />
            Help Desk
          </a>
          <a href="https://explorer.rsk.co/" target="_blank">
            <ExternalLinkIcon />
            Explorer
          </a>
        </div>
        <div className="whitepaper">
          <div className="title">WHITEPAPER</div>
          <div className="btn-container">
            <a
              href="https://rootstock.io/static/163f032d63d561e4c2fd7befe01d3e4e/rsk_white_paper-original.pdf"
              target="_blank"
              className="btn-primary">
              Original.pdf
              <DonwloadIcon />
            </a>
            <a
              href="https://rootstock.io/static/a79b27d4889409602174df4710102056/RS-whitepaper.pdf"
              target="_blank"
              className="btn-primary">
              Updated.pdf
              <DonwloadIcon />
            </a>
            <a
              href="https://rootstock.io/static/6c63424b1adab118667c0f85b44c6d65/rif-whitepaper-en.pdf"
              target="_blank"
              className="btn-primary">
              Rif.pdf
              <DonwloadIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="reserved">
          <p>&copy; 2024. IOVLabs. All rights reserved</p>
          <p>Rootstock Public Key (2ED3 E888 0384 D3D9 70B6 A612 BEBC A6A9 63F6 1479)</p>
        </div>
        <div className="terms-condition">
          <ul className="navigation">
            <li><a href="https://rootstock.io/privacy-policy/" target="_blank">Privacy Policy</a></li>
            <li><a href="https://rootstock.io/terms-conditions/" target="_blank">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
