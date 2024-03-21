import IMG from '@/assets/svg/imgWork.svg';
import { RPC_API_URL } from '@/config/constants';
import VerticalLineIcon from '@/utils/icons/VerticalLineIcon';

function SectionHowItWork() {
  return (
    <section className="section-work">
      <span className="badge bg-lime text-black">01</span>
      <h2>How it works</h2>
      <div className="container">
        <div className="content-img">
          <img src={IMG} alt="" />
        </div>
        <div className="content-step">
          <VerticalLineIcon />
          <div className="steps">
            <div className="step">
              <div className="title">
                <h3 className="bg-cyan text-black">Sign up</h3>
                <span className="badge bg-cyan text-black">1.0</span>
              </div>
              <p className="info">For a free account</p>
            </div>
            <div className="step">
              <div className="title">
                <h3 className="bg-purple text-black">Get</h3>
                <span className="badge bg-purple text-black">2.0</span>
              </div>
              <p className="info">Get for a free account</p>
            </div>
            <div className="step">
              <div className="title">
                <h3 className="bg-white text-black">Start building</h3>
                <span className="badge bg-white text-black">3.0</span>
              </div>
              <a href={`${RPC_API_URL}/register`} target='_blank' className='btn-outline-primary'>Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHowItWork
