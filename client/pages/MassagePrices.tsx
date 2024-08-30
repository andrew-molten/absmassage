import leafyMassageSpace from '../../images/slider/massage-space-leafy.webp'
import andrewMassaging from '../../images/slider/andrew-massaging.webp'
import neckMassage from '../../images/slider/Andrew-Bolton-Sports-Massage(sm).webp'
import malasana from '../../images/andrew/Malasana.webp'
// import crescentLunge from '../../images/andrew/Crescent-lunge.webp'

function MassagePrices() {
  return (
    <div>
      <div className="heading-wrapper">
        <h1 className="heading center">
          <em>Massage</em>
        </h1>
      </div>
      <div className="content-container">
        <div className="row">
          <div className="column center">
            <h2>Massage Prices</h2>
            <p>
              45 mins - $70
              <br />
              60 mins - $90 - 3 for $240
              <br />
              75 mins - $112 - 3 for $305
              <br />
              90 mins - $135 - 3 for $375
              <br />
              120 mins - $180
            </p>
          </div>
          <div className="column center">
            <h2>Intro offer</h2>
            <p>
              60 mins - $75
              <br />
              75 mins - $95
              <br />
              90 mins - $115
              <br />
            </p>
          </div>
        </div>
        {/* <!-- <div className="google-review-rating"> --> */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <div className="elfsight-app-e536fd01-894d-49c4-a114-2518c253167c"></div>

        <div className="row column-reverse pt-4">
          <div className="column">
            <h2>Deep Tissue Massage</h2>
            <p>
              Deep tissue massage uses firm pressure with slow strokes to work
              deeply into tense areas and those around them releasing chronic
              tension. Especially effective for persistent tightness in your
              body.
            </p>
            <p>
              Not just a “hard massage”, the specific lengthening & the deep
              work into muscles, fascia & tendons throughout the body improve
              joint movement, tension, posture & overall well-being, or to aid
              in a quick recovery from injury.
            </p>
          </div>
          <div className="column image-column">
            <img
              className="col-img"
              src={leafyMassageSpace}
              alt="Leafy massage space"
            />
          </div>
        </div>
        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={andrewMassaging}
              alt="Deep Tissue Massage"
            />
          </div>
          <div className="column">
            <h2>Sports Massage</h2>
            <p>
              Sports massage can be more dynamic, often borrowing deep tissue
              and other techniques such as kneading, compressions & circular
              friction depending on what you need.
            </p>

            <p>
              It’s beneficial for athletes, active people & anybody with
              tension. Used to overcome injury, help with training, increase
              flexibility, relieve tension and reduce fatigue, injury & delayed
              onset muscle soreness.
            </p>
            <p>
              We might target specific problem areas or do a general full-body
              massage. Either way, I tailor each massage to your needs.
            </p>
          </div>
        </div>
        <div className="row column-reverse">
          <div className="column">
            <h2>Relaxing massage</h2>
            <p>
              A whole-body therapeutic massage using long rhythmic strokes to
              relax your muscles & joints, stimulate blood flow and calm your
              nervous system.
            </p>
            <p>
              I use pressure according to your preference, with relaxing music
              playing. Your choice to have a chat or go quiet.
            </p>
            <p>
              You can request areas you want to focus on and I will work to
              relax any tension away.
            </p>
          </div>
          <div className="column image-column">
            <img
              className="col-img"
              src={neckMassage}
              alt="Calm relaxing massage"
            />
          </div>
        </div>
        <div className="row">
          <div className="column image-column">
            <img className="col-img" src={malasana} alt="Malasana in nature" />
          </div>
          <div className="column">
            <h2>Private yoga session</h2>

            <p>{`I've been practising yoga since 2010 & teaching since 2016.`}</p>
            <p>
              {`I keep learning from other teachers and movement experts. I've worked with the super flexible and inflexible! With people doing arm balances & beginners mastering the basics.`}
            </p>
            <p>
              {`Depending on what your needs are the practice can be slow and methodical, flowy, strong & powerful, meditative, fast-paced, relaxing, or a combination of styles. `}
            </p>
            <p>
              Learn how to align your body, moving with the breath in a safe way
              to build strength & improve mobility.
            </p>
            <p>
              This is a great space to do yoga in, with the freedom to focus on
              your yoga goals, get in touch if you have any questions.
            </p>
          </div>
        </div>
        <div className="row column-reverse">
          {/* <div className="column">
            <h2>Group yoga classes</h2>
            <p>
              {`I have not been teaching many group yoga classes, as I can’t quite
              fit them in amongst massages, family life & everyone elses
              timetables - but I hope to get these back up and running in the
              summer. They will be BYO mat as I don't have enough mats for a
              group.`}
            </p>
            <p>
              I can however guide private group yoga classes in the styles
              Vinyasa, Gentle, Beginners, Hot yoga (26 & 2) or Yin yoga. And can
              fit a class of 4 comfortably into the studio, 6 will work too, or
              8 packed in like sardines.
            </p>
            <p>
              {`If you're interested in the above,`} please
              <a href="Contact.html">get in touch</a> with an outline of what
              you have in mind and we can work together to make it happen.
            </p>
          </div> */}
          {/* <div className="column image-column">
            <img
              className="col-img"
              src={crescentLunge}
              alt="Yoga pose - cresent lunge"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default MassagePrices
