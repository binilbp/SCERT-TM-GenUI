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
					{ chapterNumber: '9', title: "കലണ്ടർ കളികൾ", minPage: '142', maxPage: '153' }
				]
			}
		]
	}
];
