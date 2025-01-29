import leafyMassageSpace from '../../../images/slider/massage-space-leafy.webp'
import andrewMassaging from '../../../images/slider/andrew-massaging.webp'
import neckMassage from '../../../images/slider/Andrew-Bolton-Sports-Massage(sm).webp'
import malasana from '../../../images/andrew/Malasana.webp'
import Reviews from '../../components/Reviews'
import React from 'react'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Massage & Prices - Andrew Bolton Sports Massage',
  description:
    'Explore professional massage services with options like deep tissue, sports, and relaxing massages. Affordable prices from $55 for 30 minutes to $90 for 60 minutes. Intro offer available. Book now for a personalized experience tailored to your needs.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/massageprices',
  },
}
export default function massageprices() {
  return (
    <div>
      <div className="heading-wrapper">
        <h1 className="heading center italic">Massage</h1>
      </div>
      <div className="content-container">
        <div className="row">
          <div className="column center">
            <h2>Massage Prices</h2>
            <p>
              30 mins - $60
              <br />
              45 mins - $80
              <br />
              60 mins - $100
              <br />
              75 mins - $120
              <br />
              90 mins - $140
              <br />
              120 mins - $190
            </p>
          </div>
          <div className="column center">
            <h2>Intro offer</h2>
            <p>
              60 mins - $89
              <br />
              75 mins - $109
              <br />
              90 mins - $129
              <br />
            </p>
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row column-reverse">
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
              src={leafyMassageSpace.src}
              alt="Leafy massage space"
            />
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={andrewMassaging.src}
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
        <div className="break-line"></div>

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
              src={neckMassage.src}
              alt="Calm relaxing massage"
            />
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={malasana.src}
              alt="Malasana in nature"
            />
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
        <div className="break-line"></div>
      </div>

      <Reviews />
    </div>
  )
}
