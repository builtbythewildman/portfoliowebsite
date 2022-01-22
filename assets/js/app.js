//slider JS 
new fullpage('#fullpage', {
  //menu
	licenseKey: "C968EB6E-AED24E76-86AFEC0E-A2147D73",
  menu: '#menu',
	lockAnchors: false,
	anchors:['home', 'aboutme', 'skillsvisualisation','projects','contact'],
	navigation: false,
	navigationPosition: 'left',
	navigationTooltips: ['HOME', 'ABOUT ME','SKILLS VISUALISATION','PROJECTS','CONTACT'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
  //scrolling
  easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
  animateAnchor: true,
	continuousHorizontal: false,
	scrollHorizontally: true,
	autoScrolling:true,
	cards: true,
  resetSliders:true,

  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  sectionsColor: ['#394648', '#B9BAA3', '#D6D5C9','#7D8CC4', '#A22C29'],
  lazyLoading: true,
});
//methods
fullpage_api.setAllowScrolling(true);

//chart js
const labels = [
  
	'Bootstrap',
  'JavaScript',
  'Git Version Control',
	'Shopify Liquid',
	'CSS',
	'HTML',
	
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Skills Visualization',
    backgroundColor: [
      '#6699CC',
      '#FFF275',
      '#4D243D',
      '#A22C29',
      '#004777',
			'#FF7700'
    ],
    data: [8, 6, 6.2, 6, 7.8, 8.8] ,
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {}
};
const myChart = new Chart(
	document.getElementById('myChart'),
	config
);

// Custom JS



