// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

function refundcancellations() {
  return (
    <>
      <div className="heading-wrapper">
        <h1 className="heading">Refund & Cancellation Policy</h1>
      </div>
      <div className="content-container">
        <h2>Refunds</h2>
        <p>
          If you cancel your appointment, and can give at least 24 hours notice
          before the massage, we can reschedule your appointment or (if needed)
          I can issue a refund via your initial payment method.
        </p>
        <p>
          If you paid online (via stripe/card), your refund may be minus the
          stripe fee, as stripe do not refund their fees. Their fees can be
          found{' '}
          <a
            className="font-semibold underline"
            href="https://stripe.com/en-nz/pricing"
          >
            here.
          </a>
        </p>
        <h2>24 hours notice</h2>
        <p>
          In most cases you should be able to give me 24 hours notice. The more
          notice the better and it is greatly appreciated as it makes it easier
          to fill the slot!
        </p>
        <p>
          If you are sick or have an emergency just let me know as soon as
          possible.
        </p>
        <p>
          But if you have to cancel within 24 hours, and you just didn’t try to
          give me adequate notice then unfortunately I will have to charge you
          the smaller amount of: $50 or 50% of the appointment price.
        </p>
        <p>
          {` I have a limited number of appointments available each week, so last
        minute cancellations really hurt because I can't fill the gap at such
        short notice.`}
        </p>
        <p>
          If I manage to fill your appointment slot, then I won’t charge you the
          cancellation fee. 🙂
        </p>
        <h2>No-shows</h2>
        <p>
          Unfortunately I will have to charge you the smaller amount of: $50 or
          50% of the appointment price.
        </p>
        <p>
          No-shows hurt the most, because I can’t fill the appointment, and I
          spend my time getting ready for your massage.
        </p>
        <h2>Late to your appointment</h2>
        <p>
          {` If you're late then you will still be charged the price of the
        appointment you booked and the appointment will finish at its planned
        time.`}
        </p>
        <p>
          Please double check your appointment time and the traffic, so you can
          be here on time.
        </p>
        <p>
          If you’re 5 mins late then I may be able to make it up at the other
          end. But normally I can’t make up any more than that, and definitely
          can’t make any promises, as I have other appointments and things to do
          too.
        </p>
        <h4>If I cancel</h4>
        <p>
          If I have to cancel because I am sick or have an emergency, then we
          can reschedule if that works for you, otherwise I will fully refund
          any amount you have already paid.
        </p>
        <h4>Contact</h4>
        <p>
          The best way to contact me is email at:{' '}
          <a
            className="font-semibold underline"
            href="mailto:andrew@andrewboltonsportsmassage.com"
          >
            andrew@andrewboltonsportsmassage.com
          </a>{' '}
          let me know your name and situation. Or you can also text me on
          02041780923. Sometimes I can take a call, but I am often busy
          massaging.
        </p>
      </div>
    </>
  )
}

export default refundcancellations
