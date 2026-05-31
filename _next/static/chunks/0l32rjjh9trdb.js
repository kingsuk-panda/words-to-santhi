(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40924,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={assign:function(){return h},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});function a(e){let t={};for(let[o,n]of e.entries()){let e=t[o];void 0===e?t[o]=n:Array.isArray(e)?e.push(n):t[o]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[o,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(o,i(e));else t.set(o,i(n));return t}function h(e,...t){for(let o of t){for(let t of o.keys())e.delete(t);for(let[t,n]of o.entries())e.append(t,n)}return e}},47589,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={DecodeError:function(){return w},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return p},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return l},isAbsoluteUrl:function(){return h},isResSent:function(){return y},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return I}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,o=!1;return(...n)=>(o||(o=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,h=e=>s.test(e);function u(){let{protocol:e,hostname:t,port:o}=window.location;return`${e}//${t}${o?":"+o:""}`}function l(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function y(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let o=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(o&&y(o))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class w extends Error{}class p extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function I(e){return JSON.stringify({message:e.message,stack:e.stack})}},99355,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},90037,e=>{"use strict";var t=e.i(51466),o=e.i(79959);e.s(["default",0,function({letter:e,onClose:n}){let[r,a]=(0,o.useState)("envelope"),i=(0,o.useCallback)(()=>{try{let t=JSON.parse(localStorage.getItem("opened-letters")||"[]");t.includes(e.id)||(t.push(e.id),localStorage.setItem("opened-letters",JSON.stringify(t)),window.dispatchEvent(new Event("storage")))}catch{}},[e.id]);return(0,o.useEffect)(()=>{if("opening"===r){let e=setTimeout(()=>{a("letter"),i()},1200);return()=>clearTimeout(e)}},[r,i]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]),(0,o.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),(0,t.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4",onClick:e=>{e.target===e.currentTarget&&n()},role:"dialog","aria-modal":"true","aria-label":e.title,children:["envelope"===r&&(0,t.jsxs)("div",{className:"text-center animate-fade-in",children:[(0,t.jsx)("button",{onClick:()=>a("opening"),className:"group cursor-pointer bg-transparent border-none","aria-label":"Open letter",children:(0,t.jsxs)("div",{className:"w-48 h-56 sm:w-56 sm:h-64 bg-card rounded-lg border border-accent/30 relative flex items-center justify-center mx-auto transition-all duration-300 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20",children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:"w-16 h-16 text-accent/70 group-hover:text-accent transition-colors",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,t.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),(0,t.jsx)("path",{d:"M2 8l10 6 10-6"})]}),(0,t.jsx)("div",{className:"absolute bottom-4 left-4 right-4 text-center",children:(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Click to open"})})]})}),(0,t.jsx)("h2",{className:"mt-6 text-xl font-heading text-text",children:e.title}),(0,t.jsx)("p",{className:"mt-1 text-sm text-secondary",children:e.description}),(0,t.jsx)("button",{onClick:n,className:"mt-4 text-xs text-secondary hover:text-accent transition-colors","aria-label":"Close",children:"Close"})]}),"opening"===r&&(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("div",{className:"w-48 h-56 sm:w-56 sm:h-64 bg-card rounded-lg border border-accent/30 flex items-center justify-center mx-auto animate-envelope-open",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",className:"w-12 h-12 text-accent",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:(0,t.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})})}),"letter"===r&&(0,t.jsxs)("div",{className:"bg-card border border-accent/30 rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-letter-slide",children:[(0,t.jsxs)("div",{className:"sticky top-0 bg-card border-b border-accent/10 flex items-center justify-between p-4",children:[(0,t.jsx)("h2",{className:"text-lg font-heading text-accent pr-4",children:e.title}),(0,t.jsx)("button",{onClick:n,className:"text-secondary hover:text-text transition-colors shrink-0","aria-label":"Close letter",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),(0,t.jsx)("div",{className:"p-6 sm:p-8 text-text leading-relaxed whitespace-pre-line text-sm sm:text-base animate-fade-in",children:e.content})]})]})}])},24170,e=>{"use strict";let t=[{id:"when-you-need-a-laugh",title:"When You Need A Laugh",description:"For the days when everything feels too serious.",category:"letter",order:1,content:`Dear Santhi,

I have a theory about you. You laugh the hardest when you're trying not to.

You know the laugh I'm talking about. The one where you try to hold it in and it comes out anyway, all wrong and wonderful. That laugh could power a small city.

I'm writing this down because one day you might forget that you are genuinely hilarious. Not in a try-hard way. In a way that sneaks up on people and catches them off guard. You have this gift of finding absurdity in ordinary things, and I need you to know that it matters.

When life gets gray, I hope you remember the time we laughed until we couldn't breathe. I hope you remember that the world is full of ridiculous, wonderful things waiting to be found. And I hope you remember that somewhere, at any given moment, there is always something worth laughing about.

If you're reading this and you haven't laughed today, stop. Find something. A video. A memory. A stupid joke. Your laugh is too valuable to keep locked up.

You're allowed to find joy even on heavy days. Especially on heavy days.

With lots of hihihahas,
Your brooooooooooodaaaahhh,
Fantastic Kingsuk`},{id:"when-you-feel-alone",title:"When You Feel Alone",description:"A reminder that you are never truly alone.",category:"letter",order:2,content:`Dear Santhi,

There is a difference between being alone and being lonely. I hope you never confuse the two.

Being alone is a room with just you in it. Being lonely is feeling like nobody would notice if you disappeared. If you're reading this, I need you to know that I would notice.

I would notice because you leave marks everywhere you go. A conversation with you isn't just small talk. It's the thing I think about later when I'm driving or trying to fall asleep. You have a way of making people feel seen, and that is rare.

So on the days when you feel invisible, remember that you aren't. You're the person someone thinks about when they hear a song. You're the person someone wishes they could call. You're the person who made a difference just by existing in the same world as the rest of us.

If you feel alone right now, I'm sorry. I wish I could sit with you. I wish I could make you tea and say nothing at all, because sometimes that's what we need. But since I can't, I'll say this instead:

You are not forgotten. You are not invisible. You are not too much or not enough. You are a person who matters, fully and completely, exactly as you are.

And I am honored to know you.

Always,
Kingsuk`},{id:"when-you-think-youre-not-good-enough",title:"When You Think You're Not Good Enough",description:"For the voice in your head that is wrong about you.",category:"letter",order:3,content:`Dear Santhi,

Stop. Just stop.

I know that voice. The one that tells you you're falling short. The one that compares your behind-the-scenes to everyone else's highlight reel. The one that moves the goalpost every time you get close.

That voice is lying to you.

Here's what I know about you: You are the kind of person who worries about not being good enough. And that alone tells me you care more than most people ever do. People who don't care don't worry. People who don't try don't question themselves. The fact that you're asking means you're already doing better than you think.

Whatever you're measuring yourself against right now, I need you to zoom out. Think about five years ago. Think about how far you've come. Think about the things you've survived, the things you've learned, the ways you've grown. That person from five years ago would look at you now and be amazed.

You are enough. Not someday. Not after you achieve one more thing. Right now. Today.

The world will try to convince you otherwise because a doubtful you is easier to control. Don't let it.

You are good enough. You always have been.

Believing in you,
Kingsuk`},{id:"when-somebody-hurt-you",title:"When Somebody Hurt You",description:"When the wounds are fresh and words feel inadequate.",category:"letter",order:4,content:`Dear Santhi,

I'm sorry.

I don't know who hurt you or what they did. I don't know if it was intentional or accidental, a single moment or a long unraveling. But I'm sorry that it happened.

You didn't deserve it.

Let me say that again because it matters: You did not deserve it.

People hurt people for their own reasons. Sometimes those reasons have nothing to do with you. Sometimes they're carrying pain they don't know how to handle. Sometimes they make mistakes. None of that excuses it, but none of it means you were wrong for trusting, for caring, for opening yourself up.

Don't let this moment make you hard. The world already has enough people who've closed themselves off. We need you soft. We need you kind. We need you to keep being the person who feels things deeply, even when it hurts.

Feel what you need to feel. Cry if you need to. Be angry. Be sad. Don't skip the hard part. But when you're ready, remember that this moment is temporary. The hurt will fade. Trust will feel possible again.

And until then, I've got your back. From wherever I am.

Your bro among bros, not made for hoes,
Kingsuk`},{id:"when-you-feel-misunderstood",title:"When You Feel Misunderstood",description:"For when the world doesn't seem to get you.",category:"letter",order:5,content:`Dear Santhi,

Being misunderstood is one of the loneliest feelings in the world.

You're speaking clearly, but they're hearing something else. You're showing up honestly, but they're seeing a version of you that isn't real. It's exhausting trying to explain yourself over and over.

I want you to know that being misunderstood doesn't mean you're wrong. Some of the most important people in history were deeply misunderstood. Artists. Inventors. Thinkers. People who saw the world differently because they were wired differently. People who refused to shrink themselves to fit into small spaces.

Maybe you're ahead of your time. Maybe you're in the wrong room. Maybe the people around you just need more time to catch up to where you already are.

But here's what I know: The people who truly matter will take the time to understand you. They will listen. They will ask questions. They will try. And if someone isn't willing to do that, they haven't earned access to the person you are.

Keep being yourself. Clearly. Unapologetically. The right people will find you.

With understanding,
Kingsuk`},{id:"when-you-miss-me",title:"When You Miss Me",description:"Distance is temporary. Friendship is not.",category:"letter",order:6,content:`Dear Santhi,

I miss you too.

If you're reading this, it means there's distance between us. Maybe it's physical. Maybe it's time. Maybe life just got loud and we lost track of each other for a while.

I want you to know that missing someone is not a sign that something is broken. It's a sign that something was real. You can't miss something that never mattered. The ache you feel is the shape of a friendship that fits.

And our friendship fits. It always has.

Some friendships burn bright and fast. Ours isn't like that. Ours is the kind that can sit in silence for months and pick up exactly where it left off. The kind that doesn't need constant proof of existence. The kind that exists whether or not we're in the same room, the same city, or the same decade.

So when you miss me, know that I'm out there somewhere thinking about you too. Maybe at the exact same moment. And when the universe aligns and our paths cross again, we'll pick up right where we left off.

Until then, I'm here. In these letters. In your memories. In the quiet moments when you feel someone thinking of you.

That someone is me.

Forever your friend,
Kingsuk`},{id:"when-you-forget-your-worth",title:"When You Forget Your Worth",description:"A letter to remind you of your value.",category:"letter",order:7,content:`Dear Santhi,

You are not your worst day.

You are not the mistake you made last year. You are not the thing someone said about you. You are not the opportunity that didn't work out. You are not the version of yourself that you've already outgrown.

You are the sum of every comeback. Every time you chose to try again. Every morning you got out of bed when it would have been easier to stay. Every kind word you offered when you had nothing to gain. Every moment you chose hope over despair.

That is your worth. Not what you produce. Not what you achieve. Not how others see you. But who you are at your core.

And who you are is someone of immense value. Not because of what you do, but because of who you are. Because you exist. Because you try. Because you care.

If you've forgotten your worth, let this be your reminder: You are priceless. You are irreplaceable. You are worthy of love, respect, and happiness. Not because you earned it. Because you exist.

Never forget.

With all my respect,
Kingsuk`},{id:"after-your-worst-day",title:"After Your Worst Day",description:"For when you've survived the unsurvivable.",category:"letter",order:8,content:`Dear Santhi,

You made it.

I don't know what "it" was. I don't know if it was a loss, a failure, a heartbreak, or just one of those days where everything went wrong at once. But whatever it was, you're on the other side of it now.

And I'm proud of you.

Not the kind of proud that comes from achievement. The kind of proud that comes from watching someone go through something awful and keep going. The kind of proud that has nothing to do with success and everything to do with survival.

You don't have to be okay yet. You don't have to have learned a lesson. You don't have to find the silver lining. Sometimes the only thing you need to do is acknowledge that you got through it and that was enough.

Rest now. Be gentle with yourself. Tomorrow you might feel stronger, or you might feel worse, and both are okay. Healing isn't a straight line. It's a messy, nonlinear, confusing process that looks different for everyone.

But you're here. You're alive. You made it through a day you didn't think you could survive.

That matters. You matter.

Rest now. Tomorrow is another day.

With love and admiration,
Kingsuk`},{id:"if-we-ever-lose-touch",title:"If We Ever Lose Touch",description:"A letter for the possibility of time and distance.",category:"letter",order:9,content:`Dear Santhi,

If you're reading this, it's been a while. Maybe we haven't spoken in months. Maybe years. Maybe life just happened the way life does, and somewhere along the way we became people who used to be close.

I need you to know that if we've lost touch, it's not because you stopped mattering.

Friendships drift for a thousand reasons. People move. Careers change. Priorities shift. Seasons pass. None of it means that what we had was fake. None of it means I don't think about you.

I do think about you. I think about the conversations we had, the things we laughed about, the way you saw the world. I think about the person you were when I knew you, and I wonder about the person you've become.

If we've lost touch, I hope you're okay. I hope life has been good to you. I hope you've found people who see you the way I always did. I hope you've become everything you wanted to become.

And I hope that if we ever meet again, we can pick up right where we left off. Because some friendships don't need daily maintenance. Some friendships exist in the space between hellos, patient and waiting and ready.

If we've lost touch, consider this my hello. I'm still here. I still care. I always will.

Yours,
Kingsuk`},{id:"if-nobody-understands-you",title:"If Nobody Understands You",description:"For when you feel like you speak a different language.",category:"letter",order:10,content:`Dear Santhi,

The world is not built for people who feel things deeply.

It's built for efficiency and productivity and moving on. It's built for small talk and surface-level connections. It's built for people who can smile and nod and pretend everything is fine.

And you? You feel things all the way down. You notice the small things. You care about things that other people overlook. You ask questions that make people uncomfortable because they've never stopped to think about them.

This makes you different. And different can feel like a curse when you're surrounded by people who don't speak your language.

But I want you to know that your depth is not a flaw. It's a gift. The world needs people who feel things deeply. People who notice. People who care. People who refuse to let important things fade into the background.

If nobody understands you right now, it's because you're operating on a different frequency. And that's okay. Your people are out there. The ones who speak your language. The ones who will look at you and say, "I get it. I feel it too."

Until you find them, I want you to know that I understand. Or at least, I'm trying to. And that counts for something.

Stay deep. Stay weird. Stay you.

With admiration,
Kingsuk`},{id:"when-life-feels-heavy",title:"When Life Feels Heavy",description:"For the weight that won't lift.",category:"letter",order:11,content:`Dear Santhi,

Some days the air is thicker than others.

You wake up and the weight is already there, pressing down on your chest before you've even had coffee. The smallest tasks feel monumental. The simplest decisions feel impossible. Everything is louder, brighter, harder.

I don't have a solution for these days. I wish I did. I wish I could write you a letter that lifts the weight just by reading it. But I know that's not how it works.

What I can offer is this: You don't have to carry it alone.

Whatever is weighing on you, you can set it down for a moment. Just for a moment. You don't have to fix everything today. You don't have to have answers. You don't have to be strong all the time.

It's okay to say "I'm struggling." It's okay to ask for help. It's okay to take a day off from being okay.

The weight will feel lighter eventually. It always does. Not because the problems disappear, but because you grow stronger. Because you learn to carry it differently. Because you find people who help you hold it up.

Until then, be gentle with yourself. Rest. Breathe. Take it one moment at a time.

I'm right here with you.

Always,
Kingsuk`},{id:"when-you-need-a-brother",title:"When You Need A Brother",description:"For the moments only family can fill.",category:"letter",order:12,content:`Dear Santhi,

I know we're not related by blood. I know we don't share a last name or a childhood home or a family tree.

But I want you to know that I consider you family anyway.

Family is not about biology. It's about showing up. It's about choosing each other over and over again, even when it's inconvenient. It's about being the person someone can call at 3 AM, no questions asked.

If you need a brother today, I'm volunteering.

I'll be the one who tells you when you're being ridiculous. I'll be the one who stands up for you when you can't stand up for yourself. I'll be the one who celebrates your wins like they're my own and sits with you in your losses without trying to fix anything.

You don't have to face this world alone. You have a brother. Maybe not by blood, but by choice. And in my experience, chosen family is the strongest kind.

So whatever you need today, I'm here. That's what brothers are for.

Your brother,
Kingsuk`},{id:"one-month",title:"One Month",description:"A month has passed since this archive began.",category:"time-capsule",unlockDate:"2026-06-30",order:13,content:`Dear Santhi,

One month.

It's not a long time in the grand scheme of things. Thirty days. A few sunrises. A few deadlines. A few meals shared and conversations had.

But it's long enough for me to know that this was the right thing to do. Building this archive for you. Putting my thoughts into words that will outlive the moment they were written.

I hope this first month has treated you well. I hope you've found reasons to smile. I hope you've felt loved, because you are.

This is just the beginning. There's so much more I want to say to you, more than could ever fit in one letter or one month. So I'll keep writing, and you keep reading, and we'll let time do the rest.

Here's to the first month of many.

With gratitude,
Kingsuk`},{id:"six-months",title:"Six Months",description:"Half a year of letters and friendship.",category:"time-capsule",unlockDate:"2026-11-30",order:14,content:`Dear Santhi,

Six months.

Half a year. That's how long these words have been waiting for you. I wonder what's changed since the day I first started writing. I wonder what's stayed the same.

I hope you've grown. I hope you've healed from things that needed healing. I hope you've let go of things that needed releasing. I hope you've held tight to things that matter.

Six months is long enough to change a life. It's long enough to start a new chapter, to meet new people, to discover new parts of yourself. It's also long enough to realize that some things don't change, and that's okay too.

The older I get, the more I realize that consistency is underrated. Being the same person through changing circumstances is a kind of strength nobody talks about. So if you feel like nothing has changed in six months, maybe that's exactly where you need to be.

Growth isn't always visible. Sometimes it's happening underground, where nobody can see it.

Keep growing. Keep being you.

Yours,
Kingsuk`},{id:"one-year",title:"One Year",description:"A full year has passed. Look how far you've come.",category:"time-capsule",unlockDate:"2027-05-31",order:15,content:`Dear Santhi,

One year.

Three hundred and sixty-five days. A full trip around the sun. And here you are, reading words I wrote twelve months ago, as if no time has passed at all.

I wonder who you've become in a year. I wonder what you've learned. I wonder what's made you cry and what's made you laugh. I wonder if you're happy.

I hope you are. I hope this year has brought you closer to the person you want to be. I hope it's given you clarity about things that once confused you. I hope it's taken away things that were holding you back and given you things that lift you up.

A year is a long time and no time at all. It's both. It's enough time to change everything and not enough time to change anything. It's a chapter in a book that keeps writing itself.

Thank you for being in my story. Thank you for letting me be in yours.

Here's to another year.

With love,
Kingsuk`},{id:"three-years",title:"Three Years",description:"Three years of knowing you. What a gift.",category:"time-capsule",unlockDate:"2029-05-31",order:16,content:`Dear Santhi,

Three years.

I don't know where I was when I wrote this. I don't know what I was doing or thinking or feeling. But I know that I was thinking of you.

Three years is a long time. Long enough for entire worlds to shift. Long enough for people to become strangers or soulmates. Long enough for dreams to die and new ones to be born.

I hope these three years have been kind to you. But even if they haven't, I hope you've grown through whatever they brought. The hardest years are often the ones that shape us most.

If I could sit with you right now, I'd ask you one question: What do you know now that you didn't know three years ago?

The answer might surprise you. It might be something simple or profound or both. Whatever it is, hold onto it. Wisdom earned through time is the most valuable kind.

Thank you for three years of friendship. Thank you for being part of my life.

Here's to the next three.

Always,
Kingsuk`},{id:"five-years",title:"Five Years",description:"Half a decade. Think of everything that's happened.",category:"time-capsule",unlockDate:"2031-05-31",order:17,content:`Dear Santhi,

Five years.

Half a decade. If this friendship were a child, it would be starting school by now. If it were a career, it would be hitting its stride. If it were a garden, it would be deeply rooted.

I wonder what five years has done to us. I wonder if we're still close or if life has pulled us in different directions. I wonder if you still think of me sometimes. I wonder if this website still exists or if it's a relic of a younger version of us.

None of that matters, really. What matters is that I wrote these words, and you're reading them, and somewhere across time, two people are connected.

Five years is long enough to forget why something mattered. But I haven't forgotten. I remember why you matter. I remember the conversations, the laughter, the moments of quiet understanding. Those don't fade with time.

If five years has passed and we're still close, I'm grateful. If we've drifted, I understand. Some friendships are seasonal, and that doesn't make them any less real.

But I hope you know that, five years later, someone still cares about you. Someone still remembers. Someone still hopes you're happy.

That someone is me.

Yours,
Kingsuk`},{id:"ten-years",title:"Ten Years",description:"A decade. This is getting serious.",category:"time-capsule",unlockDate:"2036-05-31",order:18,content:`Dear Santhi,

Ten years.

A decade. I can barely wrap my head around it. When I wrote the first letter in this archive, I don't think I fully understood what ten years meant. It was an abstract concept. A number. A theoretical future.

Now it's your present. And somehow, I'm still here.

I hope the world has been good to you. I hope you've loved and been loved. I hope you've built a life that feels like yours. I hope you've made peace with things that once troubled you. I hope you've found joy in unexpected places.

Ten years changes people. It has to. If we're the same person we were a decade ago, we're doing it wrong. Growth is the point. Change is the point. Becoming more fully ourselves is the point.

I don't know who you are now, reading this. You might be almost unrecognizable from the person I first knew. And that's okay. That's beautiful, actually. The fact that a person can evolve so completely while still being the same soul is one of the most miraculous things about being human.

Thank you for being human with me.

With a decade of friendship,
Kingsuk`},{id:"fifteen-years",title:"Fifteen Years",description:"A decade and a half. Time flies.",category:"time-capsule",unlockDate:"2041-05-31",order:19,content:`Dear Santhi,

Fifteen years.

I don't know what to say that I haven't already said. I've written so many letters by now. I've tried to capture every possible emotion, every occasion, every reason you might need to hear from me.

But fifteen years deserves something special.

I want to tell you that I'm proud of you. Not for any specific achievement. Just for being you. For surviving. For thriving. For staying true to yourself through a decade and a half of change. That's not easy. Most people lose themselves along the way. The fact that you're still here, still you, is remarkable.

I want to tell you that you've made a difference in my life. Knowing you has shaped me in ways you'll never fully understand. You've taught me about patience and kindness and the importance of showing up. You've made me a better person.

And I want to tell you that, even after fifteen years, I'm still grateful for you. That hasn't changed. It never will.

With fifteen years of gratitude,
Kingsuk`},{id:"twenty-years",title:"Twenty Years",description:"Two decades. What a journey.",category:"time-capsule",unlockDate:"2046-05-31",order:20,content:`Dear Santhi,

Twenty years.

Two decades. I don't know if I'm still alive. I don't know if you're still alive. I don't know if this website still exists or if it's been lost to time and broken servers. But something brought you here today, and that means something.

I wrote these words in 2026, when twenty years felt like an eternity. Now, for you, it's just the distance between then and now.

I hope you've lived a life that feels full. I hope you've loved deeply and been loved in return. I hope you've experienced joy that made your chest ache and wonder that made you catch your breath. I hope you've had moments that made everything worth it.

If I could say one thing to you across twenty years, it would be this: You were always enough. You never needed to be more. Every version of you across every year was exactly who you needed to be.

I knew you once, and knowing you made my life better. That's all any of us can hope for.

Thank you for being you.

With twenty years of love,
Kingsuk`},{id:"open-only-if-we-have-lost-touch",title:"Open Only If We Have Lost Touch",description:"This is one of the most important letters in the archive.",category:"special",order:21,content:`Dear Santhi,

If you're reading this, we've lost touch.

It happened somehow. The way it always does. Life got busy. People drifted. Calls became texts became silence. It wasn't anyone's fault. It just happened.

And now you're here, reading a letter from someone who used to be part of your life.

I need you to know something important: You are not forgotten.

I know it might feel that way. When someone from your past reaches out across time, it's easy to think "if they really cared, they would have stayed in touch." But that's not how life works. People care and still drift. People love and still lose contact. The two things are not mutually exclusive.

The fact that I'm writing this letter, and the fact that you're reading it, means that our connection mattered. It means that somewhere, across all the years and distance and silence, there was something real.

I hope you're okay. I hope life has been good to you. I hope you've found people who see you and love you and show up for you. You deserve that. You always did.

And if you ever want to reach out, know that I would welcome it. No awkwardness. No blame. No "where have you been." Just two people who once meant something to each other, finding their way back.

The door is always open.

With love, always,
Kingsuk`},{id:"first-job",title:"When You Get Your First Job",description:"Congratulations. You made it.",category:"milestone",order:22,content:`Dear Santhi,

You got the job.

I knew you would. I've known you long enough to recognize that you're the kind of person who doesn't stop until they get what they want. And now you have proof that someone out there sees your value.

I'm proud of you. Not just because you got a job, but because you put yourself out there. You applied. You interviewed. You faced rejection or silence or uncertainty, and you kept going. That takes courage.

This is a big deal. Don't let anyone minimize it. Your first job is more than a paycheck. It's a door opening. It's a step into a new version of yourself. It's the beginning of something.

You're going to be amazing. And even if you make mistakes, even if you have days where you feel like you don't belong, remember that everyone starts somewhere. Everyone was new once. Everyone had a first day.

This is your first day. Make it yours.

Now go show them what you're made of.

With pride,
Kingsuk`},{id:"move-new-city",title:"When You Move To A New City",description:"New place. New chapter. Same you.",category:"milestone",order:23,content:`Dear Santhi,

So you've moved.

A new city. New streets. New faces. New everything.

I know how scary this can be. The first few weeks in a new place are the hardest. Everything is unfamiliar. You don't know where to buy groceries. You get lost trying to find your way home. You miss the comfort of places that knew you.

But here's the thing about new cities: they don't know your history. They don't know the mistakes you've made or the versions of yourself you've outgrown. They're blank pages, waiting for you to write yourself into them.

You get to decide who you are here. You get to choose your routines, your people, your favorite coffee shop. You get to build a life from the ground up.

And you have everything you need to do it. You're resourceful. You're resilient. You've moved through hard things before, and you'll move through this too.

Give it time. Be patient with yourself. Say yes to things that scare you a little. The city will start to feel like home sooner than you think.

And remember: home is not a place. It's the people who make you feel known. So find your people. Build your home.

I'm rooting for you.

Yours,
Kingsuk`},{id:"first-home",title:"When You Buy Your First Home",description:"Four walls that are yours.",category:"milestone",order:24,content:`Dear Santhi,

You own a home.

I need you to sit with that for a moment. Somewhere in the world, there is a place with your name on it. A place that is yours. A place where you can be exactly who you are, without explanation or apology.

This is not a small thing. Owning a home means you've planted roots. You've decided that you belong somewhere. You've created a physical space that reflects who you are and what matters to you.

I hope this home brings you peace. I hope it's filled with laughter and good food and people who love you. I hope you have a corner where you can read, a kitchen where you can cook badly, and a door you can close when you need the world to go away.

A home is more than a building. It's a sanctuary. It's the place where you become yourself every day.

Congratulations. You deserve this.

With warmth,
Kingsuk`},{id:"when-you-think-you-failed",title:"When You Think You Failed",description:"Failure is not the opposite of success.",category:"milestone",order:25,content:`Dear Santhi,

You didn't fail. You tried something that didn't work out.

There's a difference.

Failure is quitting. Failure is never trying. Failure is letting fear make your decisions. What you did was take a risk, and sometimes risks don't pay off. That's not failure. That's courage.

I know it doesn't feel like courage right now. It feels like embarrassment, disappointment, maybe even shame. You're probably replaying everything in your head, wondering what you could have done differently. You're probably comparing yourself to people who seem to have it all figured out.

Stop. Just stop.

Some of the most successful people in the world have failed more times than you've tried. The difference is they kept going. They learned from what didn't work and tried again. They understood that failure is not an identity. It's a data point.

So learn from this. Take what didn't work and use it to do better next time. And then try again. And again. And again.

That's not failure. That's persistence. And persistence always wins in the end.

Keep going.

Believing in you,
Kingsuk`},{id:"burnout",title:"When You Experience Burnout",description:"Rest is not a reward. It's a necessity.",category:"milestone",order:26,content:`Dear Santhi,

You're exhausted.

Not just tired. Exhausted. The kind of tired that sleep doesn't fix. The kind that settles into your bones and makes everything feel heavy.

I see you. I see how hard you've been working. I see how much you've been carrying. I see that you've been running on empty for longer than you want to admit.

Here's what I need you to hear: You don't have to earn rest.

You don't need to finish everything on your to-do list before you're allowed to breathe. You don't need to prove your worth through productivity. You are not a machine. You are a human being, and human beings need rest.

Take a break. A real one. Not a "check my phone while pretending to relax" break. A real break. Sleep. Stare at a wall. Go for a walk without a destination. Read something that has nothing to do with work. Let your mind wander.

The world will not fall apart if you stop for a day. I promise.

And if you need permission to rest, consider this letter your permission slip. You've done enough. You are enough. Put it down for a while.

Rest now.

With care,
Kingsuk`},{id:"huge-accomplishment",title:"When You Accomplish Something Huge",description:"You did it. Really did it.",category:"milestone",order:27,content:`Dear Santhi,

You did it.

Whatever it was, you accomplished it. All those late nights, all those doubts, all those times you wanted to give up and didn't. They led to this moment.

I hope you're celebrating. Not just the achievement, but the journey. The person you became along the way. The obstacles you overcome. The version of yourself that refused to quit.

Big accomplishments are rare. Most people never get to experience the feeling of reaching a goal they've worked toward for years. But you did. You're one of the few who saw something through to the end, who didn't let circumstances stop you, who kept believing even when belief was hard.

That's who you are. That's what you're capable of.

Don't let this moment pass without acknowledging it. Take a picture. Write it down. Tell someone. Make this memory last, because you earned it.

And then, when you're ready, go find the next mountain. Because that's what people like you do. You climb.

With celebration,
Kingsuk`},{id:"turn-30",title:"When You Turn 30",description:"A new decade begins.",category:"milestone",order:28,content:`Dear Santhi,

Thirty.

If you're reading this, you've entered a new decade. The twenties are behind you. And I know that can feel strange. Maybe even a little scary.

But I want you to know that thirty is not an ending. It's a beginning of a different kind of life. A life where you know yourself better. A life where you care less about what other people think. A life where you've accumulated enough experience to trust your own judgment.

Your twenties were about figuring things out. Your thirties are about living what you've learned.

I hope you enter this decade with excitement, not dread. You're not getting older. You're getting more yourself. Every year peels away another layer of who you thought you should be and reveals who you actually are.

That's not loss. That's liberation.

Welcome to your thirties. You're going to love them.

With excitement,
Kingsuk`},{id:"turn-40",title:"When You Turn 40",description:"Forty and fabulous.",category:"milestone",order:29,content:`Dear Santhi,

Forty.

Four decades. Two score years. By any measure, you've lived a full life already, and there's still so much ahead.

By now, you've learned things that twenty-year-old you couldn't have imagined. You've developed a kind of wisdom that only comes from experience. You've learned when to hold on and when to let go. You've learned that most things don't matter as much as they seem to, and the things that do matter are worth protecting.

I hope forty feels like freedom to you. Freedom from caring about the wrong things. Freedom from trying to please everyone. Freedom to be exactly who you are.

If you're not there yet, that's okay too. Some lessons take longer than others. The point is you're still learning. You're still growing. You're still becoming.

Here's to forty years of you. The world is better because you're in it.

With admiration,
Kingsuk`},{id:"turn-50",title:"When You Turn 50",description:"Half a century of you.",category:"milestone",order:30,content:`Dear Santhi,

Fifty.

Half a century. If you're reading this, you've been on this earth for fifty years. That's remarkable. Think about everything you've witnessed. Everything you've experienced. Everyone you've loved. Every version of yourself that has lived and died and been reborn.

Fifty years is a long time to be anything. And you've been so many things. A daughter. A friend. A professional. A dreamer. A fighter. A lover. A survivor. All of those versions of you exist simultaneously, layered like sediment, forming the person you are today.

I hope you've made peace with your younger selves. I hope you've forgiven them for the mistakes they made. I hope you've thanked them for getting you here.

You've lived through things that would have broken lesser people. And you're still standing. Still reading. Still becoming.

That's not luck. That's strength.

Half a century. And the best may still be ahead.

With awe,
Kingsuk`},{id:"retire",title:"When You Retire",description:"A new chapter begins.",category:"milestone",order:31,content:`Dear Santhi,

You made it.

Retirement. The finish line of a long race. The end of one chapter and the beginning of another.

I hope you're proud of yourself. Building a career, showing up day after day, contributing to the world through your work. That's not easy. It takes discipline and resilience and the ability to keep going when you'd rather stop.

But now you get to stop. Or, more accurately, you get to choose what you start next.

Retirement isn't the end of purpose. It's the liberation of time. You now have the most valuable resource in the world: the freedom to spend your days however you choose.

Travel if you can. Rest if you need to. Learn something new. Spend time with people who matter. Read all the books you've been meaning to read. Sit in the sun and do nothing.

You've earned this.

Welcome to the rest of your life.

With celebration,
Kingsuk`},{id:"feel-old",title:"When You Feel Old",description:"Age is just a number. You are timeless.",category:"milestone",order:32,content:`Dear Santhi,

I know the feeling. You look in the mirror and see someone who isn't as young as they used to be. You notice things changing. You realize that the world is moving faster than you are.

It's easy to feel like your best years are behind you when you're focused on what you've lost. But I want to reframe something for you.

You're not old. You're experienced. You're not past your prime. You're in a different prime. Every age has its own gifts, and the gifts of where you are right now are things your younger self could only dream of.

You know things now that you didn't know then. You've made peace with things that used to keep you up at night. You've stopped caring about opinions that used to matter too much. You've learned that most things pass, and the things that don't are worth holding onto.

That's not aging. That's becoming.

You are not old. You are a person who has lived, and living leaves marks. Those marks are not flaws. They're evidence of a life well lived.

Wear them proudly.

With admiration,
Kingsuk`},{id:"feel-forgotten",title:"When You Feel Forgotten",description:"You are not invisible. You are not forgotten.",category:"milestone",order:33,content:`Dear Santhi,

The world has a way of making people feel invisible as they get older.

Society values youth and novelty, and if you're neither of those things, it's easy to feel like you don't matter anymore. Like your voice isn't needed. Like your place has been taken by someone younger, faster, more relevant.

I need you to hear this: That is a lie.

You are not forgotten. You are not irrelevant. You are not less valuable because you've been here longer. If anything, you're more valuable. You have perspective that younger people don't have. You've seen patterns repeat. You know that most things pass. You understand what actually matters.

The world may not always make room for you. But that doesn't mean you should make yourself smaller. Take up space. Share your wisdom. Tell your stories. Your voice matters, and there are people who need to hear it.

And if nobody else says it today: I remember you. I see you. You matter.

Always,
Kingsuk`},{id:"wedding-day",title:"Wedding Day",description:"Today, you begin a new journey.",category:"milestone",order:34,content:`Dear Santhi,

Today, you got married.

I'm not there. I don't know if we're still in touch or if life has separated us by distance and time. But wherever I am, I'm thinking of you today.

Marriage is a beautiful thing. It's the decision to build a life with someone. To share your days, your dreams, your struggles, your joy. It's choosing someone to witness your life and be witnessed in return.

I hope the person you're marrying deserves you. I hope they see you the way I've always seen you. I hope they recognize how lucky they are. I hope they love you not just on the easy days, but on the hard ones too.

Marriage won't always be easy. No meaningful thing is. But I hope you two build something that lasts. Something that grows stronger with every challenge. Something that makes both of you better people.

Today is the beginning of a new story. A story where you're part of a duo. A team. A partnership.

I'm so happy for you.

With love and joy,
Kingsuk`},{id:"easter-egg",title:"Open Only If You Found The Hidden Button",description:"You found it. Of course you did.",category:"easter-egg",order:35,content:`Dear Santhi,

I knew you'd click random things until you found this.

This is why nobody lets you near important systems.

Happy Birthday.

— Kingsuk`}];e.s(["letters",0,t])},33274,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return u},urlObjectKeys:function(){return h}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let a=e.r(80471)._(e.r(40924)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:o}=e,n=e.protocol||"",r=e.pathname||"",s=e.hash||"",h=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:o&&(u=t+(~o.indexOf(":")?`[${o}]`:o),e.port&&(u+=":"+e.port)),h&&"object"==typeof h&&(h=String(a.urlQueryToSearchParams(h)));let l=e.search||h&&`?${h}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==u?(u="//"+(u||""),r&&"/"!==r[0]&&(r="/"+r)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),l&&"?"!==l[0]&&(l="?"+l),r=r.replace(/[?#]/g,encodeURIComponent),l=l.replace("#","%23"),`${n}${u}${r}${l}${s}`}let h=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return s(e)}},59159,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(79959);function r(e,t){let o=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=o.current;e&&(o.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(o.current=a(e,n)),t&&(r.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let o=e(t);return"function"==typeof o?o:()=>e(null)}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},47981,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(47589),r=e.r(78117);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),o=new URL(e,t);return o.origin===t&&(0,r.hasBasePath)(o.pathname)}catch(e){return!1}}},17238,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6295,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={default:function(){return w},useLinkStatus:function(){return b}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let a=e.r(80471),i=e.r(51466),s=a._(e.r(79959)),h=e.r(33274),u=e.r(26165),l=e.r(59159),d=e.r(47589),y=e.r(44695);e.r(99355);let c=e.r(24402),f=e.r(79347),g=e.r(47981),m=e.r(45214);function w(t){var o,n;let r,a,w,[b,v]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:I,as:x,children:T,prefetch:Y=null,passHref:S,replace:j,shallow:A,scroll:N,onClick:W,onMouseEnter:B,onTouchStart:E,legacyBehavior:P=!1,onNavigate:D,transitionTypes:F,ref:O,unstable_dynamicOnHover:C,...M}=t;r=T,P&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let K=s.default.useContext(u.AppRouterContext),L=!1!==Y,_=!1!==Y?null===(n=Y)||"auto"===n?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,R="string"==typeof(o=x||I)?o:(0,h.formatUrl)(o);if(P){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(r)}let H=P?a&&"object"==typeof a&&a.ref:O,U=s.default.useCallback(e=>(null!==K&&(k.current=(0,f.mountLinkInstance)(e,R,K,_,L,v)),()=>{k.current&&((0,f.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,f.unmountPrefetchableInstance)(e)}),[L,R,K,_,v]),$={ref:(0,l.useMergedRef)(U,H),onClick(t){P||"function"!=typeof W||W(t),P&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!K||t.defaultPrevented||function(t,o,n,r,a,i,h){if("u">typeof window){let u,{nodeName:l}=t.currentTarget;if("A"===l.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(o)){r&&(t.preventDefault(),location.replace(o));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(20683);s.default.startTransition(()=>{d(o,r?"replace":"push",!1===a?c.ScrollBehavior.NoScroll:c.ScrollBehavior.Default,n.current,h)})}}(t,R,k,j,N,D,F)},onMouseEnter(e){P||"function"!=typeof B||B(e),P&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),K&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===C)},onTouchStart:function(e){P||"function"!=typeof E||E(e),P&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),K&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===C)}};return(0,d.isAbsoluteUrl)(R)?$.href=R:P&&!S&&("a"!==a.type||"href"in a.props)||($.href=(0,y.addBasePath)(R)),w=P?s.default.cloneElement(a,$):(0,i.jsx)("a",{...M,...$,children:r}),(0,i.jsx)(p.Provider,{value:b,children:w})}e.r(17238);let p=(0,s.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(p);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},31798,(e,t,o)=>{t.exports=e.r(61461)},13205,e=>{"use strict";var t=e.i(51466),o=e.i(6295),n=e.i(31798),r=e.i(79959);let a=[{href:"/",label:"Home"},{href:"/letters",label:"Letters"},{href:"/time-capsule",label:"Time Capsules"},{href:"/birthday-vault",label:"Birthday Vault"},{href:"/milestones",label:"Milestones"},{href:"/about",label:"About"}];e.s(["default",0,function(){let e=(0,n.usePathname)(),[i,s]=(0,r.useState)(!1);return(0,t.jsxs)("nav",{className:"border-b border-card",role:"navigation","aria-label":"Main navigation",children:[(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-4 flex items-center justify-between h-14",children:[(0,t.jsx)(o.default,{href:"/",className:"text-accent font-heading text-lg tracking-wide hover:opacity-80 transition-opacity","aria-label":"Words to Santhi - Home",children:"Words to Santhi"}),(0,t.jsx)("button",{className:"md:hidden text-text p-2",onClick:()=>s(!i),"aria-label":i?"Close menu":"Open menu","aria-expanded":i,children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i?(0,t.jsx)("path",{d:"M6 18L18 6M6 6l12 12"}):(0,t.jsx)("path",{d:"M4 6h16M4 12h16M4 18h16"})})}),(0,t.jsx)("div",{className:"hidden md:flex items-center gap-6",children:a.map(n=>(0,t.jsx)(o.default,{href:n.href,className:`text-sm transition-colors hover:text-accent ${e===n.href?"text-accent":"text-secondary"}`,children:n.label},n.href))})]}),i&&(0,t.jsx)("div",{className:"md:hidden border-t border-card px-4 py-3 flex flex-col gap-3",role:"menu",children:a.map(n=>(0,t.jsx)(o.default,{href:n.href,onClick:()=>s(!1),className:`text-sm transition-colors hover:text-accent ${e===n.href?"text-accent":"text-secondary"}`,role:"menuitem",children:n.label},n.href))})]})}])},43222,e=>{"use strict";var t=e.i(51466),o=e.i(79959),n=e.i(24170),r=e.i(90037);e.s(["default",0,function(){let[e,a]=(0,o.useState)(!1),[i,s]=(0,o.useState)(!1),[h,u]=(0,o.useState)(0),l=n.letters.find(e=>"easter-egg"===e.id);return l?i?(0,t.jsx)(r.default,{letter:l,onClose:()=>{s(!1),a(!1),u(0)}}):(0,t.jsxs)("div",{className:"fixed bottom-4 right-4 z-50",role:"complementary","aria-label":"Hidden easter egg",children:[(0,t.jsx)("button",{onClick:()=>{let e=h+1;u(e),e>=5&&a(!0)},className:`w-10 h-10 rounded-full transition-all duration-300 ${e?"bg-accent cursor-pointer animate-glow":"bg-transparent border border-card hover:border-accent/30 cursor-pointer"}`,"aria-label":e?"Open secret letter":"Hidden button",title:"..."}),e&&(0,t.jsxs)("div",{className:"absolute bottom-14 right-0 bg-card border border-accent/30 rounded-lg p-4 shadow-xl min-w-48",children:[(0,t.jsx)("p",{className:"text-xs text-secondary mb-2",children:"You found it."}),(0,t.jsx)("button",{onClick:()=>s(!0),className:"text-accent text-sm hover:underline",children:"Open secret letter"})]})]}):null}])},27257,e=>{"use strict";var t=e.i(51466),o=e.i(79959);let n="santhihidimbi";e.s(["default",0,function({children:e}){let[r,a]=(0,o.useState)(!1),[i,s]=(0,o.useState)(""),[h,u]=(0,o.useState)(!1),[l,d]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{try{sessionStorage.getItem("words-to-santhi-auth")===n&&a(!0)}catch{}d(!1)},[]),l)?null:r?(0,t.jsx)(t.Fragment,{children:e}):(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-bg px-4",children:(0,t.jsxs)("div",{className:"bg-card border border-accent/20 rounded-lg p-8 max-w-md w-full text-center",children:[(0,t.jsx)("h1",{className:"text-2xl font-heading text-text mb-2",children:"Words to Santhi"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-6",children:"Enter the password to continue."}),(0,t.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),i===n){try{sessionStorage.setItem("words-to-santhi-auth",i)}catch{}window.location.reload()}else u(!0)},className:"flex flex-col gap-4",children:[(0,t.jsx)("input",{type:"password",value:i,onChange:e=>{s(e.target.value),u(!1)},placeholder:"Password",className:"w-full bg-bg border border-accent/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder-secondary focus:outline-none focus:border-accent/50 transition-colors",autoFocus:!0,"aria-label":"Password"}),h&&(0,t.jsx)("p",{className:"text-xs text-red-400",children:"Incorrect password. Try again."}),(0,t.jsx)("button",{type:"submit",className:"bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-lg transition-all text-sm",children:"Enter"})]})]})})}])}]);