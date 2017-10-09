import React from "react";
import "./Hire.css";
import Button from "../Button";
const Hire = props => (
  <div className="hire-wrap">
    <div className="hire">
      <div className="hire-item-a">
        <h1>We're growing!</h1>
        <h2>And we want to meet awesome new people.</h2>
        <h4>If you don't feel like reading, just come by for a coffee instead! We are located at Holtermansgatan 1c, Gothenburg</h4>
      </div>
      <div className="hire-item hire-item-b">
        <h3>React Native</h3>
        <h4>The task at hand</h4>
        <p>Equilab are currently looking for at least two new developers. We are a small team so if you are interested there is a good possibility to do more than app development. For example some backend (python & node), design or even play around with our machine learning.</p>
        <h4>Does some of these things describe you?</h4>
        <p>Breaking Things, Curious, Swift, Java (testing Kotlin), Firebase, Realm, Fastlane, A/B testing, Sketchapp, Slack and Trello.</p>
        <br />
        <Button text="Apply here" />
      </div>
      <div className="hire-item-c"></div>
      <div className="hire-item hire-item-d">
        <h3>Pattern Recognition/DevOps</h3>
        <h4>The task at hand</h4>
        <p>Equilab have a growing amount of information to process and your task will be to help us maximize what we can gain from this data. We are a small team so if you are interested there is also a good opportunity to do more than Pattern Recognition/DevOps development.</p>
        <h4>Does some of these things describe you?</h4>
        <p>Breaking Things, Curious, Tensorflow, Neural Network, Fast Learner, Python, Google Cloud, Tech Savvy, Slack and Trello.</p>
        <br />
        <Button text="Apply here" />
      </div>
    </div>

  </div>

)

export default Hire;
