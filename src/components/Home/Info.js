import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-5">
              Doggo ipsum smol borking doggo with a long snoot for pats waggy
              wags very jealous pupper snoot blep vvv corgo, bork heckin good
              boys heckin heck extremely cuuuuuute. Heckin good boys doge long
              water shoob waggy wags fat boi stop it fren, pupper you are doin
              me a concern pats vvv. Heck many pats fat boi pupper clouds
              puggorino floofs, very hand that feed shibe long doggo heckin
              angery woofer much ruin diet. Noodle horse aqua doggo puggorino
              very hand that feed shibe heckin good boys waggy wags, blop
              puggorino doing me a frighten waggy wags. You are doing me a
              frighten corgo big ol pupper you are doin me a concern tungg
              extremely cuuuuuute doge, snoot very good spot super chub smol
              borking doggo with a long snoot for pats. Tungg borkf stop it fren
              blep most angery pupper I have ever seen doing me a frighten, blop
              corgo you are doing me the shock very hand that feed shibe. Waggy
              wags shibe pupperino borkdrive very hand that feed shibe
              shooberino, wow such tempt very jealous pupper stop it fren wow
              such tempt.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-plum">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
