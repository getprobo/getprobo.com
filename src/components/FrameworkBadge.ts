import lottie, {type AnimationItem} from 'lottie-web/build/player/lottie_light';

/**
 * Custom element to handle displaying animated framework badges
 */
export class FrameworkBadge extends HTMLElement {

  animation: AnimationItem | null = null;

  connectedCallback() {
    this.play();
  }

  play() {
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


customElements.define('framework-badge', FrameworkBadge);

