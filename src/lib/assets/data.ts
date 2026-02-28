export interface Chapter {
	chapterNumber: string;
	title: string;
	minPage: string;
	maxPage: string;
}

interface Subject {
	name: string;
	chapters: Chapter[];
}

interface ClassItem {
	classNumber: string;
	subjects: Subject[];
}

type ClassDataType = ClassItem[];

export const classData: ClassDataType = [
	{
		classNumber: '2',
		subjects: [
			{
				name: 'Malayalam',
				chapters: [
					{ chapterNumber: '6', title: 'പറക്കും വീട് ', minPage: '62', maxPage: '78' },
					{ chapterNumber: '7', title: 'മണിയൻ്റെ യാത്ര', minPage: '88', maxPage: '99' },
					{ chapterNumber: '8', title: 'പച്ചിലത്തുമ്പിലൂടെ', minPage: '100', maxPage: '109' },
					{ chapterNumber: '9', title: 'ആരോഗ്യവും സമ്പത്ത്', minPage: '110', maxPage: '121' },
					{ chapterNumber: '10', title: 'സിംഹരാജനും മാൻകുഞ്ഞും', minPage: '122', maxPage: '131' },
					{ chapterNumber: '11', title: 'മിന്നിമിനുങ്ങും മിന്നാമിന്നി', minPage: '132', maxPage: '141' }
				]
			},
			{
				name: 'English',
				chapters: [
					{ chapterNumber: '3', title: 'The Village Of Birds', minPage: '63', maxPage: '102' },
					{ chapterNumber: '4', title: 'Star In The Jar', minPage: '111', maxPage: '142' },
					{ chapterNumber: '5', title: 'Robo and Friends', minPage: '143', maxPage: '166' }
				]
			},
			{
				name: 'Maths',
				chapters: [
					{ chapterNumber: '5', title: 'ഒന്നായ് ചേരാം നന്നായ് വളരാം', minPage: '68', maxPage: '86' },
					{ chapterNumber: '6', title: 'കാട്ടിലെ ഉത്സവം', minPage: '96', maxPage: '104' },
					{ chapterNumber: '7', title: 'ചങ്ങാതിക്കൂട്ടം', minPage: '112', maxPage: '129' },
					{ chapterNumber: '8', title: "അളന്നു നോക്കാം", minPage: '130', maxPage: '141' },
					{ chapterNumber: '9', title: "കലണ്ടർ കളികൾ", minPage: '142', maxPage: '153' },
					{ chapterNumber: '10', title: "ചന്തമുള്ള ബന്ധങ്ങൾ", minPage: '154', maxPage: '165' },
					{ chapterNumber: '11', title: "എണ്ണി...എണ്ണി... കളത്തിലാക്കാം", minPage: '166', maxPage: '174' }
				]
			}
		]
	},
    {
		classNumber: '3',
		subjects: [
			{
				name: 'Malayalam',
				chapters: [
					{ chapterNumber: '1', title: 'കനകച്ചിലങ്ക ', minPage: '7', maxPage: '31' },
					{ chapterNumber: '2', title: 'പലഹാരപ്പൊതി', minPage: '33', maxPage: '51' },
					{ chapterNumber: '3', title: 'മനുഷ്യന്റെ കൈകൾ', minPage: '53', maxPage: '62' },
					{ chapterNumber: '4', title: 'അപ്പൂപ്പൻതാടി', minPage: '71', maxPage: '97' },
					{ chapterNumber: '5', title: 'നമ്മളൊന്ന്', minPage: '99', maxPage: '114' },
					{ chapterNumber: '6', title: 'മാനത്തോളം', minPage: '116', maxPage: '134' }
				]
			},
			{
				name: 'English',
				chapters: [
					{ chapterNumber: '1', title: 'Tender Touch', minPage: '7', maxPage: '36' },
					{ chapterNumber: '2', title: 'Festive Fun', minPage: '37', maxPage: '60' },
					{ chapterNumber: '3', title: 'IN HARMONY', minPage: '61', maxPage: '86' },
					{ chapterNumber: '4', title: 'BLOOMS AND BREEZE', minPage: '94', maxPage: '124' },
					{ chapterNumber: '5', title: 'Honesty Pays', minPage: '125', maxPage: '150' }
				]
			},
			{
				name: 'EVS',
				chapters: [
					{ chapterNumber: '1', title: 'ഹരിതഭൂമി', minPage: '7', maxPage: '21' },
					{ chapterNumber: '2', title: 'ജന്തുലോകത്തേക്ക്', minPage: '22', maxPage: '37' },
					{ chapterNumber: '3', title: 'ജലവും മണ്ണും', minPage: '38', maxPage: '54' },
					{ chapterNumber: '4', title: "വൃത്തി നൽകും ശക്തി", minPage: '55', maxPage: '70' },
					{ chapterNumber: '5', title: "ആഹാരവും ആരോഗ്യവും", minPage: '77', maxPage: '94' },
					{ chapterNumber: '6', title: "സുരക്ഷിതജീവിതം", minPage: '95', maxPage: '113' },
					{ chapterNumber: '7', title: "നാം ജീവിക്കുന്ന ലോകം", minPage: '114', maxPage: '133' },
					{ chapterNumber: '8', title: "വീടും കൂടും", minPage: '135', maxPage: '148' }
				]
			}
		]
	},
    {
		classNumber: '4',
		subjects: [
			{
				name: 'Malayalam',
				chapters: [
					{ chapterNumber: '4', title: "കളിക്കാം ചിരിക്കാം", minPage: '87', maxPage: '104' },
					{ chapterNumber: '5', title: "നന്നാവാനൊന്നാവാം", minPage: '105', maxPage: '125' },
					{ chapterNumber: '6', title: "പിന്നിട്ട പാതകൾ", minPage: '127', maxPage: '149' }
				]
			},
			{
				name: 'English',
				chapters: [
					{ chapterNumber: '3', title: "Pages of Wonder", minPage: '61', maxPage: '86' },
					{ chapterNumber: '4', title: "Delightful Bites", minPage: '95', maxPage: '124' },
					{ chapterNumber: '5', title: "The Melody of Rain", minPage: '125', maxPage: '150' }
				]
			},
            {
				name: 'EVS',
				chapters: [
					{ chapterNumber: '6', title: "ആകാശക്കാഴ്‌ചകൾ", minPage: '106', maxPage: '121' },
					{ chapterNumber: '7', title: "ദിക്കറിയാം നാടറിയാം", minPage: '122', maxPage: '133' },
					{ chapterNumber: '8', title: "ഇന്നലെ, ഇന്ന്...", minPage: '134', maxPage: '158' }
				]
			},
			{
				name: 'Maths',
				chapters: [
					{ chapterNumber: '6', title: "കുറയുന്ന കൂട്ടം", minPage: '77', maxPage: '94' },
					{ chapterNumber: '7', title: "പെരുക്കൽപ്പെരുമ", minPage: '103', maxPage: '120' },
					{ chapterNumber: '8', title: "ഇങ്ങനെ അളക്കാം", minPage: '121', maxPage: '138' },
					{ chapterNumber: '9', title: "തുല്യമായ കൂട്ടം", minPage: '139', maxPage: '162' },
					{ chapterNumber: '10', title: "അളന്നും തൂക്കിയും", minPage: '163', maxPage: '172' },
					{ chapterNumber: '11', title: "ചിത്രങ്ങൾ കഥ പറയുന്നു", minPage: '173', maxPage: '182' }
				]
			}
		]
	}
];
