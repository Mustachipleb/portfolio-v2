import type { Component } from 'solid-js';
import cn from 'classnames';

import styles from './App.module.css';
import mainBgImg from './assets/bg-main.png';
import portraitImg from './assets/portrait.png';

const App: Component = () => {
  return (
    <>
      <div class={cn('absolute left-0 top-0 -z-10 h-full w-full', styles['main-bg'])}></div>
      <div class="absolute left-0 top-0 -z-20 min-w-full">
          <div class={cn('absolute z-10 h-full min-w-full', styles['main-gradient'])}></div>
          <img src={mainBgImg} class="object-cover min-w-full h-screen" />
      </div>
      <main class="px-20 lg:px-40 pt-40 text-white">
      <div class={cn(styles.container)}>
        <div class={cn(styles.portrait)}>
          <div class="h-fit my-auto">
              <img src={portraitImg} class={cn('translucent-border-xl block max-h-fit w-full my-auto rounded-full', styles['translucent-border'])} />
          </div>
        </div>
        <div class={cn(styles.title)}>
          <h1 class='text-5xl'>Nicolas Van Damme Hhhhhhhhhhhhhhhhh</h1>
        </div>
        <div class={cn(styles.divider)}>
          <hr class={styles['translucent-border']} />
        </div>
        <div class={cn(styles.subtitle)}>
          <h2 class="inline text-6xl font-thin flex-1 align-text-top">Developer<br/>Hobby System Administrator</h2>
        </div>
      </div>
      {/* <main class="px-20 lg:px-40 pt-40 text-white">
          <div class="flex"> */}
              {/* <div class={cn("flex flex-col justify-center basis-4/6 relative gap-3", styles['intro-box'])}>
                <div class="grow flex flex-col justify-center"><h1 class='text-5xl'>Nicolas Van Damme Hhhhhhhhhhhhhhhhh</h1></div>
                <div class='grow-0 flex flex-col justify-center'>
                  <hr class={styles['translucent-border']} />
                </div>
                <div class="grow flex flex-col justify-center">Content two</div>
              </div> */}
              {/* <div class="flex flex-col justify-center basis-4/6 relative gap-3">
                  <h1 class="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold flex-1 align-text-bottom">Nicolas<br/>Van Damme</h1>
                  <div class="absolute w-full left-0 top-1/2">
                      <hr class={styles['translucent-border']} />
                  </div>
                  <h2 class="inline text-6xl font-thin flex-1 align-text-top">Developer<br/>Hobby System Administrator</h2>
              </div> */}
              {/* <div class="basis-2/6 h-fit my-auto">
                  <img src={portraitImg} class={cn('translucent-border-xl block max-h-fit w-full my-auto rounded-full', styles['translucent-border'])} />
              </div>
          </div> */}
      </main>
    </>
  );
};

export default App;
