
export default function Home() {
  return (
    <main>
      <h1>Hi! My name is <span>Chee Ming</span>.</h1>
      <h2>I am a software engineer by training.</h2>
      <h3 className="lowlight">Previously, I worked in <a href="https://www.grab.com/">Grab</a> as a Engineering Manager building out <a href="https://forbusiness.grab.com">products for B2B customers</a> and improving internal developer experience and tooling for our thousands of Grab software engineers. And before that I also co-founded <a href="http://infinite-code.com">Infinite Code</a>, a software development firm, building custom web and mobile apps.</h3>
      <h3>
        I prefer to code in <a href="https://www.python.org/">Python</a>.<br />
        I like to roasts and brew my own coffee. And I also bake my own pizza and bread these days.<br />
        I am a <a href="http://en.wikipedia.org/wiki/Kuala_Lumpur">KL</a> native and spent a bit of time in <a href="http://en.wikipedia.org/wiki/Beijing">The Jing</a> & <a href="https://en.wikipedia.org/wiki/Singapore">Singapore</a> and I call <a href="https://en.wikipedia.org/wiki/Dali_City">Dali</a> now home.<br />
      </h3>

      <h4>Random Thoughts</h4>
        <ul className="posts">
          <li><span className="time">FIXME</span><a href="">FIXME</a><div className="clearboth"></div></li>

        </ul>

      <p className="online_services">You can also find me here:</p>
      <ul className="online_services">
        <li><a href="https://x.com/cheeming">Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/cheeming">Linkedin</a></li>
        <li><a href="https://github.com/cheeming">GitHub</a></li>
        <li><a href="https://stackoverflow.com/users/28836/cheeming">Stack Overflow</a></li>
      </ul>

      <div className="updated_time">
      <p>
        Last updated: <span className="time">FIXME</span>,
        Powered by <a href="https://nextjs.org/">NextJS</a>
      </p>
      </div>
    </main>
  );
}
