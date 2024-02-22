
function SectionCode() {
  return (
    <section className="section-code">
      <div className="container-code">
        <code>
          <div>
            <span className="text-orange">curl</span>
            {` --location 'http://rpc-api-01.explorer.iovlabs.net/json-rpc/<api-key>' \\`}
          </div>
          <div className="cl2">{`--header 'Content-Type: application/json' \\`}</div>
          <div>{`--data '{`}</div>
          <div className="cl1">&nbsp;&nbsp;{`"jsonrpc":"2.0",`}</div>
          <div className="cl1">&nbsp;&nbsp;{`"method":"eth_getBalance",`}</div>
          <div>&nbsp;&nbsp;<span className="cl1">{`"params"`}</span>{`:[,`}</div>
          <div className="address">&nbsp;&nbsp;&nbsp;&nbsp;{`0x1fab9a0e24ffc209b01faa5a61ad4366982d0b7f`}</div>
          <div className="address">&nbsp;&nbsp;&nbsp;&nbsp;{`"latest"`}</div>
          <div>&nbsp;&nbsp;{`]`}</div>
          <div className="cl1">&nbsp;&nbsp;{`"id: 0"`}</div>
          <div>{`}'`}</div>
        </code>
      </div>
      <div className="description">
        <span className="badge bg-cyan text-black">02</span>
        <h2 className="title">Focus on Your dApp’s <br /> Core Functionality</h2>
        <p className="info">Developer dApps on Rootstock have never been easier</p>
      </div>
    </section>
  )
}

export default SectionCode
