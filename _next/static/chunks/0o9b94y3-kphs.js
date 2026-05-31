(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40924,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={assign:function(){return h},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});function a(e){let t={};for(let[o,n]of e.entries()){let e=t[o];void 0===e?t[o]=n:Array.isArray(e)?e.push(n):t[o]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[o,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(o,i(e));else t.set(o,i(n));return t}function h(e,...t){for(let o of t){for(let t of o.keys())e.delete(t);for(let[t,n]of o.entries())e.append(t,n)}return e}},47589,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={DecodeError:function(){return p},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return w},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return f},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return l},isAbsoluteUrl:function(){return h},isResSent:function(){return y},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return I}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,o=!1;return(...n)=>(o||(o=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,h=e=>s.test(e);function u(){let{protocol:e,hostname:t,port:o}=window.location;return`${e}//${t}${o?":"+o:""}`}function l(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function y(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let o=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(o&&y(o))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,f=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class w extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function I(e){return JSON.stringify({message:e.message,stack:e.stack})}},99355,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},24170,e=>{"use strict";let t=[{id:"when-you-need-a-laugh",title:"When You Need A Laugh",description:"For the days when everything feels too serious.",category:"letter",order:1,content:`Dear Santhi,

If you're reading this, then one of two things has happened.

Either:

1. You're having a bad day.

Or

2. You're clicking random buttons because curiosity got the better of you.

Honestly, both sound equally likely.

So before we continue, I'd like to remind you of something important.

You have survived every embarrassing moment of your life so far. Every awkward conversation. Every stupid mistake. Every moment where your brain decided to replay something embarrassing from five years ago at three in the morning. You survived all of them.

In fact, there's a very good chance that the thing currently bothering you will eventually become a story you laugh about. Human beings are funny that way. We treat temporary problems like permanent disasters, then a few years later we're telling people about them while laughing.

So here's your assignment. Drink some water. Stretch. Look outside for a minute. And remember that somewhere out there exists a person who knows your nonsense and still voluntarily chooses to be your friend.

Happy reading.

— Kingsuk`},{id:"when-you-feel-alone",title:"When You Feel Alone",description:"A reminder that you are never truly alone.",category:"letter",order:2,content:`Dear Santhi,

Sitting alone is not the same as being lonely. Sometimes solitude is medicine. Sometimes you need to sit with your own thoughts, turn them over in your hands, and examine them without distraction.

But other times, the silence gets loud. And if that's where you are right now — if the quiet feels heavy instead of healing — I want you to know something.

You have people. Maybe they're not in the room with you. Maybe they're scattered across cities and time zones, living lives that barely overlap with yours. But they exist. And you exist in them.

When your friend orders the thing you recommended at a restaurant three years ago, you are there. When someone catches themselves about to text you before remembering it's two in the morning, you are there. When a song comes on and someone thinks, "Santhi would like this" — that's you. That's proof.

You are not alone. You are woven into the lives of people who carry you with them, whether you know it or not.

So on the nights when loneliness creeps in, remind yourself: I am thought of. I am remembered. I am loved. Even in silence.

— Kingsuk`},{id:"when-you-think-youre-not-good-enough",title:"When You Think You're Not Good Enough",description:"For the voice in your head that is wrong about you.",category:"letter",order:3,content:`Dear Santhi,

Let me tell you about a person I know.

This person has done things that would make your jaw drop. This person has made people laugh until they cried. Has shown kindness when it wasn't returned. Has gotten back up after being knocked down in ways that most people would never recover from.

This person has a mind that works in ways that surprise even the people who know them best. Creative. Sharp. Unpredictable in the best way.

This person is you.

I'm not saying this to flatter you. I'm saying this because I've watched you — from a distance, up close, across tables and phone calls and long silences — and I've noticed something. You have no idea how impressive you are.

You walk around carrying gifts like they're ordinary. You solve problems that would stump other people and then act like it was nothing. You make the people around you feel special and then wonder why they like you.

So here's your reminder. You are not a scam. You are not lucky. You are not faking it. You earned your place. You earned every good thing that has come your way. And you will earn the good things that are coming. Stop doubting. Start owning it.

You are good enough. More than good enough.

— Kingsuk`},{id:"when-somebody-hurt-you",title:"When Somebody Hurt You",description:"When the wounds are fresh and words feel inadequate.",category:"letter",order:4,content:`Dear Santhi,

First of all: ow. Someone hurt you, and that sucks. Whether it was intentional or accidental, whether they knew what they were doing or not — it still hurts. And I'm sorry. I'm sorry that someone made you feel small. I'm sorry that someone's carelessness or cruelty became your burden to carry.

Here's the thing about being hurt by someone. It changes you a little bit. Not in a dramatic way, but in small ways. You become a little more cautious. A little less trusting. A little quicker to expect the worst from people. And that's a natural response. Your brain is trying to protect you from future pain by putting up walls.

But here's what I want you to remember: the walls you build to keep bad things out also keep good things out. So don't build walls. Build doors with locks you control. You get to decide who comes in and who stays out. You get to decide when to trust and when to wait. You get to protect yourself without closing yourself off entirely.

And when you're ready — on your timeline, not anyone else's — you'll find that the world still has good people in it. People who won't make you regret opening that door.

Give yourself time. And then keep going.

— Kingsuk`},{id:"when-you-feel-misunderstood",title:"When You Feel Misunderstood",description:"For when the world doesn't seem to get you.",category:"letter",order:5,content:`Dear Santhi,

You know what's exhausting? Explaining yourself. When you have to keep repeating the same things because people keep misinterpreting you. When you say one thing and they hear something completely different. When you show up authentically and they still insist on seeing a version of you that doesn't exist.

I'm going to tell you something that might be hard to hear. You don't have to make everyone understand you.

I know, it sounds counterintuitive. When you're misunderstood, your instinct is to explain harder. To find different words. To try a different angle. But sometimes the best thing you can do is stop explaining.

Not everyone is equipped to understand you. Not everyone has the emotional range, the life experience, or the desire to truly see you. And that's not your problem.

Your job isn't to translate yourself into a language everyone can understand. Your job is to be yourself, clearly and unapologetically.

The people who are meant to be in your life will make the effort. They'll ask questions. They'll listen. They'll try to understand, not because you made them, but because they genuinely want to.

And the people who don't? They don't get a vote.

— Kingsuk`},{id:"when-you-miss-me",title:"When You Miss Me",description:"Distance is temporary. Friendship is not.",category:"letter",order:6,content:`Dear Santhi,

Miss me? I miss you too.

It's strange how you can miss someone even when you're not sure what to say to them. Even when you have nothing new to report. Even when life is just the same old routine.

Missing someone isn't about absence. It's about presence. It means they've taken up space in your life that nothing else can fill. It means they've left a mark that time hasn't erased.

So if you're missing someone — whether it's me, or someone else, or a version of life that no longer exists — don't fight it. Missing is proof that something mattered. And things that matter don't disappear. They change shape. They evolve. They wait patiently for the moment when paths cross again.

So until then, here's what I want you to do. Don't let missing stop you from living. Enjoy the people who are here now. Make new memories. Laugh at new jokes. Build new inside jokes with new people.

The people you miss will still be there when the universe brings you back together. And when that happens, you'll have even more stories to share.

— Kingsuk`},{id:"when-you-forget-your-worth",title:"When You Forget Your Worth",description:"A letter to remind you of your value.",category:"letter",order:7,content:`Dear Santhi,

If worth were measured in rupees, what number would you put on yourself? I'm serious. Would it be a big number? A small one? Would it change depending on the day? On your mood? On whether you achieved something recently?

Most of us have a terrible habit of setting our worth based on our latest win or loss. We have a good day at work and we feel valuable. We make a mistake and suddenly we feel worthless.

But here's the truth. Your worth doesn't change. It's not a stock market that goes up and down based on performance. It's not a number that increases when you succeed and decreases when you fail. Your worth is fixed. Stable. Unchanging.

It's there on your worst days, hidden under the disappointment, waiting for you to remember it's still there. It's there on your best days, keeping you grounded, reminding you that success didn't create it.

You didn't earn your worth. You were born with it. And nothing you do — nothing that happens to you — can take it away.

So on the days when you feel worthless, don't try to earn back what you think you've lost. Just remember that it was never gone.

— Kingsuk`},{id:"after-your-worst-day",title:"After Your Worst Day",description:"For when you've survived the unsurvivable.",category:"letter",order:8,content:`Dear Santhi,

You made it. Whatever "it" was — a terrible day, a sleepless night, a crushing disappointment, a moment that felt like it would never end — you made it through.

And I know that might not feel like an accomplishment right now. You might be looking around at the wreckage and thinking, "I didn't do anything. I just survived." But sometimes surviving is everything.

Do you know how many people don't make it through their worst days? Do you know how many people give up just before the breakthrough? You didn't. You kept going.

You woke up this morning. You faced whatever came your way. You put one foot in front of the other. And now you're here, on the other side, reading a letter from someone who believes in you.

So here's your permission slip. You're allowed to be tired. You're allowed to not have it all figured out. You're allowed to feel whatever you're feeling — happy, sad, relieved, numb, or all of the above. And you're allowed to rest.

Because tomorrow is a new day. And you'll face it the same way you faced today. One step at a time.

I'm proud of you.

— Kingsuk`},{id:"if-we-ever-lose-touch",title:"If We Ever Lose Touch",description:"A letter for the possibility of time and distance.",category:"letter",order:12,content:`Dear Santhi,

If you're reading this, it probably means we haven't talked in a while. Maybe weeks. Maybe months. Maybe longer.

But here's the thing about our friendship that I hope you never forget: time and distance don't change what's real.

Yes, life gets busy. Yes, we get caught up in our own worlds. Yes, sometimes days turn into weeks and weeks turn into months and suddenly you realize it's been way too long since you last heard someone's voice.

But friendship isn't measured by how often you talk. It's measured by how easily you fall back into rhythm when you do.

And with us, it's always been easy. We've never needed small talk to bridge the gap. We've never needed constant updates to feel connected. We've always been the kind of friends who can go months without speaking and then pick up like no time has passed.

So if that's where we are right now — if we're in one of those silent stretches — I want you to know something. I'm not mad. I'm not hurt. I'm not questioning our friendship. I'm just waiting.

Waiting for the moment when our paths cross again. Waiting for the next conversation, the next laugh, the next reminder of why we've been friends all this time.

And when that moment comes, I'll be right here. Just like I've always been.

— Kingsuk`},{id:"if-nobody-understands-you",title:"If Nobody Understands You",description:"For when you feel like you speak a different language.",category:"letter",order:9,content:`Dear Santhi,

Have you ever tried explaining how you feel and realized halfway through that you've lost your audience? Their eyes glaze over. They nod politely. They say something like, "I get it," but you can tell they don't.

It's one of the loneliest feelings in the world. Feeling like you're speaking a language that nobody around you understands. Like your thoughts are in high definition while everyone else is still on standard resolution.

If that's you right now, I have two things to say.

First: you're not broken. There's nothing wrong with you for feeling things deeply. For thinking about things that other people don't think about. For caring about things that seem to slip through the cracks of most people's attention. You're not broken. You're wired differently. And different isn't less — it's just different.

Second: your people exist. They might not be in this room. They might not even be in this city or this country. But they're out there, somewhere, feeling the same things you're feeling, thinking the same thoughts, wondering if there's someone out there who gets them. You'll find each other eventually.

Until then, don't water yourself down to make other people comfortable. Stay weird. Stay deep. Stay you.

— Kingsuk`},{id:"when-life-feels-heavy",title:"When Life Feels Heavy",description:"For the weight that won't lift.",category:"letter",order:10,content:`Dear Santhi,

Some days are heavy. Not in a dramatic way. Not in a way that makes for a good story. Just heavy in a way that makes everything harder than it should be.

Getting out of bed is harder. Making decisions is harder. Smiling is harder.

And the worst part is that there's no obvious reason for it. It's not like something terrible happened. It's not like you have a specific problem to solve. It's just a weight that settled on your chest sometime between waking up and now, and it refuses to leave.

If that's where you are right now, I want you to know something. You don't have to fix it. You don't have to figure out why you feel this way. You don't have to find the root cause and address it. You don't have to "solve" your mood like it's a math problem. Sometimes heavy days are just heavy days. And that's okay.

What you can do is be gentle with yourself. Do less today. Give yourself permission to move slowly. Eat something that makes you feel good. Drink water. Rest.

Tomorrow might feel different. And if it doesn't, that's okay too. One day at a time.

— Kingsuk`},{id:"when-you-need-a-brother",title:"When You Need A Brother",description:"For the moments only family can fill.",category:"letter",order:11,content:`Dear Santhi,

I know we don't share blood. I know we don't share a last name or a childhood home or a family history. But you know what? I don't care.

Because family isn't about any of that. Family is about who shows up. Family is about who you can call at 3 AM without apologizing. Family is about who tells you the truth even when it's hard to hear, and who celebrates your wins like they're their own.

If you need a brother today, I'm volunteering. I'll be the one who calls you out when you're being ridiculous, because that's what brothers do. I'll be the one who has your back when nobody else does. I'll be the one who sits with you in silence when words aren't enough.

You don't have to face this world alone. You have a brother. Not by blood. By choice. And chosen family is the strongest kind there is.

— Kingsuk`},{id:"one-month",title:"One Month",description:"A month has passed since this archive began.",category:"time-capsule",unlockDate:"2026-06-30",order:13,content:`Dear Santhi,

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

— Kingsuk`}];e.s(["letters",0,t])},33274,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return u},urlObjectKeys:function(){return h}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let a=e.r(80471)._(e.r(40924)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:o}=e,n=e.protocol||"",r=e.pathname||"",s=e.hash||"",h=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:o&&(u=t+(~o.indexOf(":")?`[${o}]`:o),e.port&&(u+=":"+e.port)),h&&"object"==typeof h&&(h=String(a.urlQueryToSearchParams(h)));let l=e.search||h&&`?${h}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==u?(u="//"+(u||""),r&&"/"!==r[0]&&(r="/"+r)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),l&&"?"!==l[0]&&(l="?"+l),r=r.replace(/[?#]/g,encodeURIComponent),l=l.replace("#","%23"),`${n}${u}${r}${l}${s}`}let h=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return s(e)}},59159,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(79959);function r(e,t){let o=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=o.current;e&&(o.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(o.current=a(e,n)),t&&(r.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let o=e(t);return"function"==typeof o?o:()=>e(null)}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},47981,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(47589),r=e.r(78117);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),o=new URL(e,t);return o.origin===t&&(0,r.hasBasePath)(o.pathname)}catch(e){return!1}}},17238,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6295,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={default:function(){return p},useLinkStatus:function(){return b}};for(var r in n)Object.defineProperty(o,r,{enumerable:!0,get:n[r]});let a=e.r(80471),i=e.r(51466),s=a._(e.r(79959)),h=e.r(33274),u=e.r(26165),l=e.r(59159),d=e.r(47589),y=e.r(44695);e.r(99355);let c=e.r(24402),g=e.r(79347),m=e.r(47981),f=e.r(45214);function p(t){var o,n;let r,a,p,[b,v]=(0,s.useOptimistic)(g.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:I,as:x,children:T,prefetch:Y=null,passHref:S,replace:j,shallow:A,scroll:N,onClick:W,onMouseEnter:E,onTouchStart:D,legacyBehavior:B=!1,onNavigate:F,transitionTypes:O,ref:P,unstable_dynamicOnHover:C,...M}=t;r=T,B&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let K=s.default.useContext(u.AppRouterContext),_=!1!==Y,L=!1!==Y?null===(n=Y)||"auto"===n?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,R="string"==typeof(o=x||I)?o:(0,h.formatUrl)(o);if(B){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(r)}let $=B?a&&"object"==typeof a&&a.ref:P,H=s.default.useCallback(e=>(null!==K&&(k.current=(0,g.mountLinkInstance)(e,R,K,L,_,v)),()=>{k.current&&((0,g.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,g.unmountPrefetchableInstance)(e)}),[_,R,K,L,v]),z={ref:(0,l.useMergedRef)(H,$),onClick(t){B||"function"!=typeof W||W(t),B&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!K||t.defaultPrevented||function(t,o,n,r,a,i,h){if("u">typeof window){let u,{nodeName:l}=t.currentTarget;if("A"===l.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(o)){r&&(t.preventDefault(),location.replace(o));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(20683);s.default.startTransition(()=>{d(o,r?"replace":"push",!1===a?c.ScrollBehavior.NoScroll:c.ScrollBehavior.Default,n.current,h)})}}(t,R,k,j,N,F,O)},onMouseEnter(e){B||"function"!=typeof E||E(e),B&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),K&&_&&(0,g.onNavigationIntent)(e.currentTarget,!0===C)},onTouchStart:function(e){B||"function"!=typeof D||D(e),B&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),K&&_&&(0,g.onNavigationIntent)(e.currentTarget,!0===C)}};return(0,d.isAbsoluteUrl)(R)?z.href=R:B&&!S&&("a"!==a.type||"href"in a.props)||(z.href=(0,y.addBasePath)(R)),p=B?s.default.cloneElement(a,z):(0,i.jsx)("a",{...M,...z,children:r}),(0,i.jsx)(w.Provider,{value:b,children:p})}e.r(17238);let w=(0,s.createContext)(g.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(w);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},31798,(e,t,o)=>{t.exports=e.r(61461)},13205,e=>{"use strict";var t=e.i(51466),o=e.i(6295),n=e.i(31798),r=e.i(79959),a=e.i(36696);let i=[{href:"/",label:"Home"},{href:"/letters",label:"Letters"},{href:"/time-capsule",label:"Time Capsules"},{href:"/birthday-vault",label:"Birthday Vault"},{href:"/milestones",label:"Milestones"},{href:"/about",label:"About"},{href:"/settings",label:"Settings"}];e.s(["default",0,function(){let e=(0,n.usePathname)(),[s,h]=(0,r.useState)(!1),[u,l]=(0,r.useState)("");return(0,r.useEffect)(()=>{try{l((0,a.getCurrentUser)())}catch{}},[]),(0,t.jsxs)("nav",{className:"border-b border-card",role:"navigation","aria-label":"Main navigation",children:[(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-4 flex items-center justify-between h-14",children:[(0,t.jsx)(o.default,{href:"/",className:"text-accent font-heading text-lg tracking-wide hover:opacity-80 transition-opacity shrink-0","aria-label":"Words to Santhi - Home",children:"Words to Santhi"}),(0,t.jsx)("div",{className:"hidden md:flex items-center gap-6",children:i.map(n=>(0,t.jsx)(o.default,{href:n.href,className:`text-sm transition-colors hover:text-accent ${e===n.href?"text-accent":"text-secondary"}`,children:n.label},n.href))}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("span",{className:"text-xs font-heading tracking-wide text-secondary/70 bg-card border border-accent/10 rounded-full px-3 py-1",children:"kingsuk"===u?"Kingsuk":"Sania"}),(0,t.jsx)("button",{className:"md:hidden text-text p-3",onClick:()=>h(!s),"aria-label":s?"Close menu":"Open menu","aria-expanded":s,children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s?(0,t.jsx)("path",{d:"M6 18L18 6M6 6l12 12"}):(0,t.jsx)("path",{d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),s&&(0,t.jsx)("div",{className:"md:hidden border-t border-card px-4 py-3 flex flex-col gap-3",role:"menu",children:i.map(n=>(0,t.jsx)(o.default,{href:n.href,onClick:()=>h(!1),className:`text-sm transition-colors hover:text-accent ${e===n.href?"text-accent":"text-secondary"}`,role:"menuitem",children:n.label},n.href))})]})}])},43222,e=>{"use strict";var t=e.i(51466),o=e.i(79959),n=e.i(24170),r=e.i(90037);e.s(["default",0,function(){let[e,a]=(0,o.useState)(!1),[i,s]=(0,o.useState)(!1),[h,u]=(0,o.useState)(0),l=n.letters.find(e=>"easter-egg"===e.id);return l?i?(0,t.jsx)(r.default,{letter:l,onClose:()=>{s(!1),a(!1),u(0)}}):(0,t.jsxs)("div",{className:"fixed bottom-4 right-4 z-50",role:"complementary","aria-label":"Hidden easter egg",children:[(0,t.jsx)("button",{onClick:()=>{let e=h+1;u(e),e>=5&&a(!0)},className:`w-11 h-11 rounded-full transition-all duration-300 ${e?"bg-accent cursor-pointer animate-glow":"bg-transparent border border-card hover:border-accent/30 cursor-pointer"}`,"aria-label":e?"Open secret letter":"Hidden button",title:"..."}),e&&(0,t.jsxs)("div",{className:"absolute bottom-14 right-0 bg-card border border-accent/30 rounded-lg p-4 shadow-xl min-w-48",children:[(0,t.jsx)("p",{className:"text-xs text-secondary mb-2",children:"You found it."}),(0,t.jsx)("button",{onClick:()=>s(!0),className:"text-accent text-sm hover:underline",children:"Open secret letter"})]})]}):null}])},27257,e=>{"use strict";var t=e.i(51466),o=e.i(79959),n=e.i(36696);let r={sania:"santhihidimbi",kingsuk:"kingsukisstillhuman"},a={background:"rgba(141,170,145,0.18)",border:"2.5px solid rgba(214,179,112,0.6)",boxShadow:"0 0 20px rgba(214,179,112,0.1), inset 0 0 15px rgba(141,170,145,0.08)"},i={color:"rgba(214,179,112,0.85)"};e.s(["default",0,function({children:e}){let[s,h]=(0,o.useState)("start"),[u,l]=(0,o.useState)(null),[d,y]=(0,o.useState)(""),[c,g]=(0,o.useState)(!1),[m,f]=(0,o.useState)(!1),[p,w]=(0,o.useState)(!1),[b,v]=(0,o.useState)(!1),[k,I]=(0,o.useState)(!1),[x,T]=(0,o.useState)(!1);(0,o.useEffect)(()=>{try{let e=(0,n.getCurrentUser)();if(sessionStorage.getItem("words-to-santhi-auth")===r[e]){h("authed"),T(!0);return}}catch{}h("active")},[]),(0,o.useEffect)(()=>{let e=()=>{h("active"),l(null),y(""),g(!1),f(!1),w(!1),v(!1),I(!1),T(!1),setTimeout(()=>I(!0),100),setTimeout(()=>f(!0),900),setTimeout(()=>w(!0),1e3),setTimeout(()=>{v(!0),h("select")},2100)};return window.addEventListener("logout",e),()=>window.removeEventListener("logout",e)},[]),(0,o.useEffect)(()=>{if("active"!==s)return;let e=setTimeout(()=>I(!0),100),t=setTimeout(()=>f(!0),900),o=setTimeout(()=>w(!0),1e3),n=setTimeout(()=>{v(!0),h("select")},2100);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(o),clearTimeout(n)}},[s]);let Y=e=>{l(e),h("password")};if("authed"===s&&x)return(0,t.jsx)("div",{className:"animate-gate-enter",style:{willChange:"opacity"},children:e});let S="select"===s;return(0,t.jsxs)("div",{className:`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg overflow-hidden ${"leaving"===s?"animate-gate-exit":""}`,style:{willChange:"transform, opacity"},children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,179,112,0.03)_0%,transparent_70%)] pointer-events-none"}),("start"===s||"active"===s||"select"===s)&&(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-heading text-text mb-2 animate-fade-in",children:"Words to Santhi"}),(0,t.jsx)("div",{className:`transition-all duration-700 ease-out overflow-hidden ${b?"opacity-100 max-h-20 mt-0":"opacity-0 max-h-0"}`,children:(0,t.jsx)("p",{className:"text-base text-secondary/80 font-heading mb-10",children:"Are you the sister or the brother?"})}),(0,t.jsx)("div",{className:"flex items-center justify-center mt-4 h-36",children:(0,t.jsxs)("div",{className:"relative w-56 h-36 flex items-center justify-center",children:[(0,t.jsx)("div",{className:`absolute w-14 h-14 rounded-full bg-accent/5 blur-xl transition-all duration-1000 ${k?"opacity-100":"opacity-0"}`}),(0,t.jsxs)("button",{onClick:()=>S&&Y("sania"),disabled:!S,className:"absolute flex flex-col items-center gap-2",style:{willChange:"transform",transform:`translateX(${m?-76:0}px) translateZ(0)`,transition:"transform 1.4s cubic-bezier(0.34, 1.2, 0.64, 1)",pointerEvents:S?"auto":"none"},children:[(0,t.jsx)("div",{className:`w-[72px] h-[72px] rounded-full flex items-center justify-center text-xl font-heading transition-all duration-700 ${k?"opacity-100 scale-100":"opacity-0 scale-50"} ${S?"hover:shadow-lg cursor-pointer":""}`,style:{...a,transition:"opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s"},children:(0,t.jsx)("span",{style:{...i,opacity:+!!p,transition:"opacity 0.4s ease-out"},children:"S"})}),(0,t.jsx)("span",{className:`text-sm font-heading transition-all duration-500 delay-200 ${b?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}`,style:{color:S?"rgba(245,241,232,0.9)":"rgba(245,241,232,0.5)"},children:"Sania"})]}),(0,t.jsxs)("button",{onClick:()=>S&&Y("kingsuk"),disabled:!S,className:"absolute flex flex-col items-center gap-2",style:{willChange:"transform",transform:`translateX(${76*!!m}px) translateZ(0)`,transition:"transform 1.4s cubic-bezier(0.34, 1.2, 0.64, 1)",pointerEvents:S?"auto":"none"},children:[(0,t.jsx)("div",{className:`w-[72px] h-[72px] rounded-full flex items-center justify-center text-xl font-heading transition-all duration-700 ${k?"opacity-100 scale-100":"opacity-0 scale-50"} ${S?"hover:shadow-lg cursor-pointer":""}`,style:{...a,transition:"opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s"},children:(0,t.jsx)("span",{style:{...i,opacity:+!!p,transition:"opacity 0.4s ease-out"},children:"K"})}),(0,t.jsx)("span",{className:`text-sm font-heading transition-all duration-500 delay-200 ${b?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}`,style:{color:S?"rgba(245,241,232,0.9)":"rgba(245,241,232,0.5)"},children:"Kingsuk"})]})]})})]}),"password"===s&&(0,t.jsxs)("div",{className:"text-center animate-fade-in w-full max-w-sm mx-auto px-4",children:[(0,t.jsx)("button",{onClick:()=>{l(null),y(""),g(!1),h("select")},className:"mb-6 text-xs text-secondary hover:text-text transition-colors",children:"← Back"}),(0,t.jsx)("div",{className:"w-[72px] h-[72px] mx-auto mb-4 rounded-full flex items-center justify-center text-xl font-heading",style:a,children:(0,t.jsx)("span",{style:i,children:"sania"===u?"S":"K"})}),(0,t.jsx)("h2",{className:"text-xl font-heading text-text mb-1 capitalize",children:u}),(0,t.jsx)("p",{className:"text-sm text-secondary/70 mb-6",children:"Enter your password"}),(0,t.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),d===r[u||""]){try{sessionStorage.setItem("words-to-santhi-auth",d)}catch{}h("leaving"),setTimeout(()=>{h("authed"),T(!0)},400)}else g(!0)},className:"flex flex-col gap-4",children:[(0,t.jsx)("input",{type:"password",value:d,onChange:e=>{y(e.target.value),g(!1)},placeholder:"Password",className:"w-full bg-card border border-accent/20 rounded-lg px-4 py-3 text-sm text-text placeholder-secondary/50 focus:outline-none focus:border-accent/50 transition-colors text-center",autoFocus:!0,"aria-label":"Password"}),c&&(0,t.jsx)("p",{className:"text-xs text-red-400",children:"Incorrect password. Try again."}),(0,t.jsx)("button",{type:"submit",className:"text-sm px-6 py-3 rounded-lg transition-all border",style:{background:"rgba(141,170,145,0.1)",borderColor:"rgba(214,179,112,0.3)",color:"rgba(214,179,112,0.85)"},children:"Enter"})]})]})]})}])},74011,e=>{"use strict";var t=e.i(51466);e.s(["default",0,function({children:e}){return(0,t.jsx)(t.Fragment,{children:e})}])}]);