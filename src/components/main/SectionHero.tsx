import IMG from '@/assets/svg/icon1.svg'
import Title from '../controls/Title'

export default function SectionHero() {
  return (
    <section className="section-head">
      <Title />
      <div className="call-action">
        <a className="btn-outline-secondary">Sign Up for Free</a>
      </div>
      <div className="content-info">
        <span className="badge bg-green text-black">1.0</span>
        <p className="info">Deploy and interact with EVM compatible smart contracts on Rootstock using JSON RPC methods.</p>
        <span className="badge bg-green text-black">2.0</span>
        <p className="info">Test your dApps on testnet in minutes before deploying to mainnet</p>
      </div>
      <div className="content-img">
        <img src={IMG} alt="" />
      </div>
    </section>
  )
}
