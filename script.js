'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀

const openModal = function (stopEvent) {
  stopEvent.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦

/* 183. Selecting, Creating, and Deleting Elements */

/* for selecting elements or anything from DOM */
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const allHeader = document.querySelector('.header');
console.log(allHeader);
const allSection = document.querySelector('#section--1');
console.log(allSection);
document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton);
/* gives output in terms of HTMLCollection(9)  */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

/* creating or inserting elements */

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML =
  'We use cookied for improved functionality and analytics.<button class="btn btn--close--cookie">got it!</button>';
// allHeader.prepend(message);
// allHeader.append(message);

allHeader.before(message);
// allHeader.after(message);
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* delete element */
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    //message.parentElement.removeChild(message);
    message.remove();
  });

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 184. Styles, Attributes and Classes */

/* styles */
// inline styles..
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // nothing in output
console.log(message.style.backgroundColor); // rgb(55, 56, 61)
// console.log(getComputedStyle(message));
/* list of all element property that we can apply on this
but we can choose some property to know there default values  */
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 49px this is in form of string

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height); // 89px

/* if we change in value of any element  
CSS variables is of course very similar to the idea
of variables in JavaScript,so this way we can change the value
in many places all over our CSS files by simply changing the value here.
Now, if we can change the value here, so here in our CSS,
then we can also change it right from JavaScript,*/

// to change style propertey
document.documentElement.style.setProperty('--color-primary', 'orangered');

// to change attribute propertey
const logo = document.querySelector('.nav__logo');
console.log(logo.src); //http://127.0.0.1:5500/img/logo.png
console.log(logo.alt); // Bankist logo
console.log(logo.className); // nav__logo
/* for non standered attribute propertey it return undefined */
console.log(logo.designer); // undefined
/* to get this */
console.log(logo.getAttribute('designer')); // null
/* we can also set attribute value */
logo.setAttribute('company', 'Banlist');

console.log(logo.src);
/* http://127.0.0.1:5500/img/logo.png */ // absolute value
console.log(logo.getAttribute('src'));
/* img/logo.png */ // relative value

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:5500/index.html#
console.log(link.getAttribute('herf')); // null

// data Attributes
console.log(logo.dataset.versionNumber);
/* 3.0 */

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
//logo.classList.contain('c', 'j');

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 185. Implementing Smooth Scrolling */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  /* DOMRect {x: 0, y: 978.3333740234375, width: 973.3333740234375, height: 1554.3333740234375, top: 978.3333740234375, …}
bottom: 2532.666748046875
height: 1554.3333740234375
left: 0
right: 973.3333740234375
top: 978.3333740234375
width: 973.3333740234375
x: 0
y: 978.3333740234375
 */
  console.log(e.target.getBoundingClientRect());
  /* DOMRect {x: 30, y: 735.3333740234375, width: 110, height: 27.33333396911621, top: 735.3333740234375, …}
bottom: 762.6667079925537
height: 27.33333396911621
left: 30
right: 140
top: 735.3333740234375
width: 110
x: 30
y: 735.3333740234375
 */
  console.log('Current scroll(X/Y)', window.pageXOffset, pageYOffset);
  /* Current scroll(X/Y) 0 533.3333129882812 */
  console.log(
    'height/width viewprt',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  /* height/width viewprt 867 973 */
  // according to visible screen

  // scrolling
  /* window.scrollTo(s1coords.left, s1coords.top);*/
  /*  in this code there is some problem  */
  /*  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  ); */

  /* in this also we have some problem */
  /*  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  }); */
  /* one more method to scroll and modern way */
  section1.scrollIntoView({ behavior: 'smooth' });
});

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 186. Types of Events and Event Handlers */

// mouse enter event
const alertH1 = function (e) {
  console.log(' welcome Devender Kumar');
  // h1.removeEventListener('mouseenter', alertH1);
};
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function () {
//   console.log('another method');

setTimeout(() => h1.removeEventListener('mouseenter', alertH1));

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 187 & 188. Event Propagation: Bubbling and Capturing */

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomcolor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
  /* to see where this event generated */
  //console.log(e.target);
  /* The currentTarget read-only property of the Event interface identifies 
  the current target for the event, as the event traverses the DOM.
   It always refers to the element to which the event handler has been attached, 
   as opposed to Event.target,which identifies the element on which the event 
   occurred and which may be its descendant. */
  //console.log(e.currentTarget);
  //console.log(e.currentTarget === this); // true
  //console.log('clicked1');
  /* stop propogation or stop bubbling */
  // e.stopPropagation();
  /* not good idea to use this code */
});
// parent element of above element
/* Now, what do you think happens
when we click only outside here? So only in the nav_links?
Well, let's see.So you see that the color on the nav__link itself keeps unchanged
and that's because this is the parent element.And so from here,
the event only bubbles up to its parent elements. */
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
  //console.log(e.target);
  //console.log(e.currentTarget);
  //console.log(e.currentTarget === this); // true
  //console.log('clicked2');
});
// parent element of above element
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomcolor();
    //console.log(e.target);
    //console.log(e.currentTarget);
    //   console.log(e.currentTarget === this); // true
    //   console.log('clicked3');
  }
  // true (by default set to false)
);

