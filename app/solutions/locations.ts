interface City {
  slug: string;
  title: string;
}

interface State {
  slug: string;
  title: string;
  cities: City[];
}

export const locations: State[] = [
  {
    slug: 'alabama',
    title: 'Alabama',
    cities: [
      { slug: 'birmingham', title: 'Birmingham' },
      { slug: 'montgomery', title: 'Montgomery' },
      { slug: 'mobile', title: 'Mobile' },
      { slug: 'huntsville', title: 'Huntsville' },
      { slug: 'tuscaloosa', title: 'Tuscaloosa' },
    ],
  },
  {
    slug: 'alaska',
    title: 'Alaska',
    cities: [
      { slug: 'anchorage', title: 'Anchorage' },
      { slug: 'fairbanks', title: 'Fairbanks' },
      { slug: 'juneau', title: 'Juneau' },
      { slug: 'sitka', title: 'Sitka' },
      { slug: 'ketchikan', title: 'Ketchikan' },
    ],
  },
  {
    slug: 'arizona',
    title: 'Arizona',
    cities: [
      { slug: 'phoenix', title: 'Phoenix' },
      { slug: 'tucson', title: 'Tucson' },
      { slug: 'mesa', title: 'Mesa' },
      { slug: 'chandler', title: 'Chandler' },
      { slug: 'glendale', title: 'Glendale' },
    ],
  },
  {
    slug: 'arkansas',
    title: 'Arkansas',
    cities: [
      { slug: 'little-rock', title: 'Little Rock' },
      { slug: 'fort-smith', title: 'Fort Smith' },
      { slug: 'fayetteville', title: 'Fayetteville' },
      { slug: 'springdale', title: 'Springdale' },
      { slug: 'jonesboro', title: 'Jonesboro' },
    ],
  },
  {
    slug: 'california',
    title: 'California',
    cities: [
      { slug: 'los-angeles', title: 'Los Angeles' },
      { slug: 'san-francisco', title: 'San Francisco' },
      { slug: 'san-diego', title: 'San Diego' },
      { slug: 'san-jose', title: 'San Jose' },
      { slug: 'fresno', title: 'Fresno' },
    ],
  },
  {
    slug: 'colorado',
    title: 'Colorado',
    cities: [
      { slug: 'denver', title: 'Denver' },
      { slug: 'colorado-springs', title: 'Colorado Springs' },
      { slug: 'aurora', title: 'Aurora' },
      { slug: 'fort-collins', title: 'Fort Collins' },
      { slug: 'lakewood', title: 'Lakewood' },
    ],
  },
  {
    slug: 'connecticut',
    title: 'Connecticut',
    cities: [
      { slug: 'hartford', title: 'Hartford' },
      { slug: 'new-haven', title: 'New Haven' },
      { slug: 'stamford', title: 'Stamford' },
      { slug: 'bridgeport', title: 'Bridgeport' },
      { slug: 'norwalk', title: 'Norwalk' },
    ],
  },
  {
    slug: 'delaware',
    title: 'Delaware',
    cities: [
      { slug: 'wilmington', title: 'Wilmington' },
      { slug: 'dover', title: 'Dover' },
      { slug: 'newark', title: 'Newark' },
      { slug: 'middletown', title: 'Middletown' },
      { slug: 'smyrna', title: 'Smyrna' },
    ],
  },
  {
    slug: 'florida',
    title: 'Florida',
    cities: [
      { slug: 'miami', title: 'Miami' },
      { slug: 'orlando', title: 'Orlando' },
      { slug: 'tampa', title: 'Tampa' },
      { slug: 'jacksonville', title: 'Jacksonville' },
      { slug: 'tallahassee', title: 'Tallahassee' },
    ],
  },
  {
    slug: 'georgia',
    title: 'Georgia',
    cities: [
      { slug: 'atlanta', title: 'Atlanta' },
      { slug: 'augusta', title: 'Augusta' },
      { slug: 'savannah', title: 'Savannah' },
      { slug: 'columbus', title: 'Columbus' },
      { slug: 'macon', title: 'Macon' },
    ],
  },
  {
    slug: 'hawaii',
    title: 'Hawaii',
    cities: [
      { slug: 'honolulu', title: 'Honolulu' },
      { slug: 'hilo', title: 'Hilo' },
      { slug: 'kahului', title: 'Kahului' },
      { slug: 'kailua', title: 'Kailua' },
      { slug: 'waipahu', title: 'Waipahu' },
    ],
  },
  {
    slug: 'idaho',
    title: 'Idaho',
    cities: [
      { slug: 'boise', title: 'Boise' },
      { slug: 'nampa', title: 'Nampa' },
      { slug: 'meridian', title: 'Meridian' },
      { slug: 'idaho-falls', title: 'Idaho Falls' },
      { slug: 'pocatello', title: 'Pocatello' },
    ],
  },
  {
    slug: 'illinois',
    title: 'Illinois',
    cities: [
      { slug: 'chicago', title: 'Chicago' },
      { slug: 'aurora', title: 'Aurora' },
      { slug: 'naperville', title: 'Naperville' },
      { slug: 'joliet', title: 'Joliet' },
      { slug: 'springfield', title: 'Springfield' },
    ],
  },
  {
    slug: 'indiana',
    title: 'Indiana',
    cities: [
      { slug: 'indianapolis', title: 'Indianapolis' },
      { slug: 'fort-wayne', title: 'Fort Wayne' },
      { slug: 'evansville', title: 'Evansville' },
      { slug: 'south-bend', title: 'South Bend' },
      { slug: 'carmel', title: 'Carmel' },
    ],
  },
  {
    slug: 'iowa',
    title: 'Iowa',
    cities: [
      { slug: 'des-moines', title: 'Des Moines' },
      { slug: 'cedar-rapids', title: 'Cedar Rapids' },
      { slug: 'davenport', title: 'Davenport' },
      { slug: 'sioux-city', title: 'Sioux City' },
      { slug: 'iowa-city', title: 'Iowa City' },
    ],
  },
  {
    slug: 'kansas',
    title: 'Kansas',
    cities: [
      { slug: 'wichita', title: 'Wichita' },
      { slug: 'overland-park', title: 'Overland Park' },
      { slug: 'kansas-city', title: 'Kansas City' },
      { slug: 'topeka', title: 'Topeka' },
      { slug: 'oman', title: 'Olathe' },
    ],
  },
  {
    slug: 'kentucky',
    title: 'Kentucky',
    cities: [
      { slug: 'louisville', title: 'Louisville' },
      { slug: 'lexington', title: 'Lexington' },
      { slug: 'bowling-green', title: 'Bowling Green' },
      { slug: 'owensboro', title: 'Owensboro' },
      { slug: 'covington', title: 'Covington' },
    ],
  },
  {
    slug: 'louisiana',
    title: 'Louisiana',
    cities: [
      { slug: 'new-orleans', title: 'New Orleans' },
      { slug: 'bossier-city', title: 'Bossier City' },
      { slug: 'lafayette', title: 'Lafayette' },
      { slug: 'shreveport', title: 'Shreveport' },
      { slug: 'lakeland', title: 'Lakeland' },
    ],
  },
  {
    slug: 'maine',
    title: 'Maine',
    cities: [
      { slug: 'portland', title: 'Portland' },
      { slug: 'augusta', title: 'Augusta' },
      { slug: 'bangor', title: 'Bangor' },
      { slug: 'south-portland', title: 'South Portland' },
      { slug: 'auburn', title: 'Auburn' },
    ],
  },
  {
    slug: 'maryland',
    title: 'Maryland',
    cities: [
      { slug: 'baltimore', title: 'Baltimore' },
      { slug: 'frederick', title: 'Frederick' },
      { slug: 'rockville', title: 'Rockville' },
      { slug: 'columbia', title: 'Columbia' },
      { slug: 'germantown', title: 'Germantown' },
    ],
  },
  {
    slug: 'massachusetts',
    title: 'Massachusetts',
    cities: [
      { slug: 'boston', title: 'Boston' },
      { slug: 'worcester', title: 'Worcester' },
      { slug: 'springfield', title: 'Springfield' },
      { slug: 'cambridge', title: 'Cambridge' },
      { slug: 'lowell', title: 'Lowell' },
    ],
  },
  {
    slug: 'michigan',
    title: 'Michigan',
    cities: [
      { slug: 'detroit', title: 'Detroit' },
      { slug: 'grand-rapids', title: 'Grand Rapids' },
      { slug: 'warren', title: 'Warren' },
      { slug: 'sterling-heights', title: 'Sterling Heights' },
      { slug: 'lansing', title: 'Lansing' },
    ],
  },
  {
    slug: 'minnesota',
    title: 'Minnesota',
    cities: [
      { slug: 'minneapolis', title: 'Minneapolis' },
      { slug: 'saint-paul', title: 'Saint Paul' },
      { slug: 'rochester', title: 'Rochester' },
      { slug: 'duluth', title: 'Duluth' },
      { slug: 'brooklyn-park', title: 'Brooklyn Park' },
    ],
  },
  {
    slug: 'mississippi',
    title: 'Mississippi',
    cities: [
      { slug: 'jackson', title: 'Jackson' },
      { slug: 'gulfport', title: 'Gulfport' },
      { slug: 'biloxi', title: 'Biloxi' },
      { slug: 'hattiesburg', title: 'Hattiesburg' },
      { slug: 'southaven', title: 'Southaven' },
    ],
  },
  {
    slug: 'missouri',
    title: 'Missouri',
    cities: [
      { slug: 'kansas-city', title: 'Kansas City' },
      { slug: 'st-louis', title: 'St. Louis' },
      { slug: 'springfield', title: 'Springfield' },
      { slug: 'jefferson-city', title: 'Jefferson City' },
      { slug: 'independence', title: 'Independence' },
    ],
  },
  {
    slug: 'montana',
    title: 'Montana',
    cities: [
      { slug: 'billings', title: 'Billings' },
      { slug: 'missoula', title: 'Missoula' },
      { slug: 'great-falls', title: 'Great Falls' },
      { slug: 'bozeman', title: 'Bozeman' },
      { slug: 'helena', title: 'Helena' },
    ],
  },
  {
    slug: 'nebraska',
    title: 'Nebraska',
    cities: [
      { slug: 'omaha', title: 'Omaha' },
      { slug: 'lincoln', title: 'Lincoln' },
      { slug: 'bellevue', title: 'Bellevue' },
      { slug: 'grand-island', title: 'Grand Island' },
      { slug: 'kearney', title: 'Kearney' },
    ],
  },
  {
    slug: 'nevada',
    title: 'Nevada',
    cities: [
      { slug: 'las-vegas', title: 'Las Vegas' },
      { slug: 'henderson', title: 'Henderson' },
      { slug: 'reno', title: 'Reno' },
      { slug: 'north-las-vegas', title: 'North Las Vegas' },
      { slug: 'sparks', title: 'Sparks' },
    ],
  },
  {
    slug: 'new-hampshire',
    title: 'New Hampshire',
    cities: [
      { slug: 'manchester', title: 'Manchester' },
      { slug: 'nashua', title: 'Nashua' },
      { slug: 'concord', title: 'Concord' },
      { slug: 'dover', title: 'Dover' },
      { slug: 'rudolph', title: 'Rudolph' },
    ],
  },
  {
    slug: 'new-jersey',
    title: 'New Jersey',
    cities: [
      { slug: 'newark', title: 'Newark' },
      { slug: 'jersey-city', title: 'Jersey City' },
      { slug: 'paterson', title: 'Paterson' },
      { slug: 'elizabeth', title: 'Elizabeth' },
      { slug: 'clifton', title: 'Clifton' },
    ],
  },
  {
    slug: 'new-mexico',
    title: 'New Mexico',
    cities: [
      { slug: 'albuquerque', title: 'Albuquerque' },
      { slug: 'las-cruces', title: 'Las Cruces' },
      { slug: 'rio-rancho', title: 'Rio Rancho' },
      { slug: 'santa-fe', title: 'Santa Fe' },
      { slug: 'roswell', title: 'Roswell' },
    ],
  },
  {
    slug: 'new-york',
    title: 'New York',
    cities: [
      { slug: 'new-york-city', title: 'New York City' },
      { slug: 'buffalo', title: 'Buffalo' },
      { slug: 'rochester', title: 'Rochester' },
      { slug: 'albany', title: 'Albany' },
      { slug: 'syracuse', title: 'Syracuse' },
    ],
  },
  {
    slug: 'north-carolina',
    title: 'North Carolina',
    cities: [
      { slug: 'charlotte', title: 'Charlotte' },
      { slug: 'raleigh', title: 'Raleigh' },
      { slug: 'greensboro', title: 'Greensboro' },
      { slug: 'winston-salem', title: 'Winston-Salem' },
      { slug: 'durham', title: 'Durham' },
    ],
  },
  {
    slug: 'north-dakota',
    title: 'North Dakota',
    cities: [
      { slug: 'fargo', title: 'Fargo' },
      { slug: 'bismarck', title: 'Bismarck' },
      { slug: 'grand-forks', title: 'Grand Forks' },
      { slug: 'minot', title: 'Minot' },
      { slug: 'williston', title: 'Williston' },
    ],
  },
  {
    slug: 'ohio',
    title: 'Ohio',
    cities: [
      { slug: 'columbus', title: 'Columbus' },
      { slug: 'cleveland', title: 'Cleveland' },
      { slug: 'cincinnati', title: 'Cincinnati' },
      { slug: 'toledo', title: 'Toledo' },
      { slug: 'akron', title: 'Akron' },
    ],
  },
  {
    slug: 'oklahoma',
    title: 'Oklahoma',
    cities: [
      { slug: 'oklahoma-city', title: 'Oklahoma City' },
      { slug: 'tulsa', title: 'Tulsa' },
      { slug: 'norman', title: 'Norman' },
      { slug: 'broken-arrow', title: 'Broken Arrow' },
      { slug: 'lawton', title: 'Lawton' },
    ],
  },
  {
    slug: 'oregon',
    title: 'Oregon',
    cities: [
      { slug: 'portland', title: 'Portland' },
      { slug: 'salem', title: 'Salem' },
      { slug: 'eugene', title: 'Eugene' },
      { slug: 'gresham', title: 'Gresham' },
      { slug: 'hillsboro', title: 'Hillsboro' },
    ],
  },
  {
    slug: 'pennsylvania',
    title: 'Pennsylvania',
    cities: [
      { slug: 'philadelphia', title: 'Philadelphia' },
      { slug: 'pittsburgh', title: 'Pittsburgh' },
      { slug: 'allentown', title: 'Allentown' },
      { slug: 'erie', title: 'Erie' },
      { slug: 'reading', title: 'Reading' },
    ],
  },
  {
    slug: 'rhode-island',
    title: 'Rhode Island',
    cities: [
      { slug: 'providence', title: 'Providence' },
      { slug: 'warwick', title: 'Warwick' },
      { slug: 'cranston', title: 'Cranston' },
      { slug: 'pawtucket', title: 'Pawtucket' },
      { slug: 'east-providence', title: 'East Providence' },
    ],
  },
  {
    slug: 'south-carolina',
    title: 'South Carolina',
    cities: [
      { slug: 'columbia', title: 'Columbia' },
      { slug: 'charleston', title: 'Charleston' },
      { slug: 'north-charleston', title: 'North Charleston' },
      { slug: 'rock-hill', title: 'Rock Hill' },
      { slug: 'greenville', title: 'Greenville' },
    ],
  },
  {
    slug: 'south-dakota',
    title: 'South Dakota',
    cities: [
      { slug: 'sioux-falls', title: 'Sioux Falls' },
      { slug: 'rapid-city', title: 'Rapid City' },
      { slug: 'brookings', title: 'Brookings' },
      { slug: 'watertown', title: 'Watertown' },
      { slug: 'pipestone', title: 'Pipestone' },
    ],
  },
  {
    slug: 'tennessee',
    title: 'Tennessee',
    cities: [
      { slug: 'nashville', title: 'Nashville' },
      { slug: 'memphis', title: 'Memphis' },
      { slug: 'knoxville', title: 'Knoxville' },
      { slug: 'chattanooga', title: 'Chattanooga' },
      { slug: 'clarksville', title: 'Clarksville' },
    ],
  },
  {
    slug: 'texas',
    title: 'Texas',
    cities: [
      { slug: 'houston', title: 'Houston' },
      { slug: 'dallas', title: 'Dallas' },
      { slug: 'austin', title: 'Austin' },
      { slug: 'san-antonio', title: 'San Antonio' },
      { slug: 'fort-worth', title: 'Fort Worth' },
    ],
  },
  {
    slug: 'utah',
    title: 'Utah',
    cities: [
      { slug: 'salt-lake-city', title: 'Salt Lake City' },
      { slug: 'west-valley-city', title: 'West Valley City' },
      { slug: 'provo', title: 'Provo' },
      { slug: 'westminster', title: 'Westminster' },
      { slug: 'sandy', title: 'Sandy' },
    ],
  },
  {
    slug: 'vermont',
    title: 'Vermont',
    cities: [
      { slug: 'burlington', title: 'Burlington' },
      { slug: 'montpelier', title: 'Montpelier' },
      { slug: 'colchester', title: 'Colchester' },
      { slug: 'augusta', title: 'Augusta' },
      { slug: 'bennington', title: 'Bennington' },
    ],
  },
  {
    slug: 'virginia',
    title: 'Virginia',
    cities: [
      { slug: 'virginia-beach', title: 'Virginia Beach' },
      { slug: 'norfolk', title: 'Norfolk' },
      { slug: 'richmond', title: 'Richmond' },
      { slug: 'alexandria', title: 'Alexandria' },
      { slug: 'hampton', title: 'Hampton' },
    ],
  },
  {
    slug: 'washington',
    title: 'Washington',
    cities: [
      { slug: 'seattle', title: 'Seattle' },
      { slug: 'spokane', title: 'Spokane' },
      { slug: 'tacoma', title: 'Tacoma' },
      { slug: 'vancouver', title: 'Vancouver' },
      { slug: 'bellevue', title: 'Bellevue' },
    ],
  },
  {
    slug: 'west-virginia',
    title: 'West Virginia',
    cities: [
      { slug: 'charleston', title: 'Charleston' },
      { slug: 'huntington', title: 'Huntington' },
      { slug: 'morgantown', title: 'Morgantown' },
      { slug: 'parkersburg', title: 'Parkersburg' },
      { slug: 'wheeling', title: 'Wheeling' },
    ],
  },
  {
    slug: 'wisconsin',
    title: 'Wisconsin',
    cities: [
      { slug: 'milwaukee', title: 'Milwaukee' },
      { slug: 'madison', title: 'Madison' },
      { slug: 'green-bay', title: 'Green Bay' },
      { slug: 'kenosha', title: 'Kenosha' },
      { slug: 'waukesha', title: 'Waukesha' },
    ],
  },
  {
    slug: 'wyoming',
    title: 'Wyoming',
    cities: [
      { slug: 'cheyenne', title: 'Cheyenne' },
      { slug: 'casper', title: 'Casper' },
      { slug: 'laramie', title: 'Laramie' },
      { slug: 'gillette', title: 'Gillette' },
      { slug: 'rock-springs', title: 'Rock Springs' },
    ],
  },
];
