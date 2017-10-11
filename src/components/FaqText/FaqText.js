import React, { Component } from 'react';

class FaqText extends Component {

  handleScrollTop(ref) {

    let faqText = document.querySelector(".faq-text");

    if (ref.classList.contains("read-more")) {
      faqText.scrollTop += 30;
    } else {
      faqText.scrollTop -= 30;
    }
  }

  render() {
    // console.log(this.refs);
    return (
      <div className="faq-text">
        <div className="faq-text-wrap">
          {this.props.visible === "Basics" ?
            <div>
              <h4>Who are we?</h4>
              <p>We have a simple vision, to make the equestrian life better and more fun. In the three months that passed since we launched equilab we have built a community of 20 000 riders and together we have now tracked ten-thousands of hours of riding. The response has been enormous and we can't wait to add more functionality that we hope will further improve the equestrian life.</p>
              <h4>How does it work?</h4>
              <p>We use the sensors in your phone to measure the movements of your horse so you need to be on the horse while measuring. It is important to keep the phone is in a place were it lies steady, the best place is in your pants pocket but other places were it lies steady works as well. After the training you press stop the activity and let our algorithms to their magic.</p>
              <h4>What can I do with the information?</h4>
              <p>We are building tools to give you direct feedback on your training based on research but until we are able to realise this you will need to make your own conclusions on the information. Common insights from users are that they do less canter than they think they do which may have an negative impact on the horse fitness. Another common insights is that riders distribute their circles uneven which can increase the risk of your horse getting injuried. There is a lot other important numbers to keep track of such as how you variate your exercises, how many jumps you do, how often you exercise but as for now you will need to make your own conclusions on what is a correct way for your horse.</p>
              <h4>Who are we?</h4>
              <p>We have a simple vision, to make the equestrian life better and more fun. In the three months that passed since we launched equilab we have built a community of 20 000 riders and together we have now tracked ten-thousands of hours of riding. The response has been enormous and we can't wait to add more functionality that we hope will further improve the equestrian life.</p>
              <h4>How does it work?</h4>
              <p>We use the sensors in your phone to measure the movements of your horse so you need to be on the horse while measuring. It is important to keep the phone is in a place were it lies steady, the best place is in your pants pocket but other places were it lies steady works as well. After the training you press stop the activity and let our algorithms to their magic.</p>
              <h4>What can I do with the information?</h4>
              <p>We are building tools to give you direct feedback on your training based on research but until we are able to realise this you will need to make your own conclusions on the information. Common insights from users are that they do less canter than they think they do which may have an negative impact on the horse fitness. Another common insights is that riders distribute their circles uneven which can increase the risk of your horse getting injuried. There is a lot other important numbers to keep track of such as how you variate your exercises, how many jumps you do, how often you exercise but as for now you will need to make your own conclusions on what is a correct way for your horse.</p>
            </div>
          : <div></div>}
          {this.props.visible === "Privacy" ? <h4>Privacy</h4> : <div></div>}
          {this.props.visible === "Usage" ? <h4>Usage</h4> : <div></div>}
          {this.props.visible === "Functionality" ? <h4>Functionality</h4> : <div></div>}
          {this.props.visible === "Other" ? <h4>Other</h4> : <div></div>}
        </div>
        <div className="faq-text-marginal">
          <div className="read-controls">
            <div ref="readMore" onClick={() => this.handleScrollTop(this.refs.readMore)} className="read-more small-bold">+</div>
            <div ref="readLess" onClick={() => this.handleScrollTop(this.refs.readLess)} className="read-less small-bold">-</div>
          </div>
        </div>
      </div>
    );
  }

}

export default FaqText;
