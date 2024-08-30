import indiaAndrew from '../../images/slider/India2.webp'

function About() {
  return (
    <div>
      <div className="heading-wrapper">
        <h1 className="heading">About Me</h1>
      </div>
      <div className="content-container">
        <div className="row column-reverse">
          <div className="column">
            <h3 className="center text-lg">
              <strong>
                {`I'm passionate about pain-free living and creating habits to
                improve life & well-being so we can all feel better and have
                more fun!`}
              </strong>
            </h3>
            <p>
              With personal experience in overcoming pain caused by too many
              skydives with a parachute renowned for hard openings, playing
              rugby(in the front row), physically demanding jobs & tree climbing
              gone wrong, I've discovered the transformative power of massage,
              yoga, and other practices.
            </p>
          </div>
          <div className="column image-column">
            <img
              className="col-img under-heading"
              src={indiaAndrew}
              alt="Andrew in India"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
