app.controller('MainController', ['$scope', function($scope) { 
	  $scope.title = 'Hi, I\’m Mallory, a web enthusiast with a passion for all things front-end.'; 
	  $scope.stats = [
	  	{
	  	  	name: 'coffee',
	  	  	number: 678
	  	},
	  	{
	  	  	name: 'lipsticks',
	  	  	number: 13
	  	},
	  	{
	  	  	name: 'websites',
			number: 16
	  	},
	  	{
	  	  	name: 'tweets',
	  	  	number: 326
	  	},
		{
			name: 'emails',
			number: 1956
		}
	  ];
	  $scope.testimonials =[
		  {
			  comment: '\"Mallory expressed an interest in web development and took the initiative to read books and websites and teach herself HTML, CSS and JavaScript. When she started with Kelsey Advertising she was still very much a novice, but eager to learn. During her time at Kelsey, she learned quickly and was a hard worker. She was constantly looking for a new challenging assignment. I\'ve seen some of her work since leaving Kelsey, and she has continued to grow into an experienced developer with a great understanding of modern web technologies.\"',
			  author: 'Brandon Eley',
			  position: 'Entrepreneur, Author and Public Speaker',
			  cite: 'https://www.linkedin.com/profile/view?id=203728093&trk=nav_responsive_tab_profile_pic'
		  },
		  {
			  comment: '\"Mallory\'s frontend skills are excellent and I highly recommend working with her! She is also the type of person that lights up a room. She\'s talented, energetic and really funny. If you\'re looking for a talented, happy person that will energize your team, hire her!\"',
			  author: 'Andrew Johnson',
			  position: 'Director of Technology at AMS Construction Parts',
			  cite: 'https://www.linkedin.com/profile/view?id=203728093&trk=nav_responsive_tab_profile_pic'
		  },
		  {
			  comment: '\"I had the pleasure of working with Mallory for over 6 months. During this time, I found her to be a very detail-oriented front-end developer. We primarily worked on Magento and Laravel based applications and her contributions to both areas were considerable. She has the ability to get thrown into a new platform or technology and run with it. Seriously good dev!\"',
			  author: 'Michael Harper',
			  position: 'Developer, Data Team at Springbot',
			  cite: 'https://www.linkedin.com/profile/view?id=203728093&trk=nav_responsive_tab_profile_pic'
		  }
	  ];
}]);

