console.clear();

const { gsap } = window;


gsap.registerPlugin(MorphSVGPlugin);

gsap.ticker.fps(18) // control the framerate

const MORPHS = {
	good: gsap.utils.toArray("#morphs #good path"),
	mood: gsap.utils.toArray("#morphs #mood path")
};

const TL_DEFAULTS = {
	defaults: {
		duration: 0.8,
		repeat: -1,
		ease: "power1.out",
		yoyoEase: true,
		stagger: 0.26
	}
};

const SEEK_DURATION = TL_DEFAULTS.defaults.duration * 2;
const TIMESCALE = 1.12; 
// well this is not needed. But, added just to in case you didn't knew that you dont need to adjust the 'duration' prop of every timeline separately in your code. Just scale the time using `.timeScale(TIME)` of a gsap timeline.

gsap
	.timeline({
		...TL_DEFAULTS
	})
	.to("#originals #good path", {
		morphSVG: (i) => MORPHS.good[i]
	})
	.seek(SEEK_DURATION)
	.timeScale(TIMESCALE);

gsap
	.timeline({
		...TL_DEFAULTS
	})
	.to("#originals #mood path", {
		morphSVG: (i) => MORPHS.mood[i]
	})
	.seek(SEEK_DURATION)
	.timeScale(TIMESCALE);
