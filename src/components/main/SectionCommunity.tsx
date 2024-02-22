import DiscordIcon from '@/utils/icons/DiscordIcon'
import WorldIcon from '@/utils/icons/WorldIcon'
import CirclesIcon from '@/assets/svg/circles.svg';

function SectionCommunity() {
  return (
    <section className="section-community">
      <div className="community">
        <div className="content-title">
          <span className="badge bg-cyan text-black">COMMUNITY</span>
          <h2 className="title">See what other developers are saying</h2>
        </div>
        <div className="content-icon">
          <WorldIcon />
        </div>
        <div className="content-info">
          <img src={CirclesIcon} alt="" />
          <p className="description">238 000 Developers on our Channel</p>
          <button className="btn-outline-primary">
            Join our Discord
            <DiscordIcon />
          </button>
        </div>
      </div>
      <div className="resources">
        <div className="content-title">
          <span className="badge bg-purple text-black">Resources</span>
          <h2 className="title">Other useful products to build with</h2>
          <button className="btn-outline-primary">
            Visit Dev Portal
          </button>
        </div>
        <div className="content-icon">
        </div>
        <div className="content-info">
          <p className="description">Find other products available </p>
        </div>
      </div>
    </section>
  )
}

export default SectionCommunity
