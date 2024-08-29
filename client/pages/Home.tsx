import BookingEmbedded from '../components/BookingEmbedded.tsx'
// import Mailchimp from '../components/Mailchimp.tsx'
import Slider from '../components/Slider.tsx'

function Home() {
  return (
    <div>
      <Slider />
      <div className="content-container">
        <p>{`Hi, I’m Andrew, a massage therapist with 6 years of experience. I specialise in Deep Tissue, Sports, Relaxation, and Prenatal massage.`}</p>
        <p>
          My mission is to relieve your tensions, heal your injuries and help
          you find lasting relief!
        </p>
        <p>{`Most people come to me because I'm strong, attentive & have a good sense of the perfect pressure. My space is always warm & you will leave feeling lighter than when you came in.`}</p>

        <p>
          <strong>{`I use a combination of techniques to help you achieve results, whether that's to:`}</strong>
        </p>
        <ul className="ml-5">
          <li>🦵 Overcome injury</li>
          <li>😌 Relieve pain</li>
          <li>🙌 Release soft tissue</li> <li>💆 Alleviate tension</li>
          <li>🏃‍♀️‍➡️ Restore freedom of movement</li>
          <li>🚵🏽‍♂️ Prepare for or recover from an event</li>
          <li>💆‍♀️ Or simply to relax</li>
        </ul>

        <p>
          {`I'm passionate about helping people live pain-free lives and believe that cultivating balance in our physical & mental well-being is key. I know how challenging it is to find that balance with lives outside of maintenance, so I focus on finding the small things that provide the biggest impact.`}
        </p>

        <p>
          My goal is to help you find lasting relief, but if you love regular
          maintenance massages, you’re always welcome! I tailor each session to
          your preferences, whether you prefer deep tissue work or a lighter
          touch.
        </p>
      </div>
      {/* google-review-rating */}
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div className="elfsight-app-e536fd01-894d-49c4-a114-2518c253167c"></div>
      {/* Online Booking */}
      <BookingEmbedded />
      {/* <Mailchimp /> */}
    </div>
  )
}
export default Home
