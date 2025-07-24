import indiaAndrew from '../../../images/slider/India2.webp'
import andrewInTheStudio from '../../../images/andrew/AndrewInTheStudio.webp'
import yogaToes from '../../../images/andrew/yoga-toes.webp'
import crescentLunge from '../../../images/andrew/Crescent-lunge.webp'
import massageTable from '../../../images/studio/massage-table.webp'
import family from '../../../images/andrew/Family.webp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Andrew Bolton | Sports Massage Therapist Christchurch',
  description:
    'Meet Andrew Bolton, experienced sports & deep tissue massage therapist in Christchurch. 7+ years helping athletes and active people with pain relief and recovery.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/about',
  },
}

function About() {
  return (
    <div>
      <div className="heading-wrapper">
        <h1 className="sr-only">
          About Andrew Bolton - Massage Therapist Christchurch
        </h1>
        <h2 className="heading center mt-0 italic">About Me</h2>
      </div>

      <div className="content-container">
        <div className="row column-reverse">
          <div className="column">
            <h2 className="p-heading text-xl">
              {`I'm passionate about pain-free living and creating habits to
                improve life & well-being!`}
            </h2>
            <p>
              I have personal experience overcoming pain caused by various
              things. Massage & Yoga have played a huge role in managing my body
              along with many other practices. I believe that a variety of
              movement, strength & wellbeing practices are key, but that the
              most important thing is finding something you enjoy.
            </p>
          </div>

          <div className="column image-column">
            <img
              className="col-img"
              src={indiaAndrew.src}
              alt="Andrew in India"
            />
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={andrewInTheStudio.src}
              alt="Andrew in the studio"
            />
          </div>
          <div className="column">
            <h2 className=" p-heading text-xl">
              My journey into massage and yoga
            </h2>
            <p>
              I started practising yoga in 2011 because I had a sore back &
              needed more movement in my life. I got my first-ever massage then
              too. It felt great to be looking after my body & over the
              following years, I got stronger, more mobile and was in less pain.
            </p>
            <p>
              I did a yoga teacher training with Tony Sanchez in 2014, then
              another 200hr training with Power Living Perth in 2016. I taught
              yoga in Perth for a year, before moving to Wales where I continued
              teaching while studying Sports Massage.
            </p>
            <p>
              {`I was massaging from home as part of the course & I just never
              stopped. We returned to Christchurch in 2019 & I've been helping
              people sort out their bodies since. I continue to learn from
              science & explore different approaches to massage, health &
              wellbeing.`}
            </p>
          </div>
        </div>
        <img
          className="central-img"
          src={yogaToes.src}
          alt="yoga on a cliffs edge"
        />
        <div className="break-line"></div>

        <div className="row column-reverse">
          <div className="column">
            <h2 className=" p-heading text-xl">Movement</h2>
            <p>
              My main goals are to avoid injuries, improve overall functionality
              & age well. I believe that having a diversity of movement is the
              best way to do that.
            </p>
            <p>
              My current movement practices include: hikes, yoga, mobilisation,
              kettlebell & bodyweight workouts, pilates, skipping, slacklining,
              climbing, breathwork, dancing, massage, self-massage, circus, cold
              plunges, short runs, sauna & rucking.
            </p>
            <p>
              Our culture is sitting too much & so do I! I think we need to move
              more regularly throughout each day while thinking about strength &
              mobility.
            </p>
          </div>
          <div className="column image-column">
            <img
              className="col-img"
              src={crescentLunge.src}
              alt="crescent lunge yoga pose"
            />
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row">
          <div className="column image-column">
            <img
              className="col-img"
              src={massageTable.src}
              alt="Massage table in studio"
            />
          </div>
          <div className="column">
            <h2 className=" p-heading text-xl">Ambience & Experience</h2>
            <p>
              I take care to create a cosy space surrounded by lush plants,
              natural wood & relaxing fabric in the ceiling. I always have a
              warm room for you & an electric blanket in the winter! Soft
              lighting for relaxation, aided by some very chill music.
            </p>
            <p>
              I love a good chat but also enjoy the quiet if that’s what you
              prefer, which often helps you focus on fully relaxing into the
              massage.
            </p>
            <p>
              This ambient environment helps get the best out of a massage.
              Especially if you can master relaxing the muscles being massaged
              with every exhale.
            </p>
          </div>
        </div>
        <div className="break-line"></div>

        <div className="row column-reverse">
          <div className="column">
            <p>
              I live in Heathcote Valley with my wife and two kids. We love
              being close to the sea and hills, and spend time gardening,
              exploring nature, and staying active as a family.
            </p>
            <p>
              Outside of massage, I also enjoy web development and am currently
              working on a language learning app.
            </p>
          </div>
          <div className="column image-column">
            <img
              className="col-img"
              src={family.src}
              alt="andrew and his family"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
