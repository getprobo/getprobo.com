import lottie, {type AnimationItem} from 'lottie-web';
import {customElementDefine} from "../lib/dom.ts";


customElementDefine('framework-badge', () => {
  return class FrameworkBadge extends HTMLElement {
    animation: AnimationItem | null = null;

    connectedCallback() {
      this.play();
    }

    play() {
      // TODO : Stop the animation then the badge is not visible anymore
      const raw = this.getAttribute('name') || '';
      const filename = raw.replaceAll(' ', '');
      this.animation = lottie.loadAnimation({
        container: this,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: `/frameworks/${filename}.json`
      });
      this.animation.addEventListener('complete', () => {
        if (!this.animation) {
          return;
        }
        this.animation?.goToAndPlay(300, true);
      })
    }

    disconnectedCallback() {
      this.animation?.destroy();
    }
  }
})