/* So the two phases that I just described are phase2 and phase3
in the slide that we saw in the last video, right.But now, what about the capture phase1?
So that was phase1. Well, as we learned, events are captured
when they come down from the document route all the way to the target,
but our event handlers are not picking up these events during the capture phase1.
Remember that? So I mentioned that at event listener here,
it's only listening for events in the bubbling phase3, but not in the capturing phase1.
So that is the default behavior of the add event listener method,
and the reason for that is that the capturing phase1 is usually irrelevant for us.
It's just not that useful. 
Now, on the other hand, the bubbling phase3
can be very useful for something called event delegation.*/

/* So that's something that we're going to do in the next lecture.
However, if we really do want to catch events during the capturing phase,
we can define a third parameter in the addEventlistener function. */

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 189. Event Delegation: Implementing Page Navigation */

console.log(document.querySelectorAll('.nav__link'));
/* NodeList(4) [a.nav__link, 
  a.nav__link, 
  a.nav__link, 
  a.nav__link.nav__link--btn.btn--show-modal]
 */
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    /* #section--1
       #section--2
       #section--3 */
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
/* Now, as you see, this actually works just fine,but the problem is that it's not really efficient.
So we are adding here the exact same callback function,so this event handler here,
we are adding it once to each of these three elements.So the exact same function is now attached
to these three elements.And that's kind of unnecessary.
I mean, of course it would be fine for only three elements,but what if we had 1000,
or like 10,000 elements?
If we were to attach an event handler to 10,000 elements like this,
so like we did here with the forEach function,then we would effectively be creating 10,000 copies
of this same function here.And so that would then certainly impact the performance.
And it's really just not a clean solution in that case. */

/* so, the better solution without a doubt,is to use events delegation.
So in event delegation,we use the fact that events bubble up.
And we do that by putting the eventListener on a common parent of all the elements
that we are interested in. */

/* 1. add event listner to common to common parent element 
   2. determin what element originated the event */

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  // i received error for not to put code in block scope
  // received null in id
});
/* as we click somewhere here in the middle of buttons,
then we see that the click of course happened
in this entire element, not in one of the links.
And this part is actually important to notice
because now we actually only want to workwith the 
clicks that happened on one of the links.
So only this one, or this one,but the click that
 happens here on this nav__links element,
is not relevant at all. for that we apply if condition  */

/* there is actually an even more important use case
of event delegation,which is when we are working with elements
that are not yet on the page on runtime.So by the time the page loads.And a great example are buttons
that are added dynamically while using the application.So it's not possible to add event handlers
on two elements that do not exist,but we will still be able to handle events
on elements that don't exist at the beginning by using event delegation one more time.
And we will actually do this later in this section. */

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 190. DOM Traversing */

/* going downwards in DOM tree */
const h2 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
/* NodeList(2) [span.highlight, span.highlight]
0: span.highlight
1: span.highlight
 */
console.log(h1.childNodes);
/* NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
0: text
1: comment
2: text
3: span.highlight
4: text
5: br
6: text
7: span.highlight
8: text
 */
console.log(h1.children);
/* HTMLCollection(3) [span.highlight, br, span.highlight] */
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orabgered';
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* going upwards in DOM tree  */

console.log(h1.parentNode);
/* div.header__title */
console.log(h1.parentElement);
/*  */
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* going sideways(siblings) in DOM tree  */
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // h4

console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text
console.log(h1.parentElement.children);
/* HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img] */
/* we can apply on any propertey of siblings of h1 not h1  */
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
/* 191. Building a Tabbed Component */
const tabs = document.querySelectorAll('.operations__tab');
console.log(tabs);
/* NodeList(3) [button.btn.operations__tab.operations__tab--1.operations__tab--active, 
  button.btn.operations__tab.operations__tab--2, 
  button.btn.operations__tab.operations__tab--3]
 */
const tabContainer = document.querySelector('.operations__tab-container');
console.log(tabContainer); // to get element
const tabContent = document.querySelectorAll('.operations__content');
console.log(tabContent);
/* NodeList(3) [div.operations__content.operations__content--1.operations__content--active, 
  div.operations__content.operations__content--2, 
  div.operations__content.operations__content--3]
 */
/* apply eventlistner to all tab by using event delegation */
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // guard clause
  if (!clicked) return;

  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate tab
  clicked.classList.add('operations__tab--active');

  // activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
